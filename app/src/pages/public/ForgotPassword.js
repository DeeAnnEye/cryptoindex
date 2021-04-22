import React
    //  ,{ useState, useEffect }
    from 'react'
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

const ForgotPassword = () => {
    return (
        <div>
            <div className="login-area">
                <div className="container">
                    <div className="login-box ptb--100">
                        <form>
                            <div className="login-form-head">
                                <h4>Reset Password</h4>
                                <p>Hey! Reset Your Password and comeback again</p>
                            </div>
                            <div className="login-form-body">
                                <div className="form-gp">
                                    {/* <label for="exampleInputPassword1">Old Password</label> */}
                                    <input type="password" id="exampleInputPassword1" placeholder="Old Password" />
                                    <i className="ti-lock"></i>
                                </div>
                                <div className="form-gp">
                                    {/* <label for="exampleInputPassword2">New Password</label> */}
                                    <input type="password" id="exampleInputPassword2" placeholder="New Password" />
                                    <i className="ti-lock"></i>
                                </div>
                                <div className="submit-btn-area mt-5">
                                    <button id="form_submit" type="submit">Reset <i className="ti-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
