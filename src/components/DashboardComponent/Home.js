import React from 'react'
import CardContainer from './CardContainer'
import HomeInfoCardContainer from './HomeInfoCardContainer'

var store = require('store')

function Home() {
    console.log("home rendered");
    const str =  store.get('items');
    console.log(str)
    return (
        <div>
            <CardContainer/>
            <HomeInfoCardContainer/>
        </div>
    )
}

export default React.memo(Home)
