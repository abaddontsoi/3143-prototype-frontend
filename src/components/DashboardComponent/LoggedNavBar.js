import React ,{useContext} from 'react'
import {itemContext} from '../../App';
import {Link,useHistory} from 'react-router-dom';

import '../../css/loggedNav.css';
var store = require('store');

function LoggedNavBar() {
	const iL = useContext(itemContext);
	const history=useHistory();
	const totalItems=store.get('totalitems')
	//console.log("loggedbar rendered");

	const  getLogOut= () =>{
		if(window.confirm("Are you sure that you want to log off?")){ 
			iL.method({type:'logOut'});
			history.push('/');
			// location.reload();
		}
	}
	return (
		<div className="loggedBar container-fluid">
			<nav className="navbar-dark d-inline-flex align-items-center">
				<Link className="navbar-brand" to="/">
					<span className="nav-title">BiuGei-</span><span className="nav-title-to">Noodles</span>
				</Link>
			</nav>
			{/* <div className="d-flex justify-content-between align-items-center">  */}
			<div className="px-3 pt-2 me-15 ms-auto" onClick={()=>{history.push('/menu')}}>
				<i className="Btn bi bi-cart-plus-fill fancyIcon position-relative" role="button">
					<span className="position-absolute translate-middle badge rounded-circle bg-danger" style={{fontSize:".45em"}}>
						{totalItems!==0 ? totalItems: null}
					</span>
				</i>
			</div>
			<div className="px-5 pt-2 me-15 dropdown">
				<i className="Btn bi bi-person-circle fancyIcon dropdown-toggle" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
				<ul className="dropdown-menu">
					<li><Link className="dropdown-item" to="/editprofile" title="Edit Profile">Edit Profile</Link></li>
					<li className="dropdown-item" onClick={getLogOut} role="button" title="Log Out">Log Out</li>
				</ul>
			</div>
			{/* </div> */}
		</div>
	)
}

export default React.memo(LoggedNavBar)
