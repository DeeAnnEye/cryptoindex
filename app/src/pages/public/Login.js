import React
, { useState, useEffect }
    from 'react'
import { useForm } from 'react-hook-form';
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
    const {
        handleSubmit,
        register,
        unregister,
        errors,
        trigger,
        setValue,
        getValues,
        formState
    } = useForm({
        mode: 'onChange'
    });

    const saveForm = (data) => {
        console.log(data)
    }

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
                                <div className="form-gp">
                                    {/* <label for="exampleInputEmail1">Email address</label> */}
                                    <input
                                        // ref={register({
                                        //     required: 'Email is required',
                                        //     pattern: {
                                        //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        //         message: 'Invalid email address'
                                        //     }
                                        // })}
                                        {...register("emailRequired", { required: true })}
                                        type="email" id="email" name='email' placeholder="Email Address" />
                                    <i className="ti-email"></i>
                                    <div className="text-danger"></div>

                                </div>
                                <div className="form-gp">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input type="password" id="exampleInputPassword1" placeholder="Password" />
                                    <i className="ti-lock"></i>
                                    <div className="text-danger"></div>

                                </div>
                                <div className="row mb-4 rmber-area">
                                    <div className="col-6">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                            <label className="custom-control-label" for="customControlAutosizing">Remember Me</label>

                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <a>Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="submit-btn-area">
                                    <button id="form_submit" type="submit">Submit <i className="ti-arrow-right"></i></button>
                                    {/* <div className="login-other row mt-4">
                                                <div className="col-6">
                                                    <a className="fb-login" >Log in with <i className="fa fa-facebook"></i></a>
                                                </div>
                                                <div className="col-6">
                                                    <a className="google-login">Log in with <i className="fa fa-google"></i></a>
                                                </div>
                                            </div> */}
                                </div>
                                <div className="form-footer text-center mt-5">
                                    <p className="text-muted">Don't have an account? <a>Sign up</a></p>
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
