import React from 'react'
import HomeInfoCard from './HomeInfoCard'
import {Link} from 'react-router-dom';

var store = require('store')

function HomeInfoCardContainer() {
    console.log("homeinfocardcontner rendered");
    console.log("in ?" + store.get('loggedin'))
    const orderedList = store.get('orderedItems')??[];
	function alertUser(msg) {
		alert(msg);
        console.log(msg)
	}
    // alertUser('Please be reminded that only Wan Chai district is available for delivery service');

    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey">
            <Link to="#">
                <HomeInfoCard infoImg="https://images.squarespace-cdn.com/content/v1/56e33390b6aa60415bb5ff39/1477050412477-Q6ZG3W3JNFQZPFC4CHIP/Hours-Location-ICONS.jpg" 
                infoTitle=" 119 Wan Chai Rd, Wan Chai" infoLink={`All days 11:30AM - 9:00PM`}/>
            </Link>
            <Link to="/menu" >
                <HomeInfoCard infoImg="https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206749_960_720.jpg" infoTitle="Order your favourite food" infoLink="Check the Menu"/>
            </Link>
            {store.get('loggedin')===true && orderedList !== [] ? (
            <Link to="/checkout">
                <HomeInfoCard infoImg="https://images.squarespace-cdn.com/content/v1/56e33390b6aa60415bb5ff39/1477050412477-Q6ZG3W3JNFQZPFC4CHIP/Hours-Location-ICONS.jpg" 
                infoTitle="Check out" infoLink='GO'/>
            </Link>
            ):(
                <div/>
            )}
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)
