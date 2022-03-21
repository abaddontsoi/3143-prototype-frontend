import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'

function Register() {
    const [user, setUser]=useState({
        accountID:"",
        pwd:"",
        email: "",
        customerName:"",
        phone:"",
        address:"",
    })
    const [msg,setMsg] = useState('');
    const history = useHistory();
    useEffect(()=>{
        //console.log("register rendered");
        if(msg.includes("Success")){
            setTimeout(()=>{ history.push('/login');setMsg(''); },3000);            
        }
    },[msg,history])
    
    const changeMe=(e)=>{
        // console.log(e.target)
        const {name , value} = e.target;
        setUser({
            ...user, [name]:value
        })
    }
    const success ={padding:"10px 15px", border:"1px solid green", color:"green"}
    const fail ={padding:"10px 15px", border:"1px solid red", color:"red"}
    const registerMe=(e)=>{

        e.preventDefault();
        //api post to server
        axios.post('/signMeUp', user)
        .then(res =>{
            console.log(res.data);
            setMsg(res.data);
        })
        .catch((e)=>{
            setMsg("Something went wrong. Please try again later");
        })

    }
    return (
        <form className="form1" onSubmit={registerMe}>
            <h2>Register Form</h2><br/>
            <div className="d-flex flex-column">
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="account" className="form-label m-2 h5">Account name</label>
                        <input type="account" name="accountID" placeholder="account" className="form-control" value={user.accountID} onChange={changeMe} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label m-2 h5">Password</label>
                        <input type="password" name="pwd" placeholder="Password" className="form-control" value={user.pwd} onChange={changeMe} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label m-2 h5">Email</label>
                        <input type="email" name="email" placeholder="Email" className="form-control" value={user.email} onChange={changeMe} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label m-2 h5">Your Name</label>
                        <input type="name" name="customerName" placeholder="name" className="form-control" value={user.customerName} onChange={changeMe} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label m-2 h5">Your Phone Number</label>
                        <input type="phone" name="phone" placeholder="phone" className="form-control" value={user.phone} onChange={changeMe} required/>
                    </div>
                    <label htmlFor="address" className="form-label m-2 h5">Address</label>
                    <textarea type="text" name="address" placeholder="Address" className="form-control" value={user.addr} onChange={changeMe} required/>
                </div>
                <button className="btn btn-primary my-3 h4">Sign Up</button>
                <div className="h5 text-center" style={msg==='' ? {} : (msg.includes("Success") ? success :fail)}>{msg}</div>
                <hr/>
                <span>Already have an account?  |  <Link to="/login">Sign in</Link></span>              
            </div>
                 
        </form>
    )
}

export default React.memo(Register)
