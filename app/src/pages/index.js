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
import Security from './private/Security';
import ContactUs from './private/ContactUs';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // console.log(localStorage.getItem('user'))
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        {user ? <Dashboard user={user}  setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
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
                    <Route exact path="/security">
                        <Security />
                    </Route>
                    <Route exact path="/contacts">
                        <ContactUs />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default Index
