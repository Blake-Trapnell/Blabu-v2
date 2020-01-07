import React from "react";
import {Route, Switch} from 'react-router-dom';
import Login from "./Components/Login/Login.js";
import Home from "./Components/Home/Home.js";

export default (
    <Switch>
        <Route component = {Login} path = "/" exact/>
		<Route component = {Home} path = "/home" exact/>
    </Switch>
)