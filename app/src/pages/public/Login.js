import React
, { useState, useEffect }
    from 'react';
import { useForm } from 'react-hook-form';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    NavLink,
    Redirect
    // useHistory,
} from 'react-router-dom';

// local
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/themify-icons.css";
import "../assets/css/metisMenu.css";
// import "../assets/css/owl.carousel.min.css";
import "../assets/css/slicknav.min.css";
import "../assets/css/typography.css";
import "../assets/css/default-css.css";
import "../assets/css/styles.css";
import "../assets/css/responsive.css";
// import "https://www.amcharts.com/lib/3/plugins/export/export.css";

const Login = () => {
    const [loginMsg, setLoginMsg] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const saveForm = async (data) => {
        // console.log(data)
        const url = 'http://localhost:5000/auth/';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            const err = await response.json();
            console.log('Looks like there was a problem.',
                err);
                // console.log(err.msg);
                setLoginMsg(err.msg);
            return;
        } else {
            const data = await response.json();
            setLoginMsg(data.msg);
           
            // localStorage.setItem('token', data.token);
        }
    }

    // function handleClick(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    //   }
    console.log("loginMsg:",loginMsg);

    return (
        <div>

            {/* <div id="preloader">
                <div className="loader"></div>
            </div> */}
            <div className="login-area">
                <div className="container">
                    <div className="login-box ptb--70">
                        <form onSubmit={handleSubmit(saveForm)}>
                            <div className="login-form-head">
                                <h4>CRYPTOINDEX</h4>
                                <p>Login, Get Started...</p>
                            </div>
                            <div className="login-form-body">
                                {loginMsg !== '' && <div>
                                    <p style={{color: "red", paddingBottom:"2px"}}>{loginMsg}</p>
                                </div>}
                                <div className="form-gp">
                                    {/* <label for="exampleInputEmail1">Email address</label> */}
                                    <input
                                        {...register("email", { required: true })}
                                        type="email" id="email" name="email" placeholder="Email Address" />
                                    <i className="ti-email"></i>
                                    <div className="text-danger"></div>

                                </div>
                                <div className="form-gp">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input
                                        {...register("password", { required: true })}
                                        type="password" id="exampleInputPassword1" name="password" placeholder="Password" />
                                    <i className="ti-lock"></i>
                                    <div className="text-danger"></div>

                                </div>
                                <div className="row mb-4 rmber-area">
                                    <div className="col-6">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                            <label className="custom-control-label" htmlFor="customControlAutosizing">Remember Me</label>

                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/forgotpassword">Forgot Password </Link>
                                    </div>
                                </div>
                                <div className="submit-btn-area">
                                    <button id="form_submit" type="submit">
                                        Submit
                                         <i className="ti-arrow-right"></i></button>
                                    <div className="login-other row mt-4">
                                        <div className="col-6">
                                            <a className="fb-login" >Log in with <i className="fa fa-facebook"></i></a>
                                        </div>
                                        <div className="col-6">
                                            <a className="google-login">Log in with <i className="fa fa-google"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-footer text-center mt-5">
                                    <p className="text-muted">Don't have an account?<Link to="/signup">Sign Up </Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

//  <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
//                     <!-- bootstrap 4 js -->
// <script src="assets/js/popper.min.js"></script>
//                     <script src="assets/js/bootstrap.min.js"></script>
//                     <script src="assets/js/owl.carousel.min.js"></script>
//                     <script src="assets/js/metisMenu.min.js"></script>
//                     <script src="assets/js/jquery.slimscroll.min.js"></script>
//                     <script src="assets/js/jquery.slicknav.min.js"></script>

//                     <!-- others plugins -->
// <script src="assets/js/plugins.js"></script>
//                     <script src="assets/js/scripts.js"></script> 

//                 </div> 


export default Login
