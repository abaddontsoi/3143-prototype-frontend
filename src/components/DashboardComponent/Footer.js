import React from 'react'
import {Link} from 'react-router-dom';

import '../../css/footer.css'

function Footer() {
	//console.log("footer rendered");
	return (
		<>
			<div className="footer container-fluid footerNav">
				<footer className="d-flex flex-wrap align-items-center py-2">

					<div className="nav col-md-5 d-inline-flex flex-fill align-items-center justify-content-end link-light text-decoration-none">
						<Link to="#" className="nav-link px-2 " data-bs-toggle="offcanvas" data-bs-target="#about-hotel" data-bs-keyboard="true">About</Link>
						<Link to="/menu" className="nav-link px-2 ">Menu</Link>
						<Link to="/" className="nav-link px-2 ">Home</Link>
						{/* <Link to="#" className="nav-link px-2 text-light">Admin</Link> */}
							
					</div>
					
				</footer>
			</div>
		</>
	)
}

export default React.memo(Footer);
