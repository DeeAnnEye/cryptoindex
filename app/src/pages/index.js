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

const Index = () => {
    const user = null;
    return (
        <div>
            <Switch>
                <Route
                    path='/'
                    exact
                    render={() => <Redirect to='/login' />}></Route>
                <Route
                    exact
                    path='/login'
                    component={props => {
                        return (
                            <div>
                                <Login />

                                {/* <Dashboard
                                    user={user}
                                    title='Dashboard'
                                    date={moment().valueOf()}
                                /> */}
                            </div>
                        );
                    }}
                />
            </Switch>
        </div>
    )
}

export default Index
