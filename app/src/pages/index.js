import React, { useState, useEffect, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
    // useHistory,
} from 'react-router-dom';

import moment from 'moment-timezone';
import { useForm } from 'react-hook-form';
import Login from './public/Login';
import Registration from './public/Registration'
import ForgotPassword from './public/ForgotPassword'
import Dashboard from './private/Dashboard';
import Cookies from './private/Cookies';

const Index = () => {
    const user = localStorage.getItem('user');
    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Registration />
                    </Route>
                    <Route exact path="/forgotpassword">
                        <ForgotPassword />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/cookies">
                        <Cookies />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default Index
