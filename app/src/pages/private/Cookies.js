import React, { useState, useEffect } from 'react';
import {SidebarHeader,SidebarMenu,FullscreenBtn,UserProfile} from './Dashboard'
import { Link } from 'react-router-dom';

const Cookies = () => {

  const [navclick, setNavclick] = useState(false);
  const NavbarBtn = () => {    
    return <div className="nav-btn pull-left" onClick={() => {setNavclick(!navclick)}}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  }
  const PageTitle = () =>{
    return <div className="col-sm-6">
    <div className="breadcrumbs-area clearfix">
      <h4 className="page-title pull-left">CRYPTOINDEX</h4>
      <ul className="breadcrumbs pull-left">
        <li> <Link to="/dashboard">Dashboard</Link></li>
        <li><span>Cookies</span></li>
      </ul>
    </div>
  </div>
  }
  const CookieContent = () => {
    return <div>
      <div className="main-content-inner">
      <h1 className="page-title ml-0 mt-3" style={{color:'#7801ff'}}>Cookie Statement</h1>
      <div className="cookie-content mt-3">
        <p>A Cookie is a small piece of data sent from a web server and stored in a user’s web browser while the user is browsing that website. A cookie is known as an HTTP cookie, web cookie, or browser cookie.</p>
      </div>
      <div className="cookie-content mt-3">
      <p>We use flask cookies to promote account security, as well as both session and persistent cookies. Any sensitive information in these cookies is encoded so that only Cryptoindex can interpret the information stored on them. The cookies are placed for the following purposes:</p>
      </div>
      <div className="cookie-content mt-3">
      <p>a) Recognize you as a Cryptoindex user </p><br />

      <p>b) Collect information about your computer to mitigate risk and help prevent fraud</p><br />

      <p>c) Customize your experience, content, and advertising</p><br />

      <p>d) Measure promotional effectiveness.</p>
      </div>
      </div>
    </div>
  }
    return (
        <div>
        <div className={`page-container ${navclick ? 'sbar_collapsed' : ''}`}>
          {/* <!-- sidebar menu area start --> */}
          <div className="sidebar-menu">
            <SidebarHeader />
            <SidebarMenu />
          </div>
          <div className="main-content">
            {/* <!-- header area start --> */}
            <div className="header-area">
              <div className="row align-items-center">
                {/* <!-- nav and search button --> */}
                <div className="col-md-6 col-sm-8 clearfix">
                  <NavbarBtn />
                  {/* <SearchBar /> */}
                </div>
                {/* <!-- profile info & task notification --> */}
                <div className="col-md-6 col-sm-4 clearfix">
                  <ul className="notification-area pull-right">
                    <FullscreenBtn />
                    {/* <SearchBtn /> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- header area end -->
          <!-- page title area start --> */}
            {/* <!-- page title area start --> */}
            <div className="page-title-area">
              <div className="row align-items-center">
                <PageTitle />
                <div className="col-sm-6 clearfix">
                 <UserProfile />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- page title area end --> */}
         <CookieContent />
        </div>
        {/* <!-- main content area end --> */}
        {/* <!-- footer area start--> */}
        <footer>
          <div className="footer-area">
            <p>© Copyright 2021. All right reserved.</p>
          </div>
        </footer>
        {/* <!-- footer area end--> */}
      </div>
    )
}

export default Cookies
