import React, {useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
var store = require('store');

function EditProfile() {
    //console.log("editprofile rendered");
    const history = useHistory();
    
    // const memberId = store.get('user').id;
    // console.log(memberId)
    const userData = store.get('user')??[];
    const [edituser, setEditUser] = useState(
        {
            accountID:userData.accountID,
            pwd:userData.pwd,
            email: userData.email,
            customerName:userData.customerName,
            phone: userData.phone,
            address: userData.address,
        }
    )

    const editMe=(e)=>{
        const {name , value} = e.target ;
        setEditUser({
            ...edituser, [name]:value
        })
    }

    const editProfile=(e)=>{
        e.preventDefault();
        // axios.put(`https://my-json-yumito-server.herokuapp.com/users/${memberId}`, {...edituser, loggedIn:true})
        // .then(response =>{
        //     store.set('user', response.data);
        //     alert("Profile updated successfully !!")
        //     history.push('/');
        // })
        // .catch((e)=>{
        //     console.log("Something went wrong. Please try again later")
        // })

        axios.post('/userUpdate', edituser)
        .then(res =>{
            if (res.data === "Success") {
                console.log('Edit ok');
                store.set('user', edituser);
            }else{
                console.log('Edit failed')
                console.log(res.data)
            }
        })
        .catch((e)=>{
            console.log("Something went wrong. Please try again later")
            console.log(e)
        })

        history.push('/');
    }
    return (
        <div>
            {store.get('loggedin')!== undefined ? (
                <form className="form1" onSubmit={editProfile}>
                    <h2 className="text-center">Edit Profile</h2><hr/>
                        <div className="d-flex flex-column">
                            <div className="form-group py-2">  
                                <input type="email" name="email" placeholder="Email" className="form-control" value={edituser.email} onChange={editMe} required/>
                            </div>
                            <div className="form-group py-2"> 
                                <input type="password" name="pwd" placeholder="Password" className="form-control" value={edituser.pwd} onChange={editMe} required/>
                            </div>
                            <div className="form-group py-2"> 
                                <input type="phone" name="phone" placeholder="phone" className="form-control" value={edituser.phone} onChange={editMe} required/>
                            </div>
                            <div className="form-group py-2">        
                                <textarea type="text" name="address" placeholder="Address" className="form-control" value={edituser.address} onChange={editMe} required/>
                            </div>       
                            <button className="btn btn-success my-3 h4">Update Profile</button><hr/>
                        </div>
                </form>
            ) : (
                <div>
                    You havent login !
                </div>
            )}
        </div>
    )
}

export default EditProfile
