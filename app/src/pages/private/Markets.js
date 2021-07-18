import React, { useState } from 'react';
import { SidebarHeader, SidebarMenu, FullscreenBtn} from './Dashboard'
import { Link } from 'react-router-dom';


const Markets = ({ user, setIsLoggedIn }) => {

    const [navclick, setNavclick] = useState(false);
    const NavbarBtn = () => {
        return <div className="nav-btn pull-left" onClick={() => { setNavclick(!navclick) }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    }
    const PageTitle = () => {
        return <div className="col-sm-6">
            <div className="breadcrumbs-area clearfix">
                <h4 className="page-title pull-left">CRYPTOINDEX</h4>
                <ul className="breadcrumbs pull-left">
                    <li> <Link to="/dashboard">Dashboard</Link></li>
                    <li><span>Buy and Sell Coins</span></li>
                </ul>
            </div>
        </div>
    }
    const UserProfile = ({ user, setIsLoggedIn }) => {
        const [show, setShow] = useState(false);
      
        const logout = async () => {
      
          localStorage.removeItem('user');
          setIsLoggedIn(false);
          window.location.reload();
        }
      
        var username = localStorage.getItem('username');
        // console.log(username)
      
        return <div className={`user-profile pull-right ${show ? 'show' : ''}`}>
          <img
            className="avatar user-thumb"
            src="../assets/images/author/avatar.png"
            alt="avatar"
          />
          <h4 className="user-name dropdown-toggle" data-toggle="dropdown" aria-expanded={show ? "true" : "false"} onClick={() => { setShow(!show) }}>
            {`${username}`} <i className="fa fa-angle-down"></i>
          </h4>
          <div className={`dropdown-menu ${show ? 'show' : ''}`}>
            {/* <a className="dropdown-item" href="#">Message</a> */}
            {/* <a className="dropdown-item" href="#">Settings</a> */}
            <a onClick={() => {
              logout();
            }} className="dropdown-item" href="#">Log Out</a>
          </div>
        </div>
      }
    const MarketContent = () => {
        return <div>
            <div className="main-content-inner">
                <h1 className="page-title ml-0 mt-3" style={{ color: '#7801ff' }}>Crypto Trading Platforms</h1>
                <div className="wallet-content mt-4">
                    <a href='https://www.binance.com/'><img
                        className="walletimg"
                        src="../assets/images/icon/binance.jpg"
                        alt="exoduswallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/><br/>
                     <a href='https://www.kraken.com/'><img
                        className="walletimg"
                        src="../assets/images/icon/kraken.png"
                        alt="electrumwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/>
                </div>
                <div className="wallet-content mt-4">
                   <a href='https://bisq.network/'><img
                        className="walletimg"
                        src="../assets/images/icon/bisq.jpg"
                        alt="ledgerwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a> <br/><br/>
                     <a href='https://www.etoro.com/'><img
                        className="walletimg"
                        src="../assets/images/icon/etoro.png"
                        alt="trezorwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/>
                </div>
                <div className="wallet-content mt-4">
                   <a href='https://bittrex.com/'> <img
                        className="walletimg"
                        src="../assets/images/icon/bittrex.png"
                        alt="myceluimwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/><br/>
                    <a href='https://www.gemini.com/'> <img
                        className="walletimg"
                        src="../assets/images/icon/gemini.png"
                        alt="coinbasewallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/>
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
                                <UserProfile user={user} setIsLoggedIn={setIsLoggedIn} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- page title area end --> */}
                <MarketContent />
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

export default Markets
