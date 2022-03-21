import React from 'react'
import CheckNavbar from './DashboardComponent/CheckNavbar';
import {Switch, Route} from 'react-router-dom';
import Footer from './DashboardComponent/Footer'
import Home from './DashboardComponent/Home'
import Menu from './DashboardComponent/Menu'
import EditProfile from './DashboardComponent/EditProfile'
import CheckOut from './DashboardComponent/CheckOut';
import OrderConfirm from './DashboardComponent/OrderConfirm';

import '../css/dashboardLayout.css'

function DashboardLayout(props) {
	//console.log("dashLayout rendered");
	const matchPath = props.match.path;  
	return (
		<div className="dashboardLayout">
			<CheckNavbar/> 
			<div className='switchContainer'>
				<Switch>
					<Route 
						exact path={`${matchPath}`} 
						render={(props) => (matchPath === "/" ? 
							(<Home {...props} />) : 
							(matchPath ==="/menu" ? 
								(<Menu {...props} />) : 
								(matchPath ==="/checkout" ? 
									(<CheckOut {...props} />) : 
									(matchPath ==="/confirmOrder"?
										<OrderConfirm {...props}/>:
										<EditProfile {...props} />
									)
									// (
									// 	<EditProfile {...props}/>
									// )
								)
							)
						)}/>
				</Switch>
			</div>
			<Footer/>
		</div>
    )
}

export default React.memo(DashboardLayout)
