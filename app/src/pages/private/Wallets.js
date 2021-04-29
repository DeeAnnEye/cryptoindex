import React, { useState } from 'react';
import { SidebarHeader, SidebarMenu,  FullscreenBtn, UserProfile } from './Dashboard'
import { Link } from 'react-router-dom';


const Wallets = () => {

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
                    <li><span>Wallets</span></li>
                </ul>
            </div>
        </div>
    }
    const WalletContent = () => {
        return <div>
            <div className="main-content-inner">
                <h1 className="page-title ml-0 mt-3" style={{ color: '#7801ff' }}>Crypto Wallets</h1>
                <div className="wallet-content mt-4">
                    <a href='https://www.exodus.com/'><img
                        className="walletimg"
                        src="../assets/images/icon/exodus.png"
                        alt="exoduswallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/><br/>
                     <a href='https://electrum.org/'><img
                        className="walletimg"
                        src="../assets/images/icon/electrum.png"
                        alt="electrumwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/>
                </div>
                <div className="wallet-content mt-4">
                   <a href='https://www.ledger.com/'><img
                        className="walletimg"
                        src="../assets/images/icon/ledger.png"
                        alt="ledgerwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a> <br/><br/>
                     <a href='https://trezor.io/'><img
                        className="walletimg"
                        src="../assets/images/icon/trezor.png"
                        alt="trezorwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/>
                </div>
                <div className="wallet-content mt-4">
                   <a href='https://wallet.mycelium.com/'> <img
                        className="walletimg"
                        src="../assets/images/icon/mycelium.png"
                        alt="myceluimwallet"
                        style={{ height: '90px', width: '250px' }}
                    /></a><br/><br/>
                    <a href='https://wallet.coinbase.com/'> <img
                        className="walletimg"
                        src="../assets/images/icon/coinbase.png"
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
                                <UserProfile />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- page title area end --> */}
                <WalletContent />
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

export default Wallets
