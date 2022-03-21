import React, {useContext} from 'react'
import {itemContext} from '../../App';
import LoggedNavBar from './LoggedNavBar';
import Navbar from './Navbar';
var store = require('store');

function CheckNavbar() {
   // console.log("CheckNavbar rendered");
    const iL = useContext(itemContext);
    const loggedin = store.get('loggedin');
    const {loggedIn}=iL.state ?? (loggedin ?? false);

    console.log('log in bar status (loggedIn): '+ loggedIn)
    console.log('log in bar status (loggedin): '+ loggedin)

    return  (loggedIn ?
        (<LoggedNavBar/>) :
            (<Navbar/>)
    )
}

export default React.memo(CheckNavbar)
