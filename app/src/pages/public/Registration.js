import React
, { useState, useEffect }
    from 'react';
import { useForm } from 'react-hook-form';
import {
    BrowserRouter as Router,
    // Switch,
    Link,
    // Route,
    // NavLink,
    // Redirect
    // useHistory,
} from 'react-router-dom';

// import "../assets/css/bootstrap.min.css";
// import "../assets/css/font-awesome.min.css";
// import "../assets/css/themify-icons.css";
// import "../assets/css/metisMenu.css";
// // import "../assets/css/owl.carousel.min.css";
// import "../assets/css/slicknav.min.css";
// import "../assets/css/typography.css";
// import "../assets/css/default-css.css";
// // import Crypto from "../assets/images/background/crypto.png"
// import "../assets/css/styles.css";
// import "../assets/css/responsive.css";
// // import "https://www.amcharts.com/lib/3/plugins/export/export.css";

const Registration = () => {

    const [signMsg, setSignMsg] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const saveForm = async (data) => {

        if(data.password != data.confirmpassword){
           return setSignMsg("Passwords did not match");
        }else{
            delete data.confirmpassword;
        }
        // console.log(data)
        const url = 'http://localhost:5000/users/';
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
                setSignMsg(err.msg);
            return;
        } else {
            const data = await response.json();
            localStorage.setItem('user', data.token);
        }
    }

    return (
        <div>
            {/* //         <div id="preloader">
    //     <div class="loader"></div>
    // </div> */}

            <div className="login-area">
                <div className="container">
                    <div className="login-box ptb--100">
                        <form onSubmit={handleSubmit(saveForm)}>
                            <div className="login-form-head">
                                <h4>CRYPTOINDEX</h4>
                                <p>Hello there, Sign up and Join with Us</p>
                            </div>
                            <div className="login-form-body">
                                {signMsg !== '' && <div>
                                    <p style={{ color: "red", paddingBottom: "2px" }}>{signMsg}</p>
                                </div>}
                                <div className="form-gp">
                                    {/* <label for="exampleInputName1">Full Name</label> */}
                                    <input
                                        {...register("name", { required: true })}
                                        type="text" id="exampleInputName1" name="name" placeholder="Full name" />
                                    <i className="ti-user"></i>
                                    <div className="text-danger"></div>
                                </div>
                                <div className="form-gp">
                                    {/* <label for="exampleInputEmail1">Email address</label> */}
                                    <input
                                        {...register("email", { required: true })}
                                        type="email" id="exampleInputEmail1" name="email" placeholder="Email Address" />
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
                                <div className="form-gp">
                                    {/* <label for="exampleInputPassword2">Confirm Password</label> */}
                                    <input
                                        {...register("confirmpassword", { required: true })}
                                        type="password" id="exampleInputPassword2" name="confirmpassword" placeholder="Confirm Password" />
                                    <i className="ti-lock"></i>
                                    <div className="text-danger"></div>
                                </div>
                                <div className="submit-btn-area">
                                    <button id="form_submit" type="submit">Submit <i className="ti-arrow-right"></i></button>
                                    {/* <div className="login-other row mt-4">
                                        <div className="col-6">
                                            <a className="fb-login" href="#">Sign up with <i className="fa fa-facebook"></i></a>
                                        </div>
                                        <div className="col-6">
                                            <a className="google-login" href="#">Sign up with <i className="fa fa-google"></i></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="form-footer text-center mt-5">
                                    <p className="text-muted"> Already have an account? <Link to="/">Login</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
