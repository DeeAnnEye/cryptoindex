import React, { useState, 
    // useEffect, useContext
 } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // NavLink,
    // Redirect
    // useHistory,
} from 'react-router-dom';

// import moment from 'moment-timezone';
// import { useForm } from 'react-hook-form';
import Login from './public/Login';
import Registration from './public/Registration'
import ForgotPassword from './public/ForgotPassword'
import Dashboard from './private/Dashboard';
import Cookies from './private/Cookies';
import Security from './private/Security';
import ContactUs from './private/ContactUs';
import Faqs from './private/Faqs';
import About from './private/About';
import Wallets from './private/Wallets';
import Markets from './private/Markets';
import Admin from './private/Admin';
// import Chat from './private/Chat';

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
                    {user ? <Dashboard user={user}  setIsLoggedIn={setIsLoggedIn} /> :<Registration setIsLoggedIn={setIsLoggedIn} />}
                    </Route>
                    <Route exact path="/forgotpassword">
                        <ForgotPassword />
                    </Route>
                    <Route exact path="/dashboard">
                        {user ? <Dashboard user={user}  setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
                    </Route>
                    <Route exact path="/admin">
                        {user ? <Admin user={user}  setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
                    </Route>
                    <Route exact path="/cookies">
                        {user ? <Cookies user={user}  setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
                    </Route>
                    <Route exact path="/about">
                        {user ? <About user={user}  setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn} />}
                    </Route>
                    <Route exact path="/security">
                    {user ?<Security user={user}  setIsLoggedIn={setIsLoggedIn} />:<Login setIsLoggedIn={setIsLoggedIn} />}
                    </Route>
                    <Route exact path="/contacts">
                    {user ?<ContactUs user={user}  setIsLoggedIn={setIsLoggedIn} />:<Login setIsLoggedIn={setIsLoggedIn} />}
                    </Route>
                    <Route exact path="/faqs">
                    {user ? <Faqs user={user}  setIsLoggedIn={setIsLoggedIn}/> :<Login setIsLoggedIn={setIsLoggedIn}/>}                    
                    </Route>
                    <Route exact path="/wallets">
                    {user ? <Wallets user={user}  setIsLoggedIn={setIsLoggedIn}/> :<Login setIsLoggedIn={setIsLoggedIn} />}                    
                    </Route>
                    <Route exact path="/buycoins">
                    {user ? <Markets user={user}  setIsLoggedIn={setIsLoggedIn}/> :<Login setIsLoggedIn={setIsLoggedIn} />}                    
                    </Route>
                    {/* <Route exact path="/chat">
                    {user ? <Chat/> :<Login />}                    
                    </Route> */}
                </Switch>
            </div>
        </Router>

    )
}

export default Index
