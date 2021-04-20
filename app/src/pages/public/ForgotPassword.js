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
            <div class="login-area">
                <div class="container">
                    <div class="login-box ptb--100">
                        <form>
                            <div class="login-form-head">
                                <h4>Reset Password</h4>
                                <p>Hey! Reset Your Password and comeback again</p>
                            </div>
                            <div class="login-form-body">
                                <div class="form-gp">
                                    <label for="exampleInputPassword1">Old Password</label>
                                    <input type="password" id="exampleInputPassword1" />
                                    <i class="ti-lock"></i>
                                </div>
                                <div class="form-gp">
                                    <label for="exampleInputPassword2">New Password</label>
                                    <input type="password" id="exampleInputPassword2" />
                                    <i class="ti-lock"></i>
                                </div>
                                <div class="submit-btn-area mt-5">
                                    <button id="form_submit" type="submit">Reset <i class="ti-arrow-right"></i></button>
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
