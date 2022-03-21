import React,{useContext,useState,useEffect} from 'react'
import {itemContext} from '../../App';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom';
var store = require('store');

function Login() {
    const iL = useContext(itemContext);
    const history=useHistory();
    const loggedin = store.get('loggedin');
    const {loggedIn}=iL.state ?? (loggedin ?? false);
    const [userLogin, setUserLogin]=useState(
        {
            accountID:"",
            pwd:"",
        }
    ) 
    const orderedItems = store.get('orderedItems');
    let flag=false;
    //console.log("login rendered");

    useEffect(()=>{
        //navigate to specific page after login
        if(loggedIn===true){
            if(orderedItems && orderedItems.length){
                //got to checkout page
                //flag=true;
                setTimeout(()=>{ history.replace('/checkout')},1000);
            }else{
                //go to menu page
                history.replace('/');
            }
        }       
    },[loggedIn])

    const checkCred=(e)=>{
        flag=true;
        e.preventDefault();
        //api call to fetch users
        axios.get("/userDetail")
        .then(response =>{
            flag=false;
            console.log(response.data)
            iL.method( {type:'checkUser', payload: response.data ,user:userLogin});
        })
        .catch((e)=>{
            flag=false;
            alert("Please enter valid credentials")
        })

        axios.get('/order')
        .then(response=>{
            // console.log(response.data);
            // console.log(store.get('user'));
            const data = response.data;
            // console.log(data[0].orderID)
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element.accountID === userLogin.accountID) {
                    console.log(userLogin.accountID + ' have order');
                    // console.log(store.get('user').accountID);
                    // console.log(element.orderedItems)
                    // store.set('orderedItems', element.orderedItems)
                    // console.log(store.get('orderedItems'))
                    iL.method({type:'initOrder', payload:element, user: userLogin.accountID});
                }
            }
        })
        .catch((e)=>{
            console.log('error when loading orders');
        })
        store.set('loggedin', true);
        console.log('loggedin == '+store.get('loggedin'));

    }

    const loginMe =(e)=>{
        const {name , value} = e.target ;
        setUserLogin({
            ...userLogin, [name]:value
        })
    }

    return (
        <>
            {flag===true && <h4 className="text-success text-center p-1">Redirecting to...</h4>}
            <form className="form1" onSubmit={checkCred}>
                <h2>Login</h2><br/>
                <div className="form-group d-flex flex-column g-2">
                    <label htmlFor="Account" className="form-label m-2 h5">Account Name</label>
                    <input type="Account" name="accountID" className="form-control-lg" value={userLogin.accountID} onChange={loginMe} placeholder="AccountID" required/>
                </div>
                <div className="form-group d-flex flex-column g-2">
                    <label htmlFor="password" className="form-label m-2 h5">Password</label>
                    <input type="password" name="pwd" className="form-control-lg" value={userLogin.pwd} onChange={loginMe} placeholder="Password" required/>
                </div>
                <button className="btn btn-primary btn-lg m-3 ms-0">Sign in</button>
                {/* {msg  && <span style={{color:'red',padding:'5px'}}>{msg}</span> } */}
                <hr/>
                <span>Don't have an account?  |   <Link to="/register">Register Here</Link></span> 
            </form>
      </>
    )
}

export default React.memo(Login)

