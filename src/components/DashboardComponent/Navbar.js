import React from 'react'
import '../../css/navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  	//console.log("navbar rendered");
    return (
		<>
        <div className="loginBar">
			<nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">
				<Link to="/" className="navbar-brand">
				{/* <img id="nav-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlq5HBm3PMYychM_62YJmJJWksFJgcvrTaoA&usqp=CAU" alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" /> */}
				<span className="nav-title">BiuGei-</span><span className="nav-title-to">Noodles</span>
				</Link>
			</nav>
			<div className="d-inline-flex m-2 logincategory">
				<div className="">
					<Link to="/login"><button className="Btn" type="button" >Login</button></Link>
				</div>
				<div className="">
					<Link to="/register"><button className="Btn" type="button">Sign up</button></Link>
				</div>
			</div>
        </div>
      	</>
    )
}

export default React.memo(Navbar)
