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

const Index = () => {
    const user = null;
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Registration />
                    </Route>
                    <Route path="/forgotpassword">
                        <ForgotPassword />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Index
