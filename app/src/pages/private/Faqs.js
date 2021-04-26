import React, { useState } from 'react';
import {SidebarHeader,SidebarMenu,SearchBar,FullscreenBtn,UserProfile} from './Dashboard'
import { Link } from 'react-router-dom';

const Faqs = () => {

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
          <li><span>FAQ's</span></li>
        </ul>
      </div>
    </div>
    }
    const FaqContent = () => {
      return <div>
        <div className="main-content-inner">
        <h1 className="page-title ml-0 mt-3" style={{color:'#7801ff'}}>FAQ's</h1>
        <div className="faq-content mt-3">
        <h4 className="header-title mb-0 mt-4">What is Bitcoin?</h4> <br />
          <p>Bitcoin is a digital currency that functions through the internet and uses peer-to-peer technology to operate with no central authority governing the protocol. The issuing of bitcoin is carried out collectively by the network. It is open-source and free for everyone to be part of. It also has a payment system within its protocol which helps the transfer of value as instant as an email. Through its many unique properties, Bitcoin allows for exciting uses that is not covered by any existing payment system.</p><br/>
        <h4 className="header-title mb-0 mt-4">Why should I buy Bitcoin?</h4> <br /> 
          <p>Going by what seems to be people's favourite feature of Bitcoin - the dramatic increase in price and it's future potential to keep increasing, as unlike all other currencies Bitcoin is a deflationary currency. As an asset class, it has been voted as top preference owing to its virtual and decentralised nature. It has been largely compared to gold and even sometimes called "Virtual Gold" or "Gold 2.0" Bitcoin can be used exactly as money anywhere in the globe. Bitcoin gives you the freedom to control your finances. When you start exploring you will begin to believe that with the Bitcoin technology, the possibilities are endless.</p><br />
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
         <FaqContent />
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

export default Faqs
