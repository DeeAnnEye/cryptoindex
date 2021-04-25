import React, { useState, useEffect } from 'react';
import {SidebarHeader,SidebarMenu,SearchBar,FullscreenBtn,PageTitle,UserProfile} from './Dashboard'

const Cookies = () => {
  const [navclick, setNavclick] = useState(false);
  const NavbarBtn = () => {    
    return <div className="nav-btn pull-left" onClick={() => {setNavclick(!navclick)}}>
      <span></span>
      <span></span>
      <span></span>
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
                  <SearchBar />
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
         {/* <MainContent /> */}
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
