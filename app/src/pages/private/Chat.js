import React, { useState, 
  // useEffect 
} from 'react';
import {SidebarHeader,SidebarMenu,FullscreenBtn,UserProfile} from './Dashboard'
import { Link } from 'react-router-dom';

const Chat = () => {

  const ChatBox = () => {
   return <div className="chat-container">
      <header className="chat-header">
        <h1>CryptoChat</h1>
        <a id="leave-btn" className="btn">Leave Room</a>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          {/* <h3><i className="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name"></h2> */}
          <h3><i className="fas fa-users"></i> Users</h3>
          <ul id="users"></ul>
        </div>
        <div className="chat-messages"></div>
      </main>
      <div className="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autoComplete="off"
          />
          <button className="btn"><i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  }
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
        <li><span>CryptoChat</span></li>
      </ul>
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
     <ChatBox />
    </div>
    <footer>
      <div className="footer-area">
        <p>© Copyright 2021. All right reserved.</p>
      </div>
    </footer>
    {/* <!-- footer area end--> */}
    </div>
    )
}

export default Chat
