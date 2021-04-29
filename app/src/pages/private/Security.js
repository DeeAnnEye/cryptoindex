import React, { useState } from 'react';
import {SidebarHeader,SidebarMenu,FullscreenBtn,UserProfile} from './Dashboard'
import { Link } from 'react-router-dom';


const Security = () => {

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
          <li><span>Services</span></li>
        </ul>
      </div>
    </div>
    }
    const SecurityContent = () => {
      return <div>
        <div className="main-content-inner">
        <h1 className="page-title ml-0 mt-3" style={{color:'#7801ff'}}>Security</h1>
        <div className="security-content mt-3">
          <p>The Website is for your personal and non-commercial use only.</p> <br />
          <p>We are vigilant in maintaining the security of our Website and the Service.</p><br/>
          <p>By registering with us, you agree to provide Company with current, accurate, and complete information about yourself as prompted by the registration process, and to keep such information updated.</p><br />
          <p>You further agree that you will not use any Account other than your own, or access the Account of any other Member at any time, or assist others in obtaining unauthorized access</p>
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
         <SecurityContent />
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

export default Security
