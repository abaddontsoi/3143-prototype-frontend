import React from 'react'
import {Switch, Route} from 'react-router-dom';
import CardContainer from './LoginComponent/CardContainer';
import Login from './LoginComponent/Login'
import Register from './LoginComponent/Register';

function LoginLayout(props) {
    const matchPath = props.match.path;
   //console.log("loginLayout rendered");
    return (
        <>
            <CardContainer/>
            <Switch>
                <Route path={`${matchPath}`} render={(props) => matchPath ==="/login" ? 
                (<Login {...props} />) : 
                <Register {...props} /> }/>
            </Switch>
        </>
    )
}

export default React.memo(LoginLayout);
