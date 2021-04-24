import React, { useState, useEffect } from 'react';
import CoinSalesA from "./charts/CoinSales1.js"
import CoinSalesB from "./charts/CoinSales2.js"
import CoinSalesC from "./charts/CoinSales3.js"
import OverviewChart from "./charts/OverviewChart.js"

const Dashboard = () => {

  // useEffect(() => {
  //   const url = 'http://localhost:5000/';
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, []);

  const SidebarHeader = () => {
    return <div className="sidebar-header">
      <div className="logo">
        <a href="#">
          <h3 style={{ color: "white", fontWeight: 600 }}>CRYPTOINDEX</h3>
        </a>
      </div>
    </div>
  }

  const MenuItem = ({ m }) => {
    console.log(m);
    const [open, setOpen] = useState(false);
    return <li>
      <a onClick={() => {
        setOpen(!open)
      }} href="#" aria-expanded="true"
      ><i className={m.icon}></i><span>{m.name}</span></a
      >
      {open && m.submenu.length > 0 && <ul className={`collapse ${open ? 'in' : ''}`}>
        {m.submenu.map((sm, idx) =>
          <li key={'sm-' + idx}><a onClick={() => {
            alert('clicked' + sm.name)
          }} href="#">{sm.name}</a></li>)}


      </ul>}
    </li>
  }

  const SidebarMenu = () => {
    const menu = [{
      name: 'Markets',
      icon: 'ti-bar-chart',
      submenu: [{
        name: 'INR'

      },
      {
        name: 'BTC'
      },
      {
        name: 'USDT'
      }]
    }]
    return <div className="main-menu">
      {/* <div className="menu-inner"> */}
      <nav>
        <ul className="metismenu" id="menu">
          {menu.map((m, idx) => <MenuItem key={'menuitem-' + idx} m={m} />)}
          {/* <li>
          <a href="#" aria-expanded="true"
          ><i className="ti-bar-chart"></i><span>Markets</span></a
          >
          <ul className="collapse">
           
            <li><a href="#">INR</a></li>
           
            <li><a href="#">BTC</a></li>
            <li><a href="#">USDT</a></li>
          </ul>
        </li>
        <li>
          <a href="#" aria-expanded="true"
          ><i className="ti-headphone-alt"></i><span>support</span></a
          >
          <ul className="collapse">
           
            <li><a href="index.html">How It Works</a></li>
            
            <li><a href="index.html">FAQ's</a></li>
            <li><a href="index3.html">Contact Us</a></li>
          </ul>
        </li>
        <li>
          <a href="#" aria-expanded="true"
          ><i className="ti-info"></i><span>About Us</span></a
          >
          <ul className="collapse">
           
            <li><a href="#">Coin Info</a></li>
           
            <li><a href="#">About Cryptoindex</a></li>
          </ul>
        </li>
        <li>
          <a href="#"
          ><i className="ti-receipt"></i> <span>Terms of Use</span></a
          >
        </li> */}
        </ul>
      </nav>
      {/* </div> */}
    </div>
  }

  const NavbarBtn = () => {
    return <div className="nav-btn pull-left">
      <span></span>
      <span></span>
      <span></span>
    </div>
  }

  const SearchBar = () => {
    return <div className="search-box pull-left">
      <form action="#">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          required
        />
        <i className="ti-search"></i>
      </form>
    </div>
  }

  const FullscreenBtn = () => {
    const [full, setFull] = useState(true);
    return <li onClick={() => {
      setFull(!full)
    }} id={`${full ? `full-view` : `full-view-exit`}`}><i className={`${full ? `ti-fullscreen` : `ti-zoom-out`}`}></i></li>
    // <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
  }

  const SearchBtn = () => {
    return <li className="settings-btn">
      <i className="ti-settings"></i>
    </li>
  }

  const SalesCard = () => {
    return <div className="row">
      <div className="col-md-4">
        <div className="single-report mb-xs-30">
          <div className="s-report-inner pr--20 pt--30 mb-3">
            <div className="icon"><i className="fa fa-btc"></i></div>
            <div className="s-report-title d-flex justify-content-between">
              <h4 className="header-title mb-0">Bitcoin</h4>
              <p>24 H</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <h2>$ 4567809,987</h2>
              <span>- 45.87</span>
            </div>
          </div>            
          <CoinSalesA />         
        </div>
      </div>
      <div className="col-md-4">
        <div className="single-report mb-xs-30">
          <div className="s-report-inner pr--20 pt--30 mb-3">
            <div className="icon"><i className="fa fa-btc"></i></div>
            <div className="s-report-title d-flex justify-content-between">
              <h4 className="header-title mb-0">Bitcoin Dash</h4>
              <p>24 H</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <h2>$ 4567809,987</h2>
              <span>- 45.87</span>
            </div>
          </div>
          <CoinSalesB /> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="single-report">
          <div className="s-report-inner pr--20 pt--30 mb-3">
            <div className="icon"><i className="fa fa-eur"></i></div>
            <div className="s-report-title d-flex justify-content-between">
              <h4 className="header-title mb-0">Euthorium</h4>
              <p>24 H</p>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <h2>$ 4567809,987</h2>
              <span>- 45.87</span>
            </div>
          </div>
          <CoinSalesC /> 
        </div>
      </div>
    </div>
  }

  const PageTitle = () =>{
    return <div className="col-sm-6">
    <div className="breadcrumbs-area clearfix">
      <h4 className="page-title pull-left">CRYPTOINDEX</h4>
      <ul className="breadcrumbs pull-left">
        <li><a href="#">Home</a></li>
        <li><span>Dashboard</span></li>
      </ul>
    </div>
  </div>
  }

  const UserProfile = () => {
    return  <div className="user-profile pull-right">
    <img
      className="avatar user-thumb"
      src="../assets/images/author/avatar.png"
      alt="avatar"
    />
    <h4 className="user-name dropdown-toggle" data-toggle="dropdown">
      Daniela Justin <i className="fa fa-angle-down"></i>
    </h4>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Message</a>
      <a className="dropdown-item" href="#">Settings</a>
      <a className="dropdown-item" href="#">Log Out</a>
    </div>
  </div>
  }

  const OverviewArea = () => {
    return <div className="col-xl-9 col-lg-8">
    <div className="card">
      <div className="card-body">
        <div
          className="d-flex justify-content-between align-items-center"
        >
          <h4 className="header-title mb-0">Overview</h4>
          <select className="custome-select border-0 pr-3">
            <option>This Week</option>
            <option value="0">Last Week</option>
          </select>
        </div>
        {/* <div id="verview-shart"> */}
          <OverviewChart />
        {/* </div> */}
      </div>
    </div>
  </div>
  }

  const CoinDistArea = () => {
    return <div className="col-xl-3 col-lg-4 coin-distribution">
    <div className="card h-full">
      <div className="card-body">
        <h4 className="header-title mb-0">Coin Distribution</h4>
        <div id="coin_distribution"></div>
      </div>
    </div>
  </div>
  }
  return (
    <div>
      <div className="page-container">
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
                  <SearchBtn />
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
          {/* <!-- page title area end --> */}
        </div>
        {/* <!-- page title area end --> */}
        <div className="main-content-inner">
          {/* <!-- sales report area start --> */}
          <div className="sales-report-area mt-5 mb-5">
            <SalesCard />
          </div>
          {/* <!-- sales report area end --> */}

          {/* <!-- overview area start --> */}
          <div className="row">
            <OverviewArea />
            <CoinDistArea />            
          </div>
          {/* <!-- overview area end --> */}
          {/* <!-- market value area start --> */}
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div
                    className="d-sm-flex justify-content-between align-items-center"
                  >
                    <h4 className="header-title mb-0">Market Value And Trends</h4>
                    <select className="custome-select border-0 pr-3">
                      <option>Last 24 Hours</option>
                      <option value="0">01 July 2018</option>
                    </select>
                  </div>
                  <div className="market-status-table mt-4">
                    <div className="table-responsive">
                      <table className="dbkit-table">
                        <thead>
                          <tr className="heading-td">
                            <td className="mv-icon">Logo</td>
                            <td className="coin-name">Coin Name</td>
                            <td className="buy">Buy</td>
                            <td className="sell">Sells</td>
                            <td className="trends">Trends</td>
                            <td className="attachments">Attachments</td>
                            <td className="stats-chart">Stats</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="mv-icon">
                              <img
                                src="../assets/images/icon/market-value/icon1.png"
                                alt="icon"
                              />
                            </td>
                            <td className="coin-name">Dashcoin</td>
                            <td className="buy">
                              30%
                            <img
                                src="assets/images/icon/market-value/triangle-down.png"
                                alt="icon"
                              />
                            </td>
                            <td className="sell">
                              20%
                            <img
                                src="assets/images/icon/market-value/triangle-up.png"
                                alt="icon"
                              />
                            </td>
                            <td className="trends">
                              <img
                                src="assets/images/icon/market-value/trends-up-icon.png"
                                alt="icon"
                              />
                            </td>
                            <td className="attachments">$ 56746,857</td>
                            <td className="stats-chart">
                              <canvas id="mvaluechart"></canvas>
                            </td>
                          </tr>
                          <tr>
                            <td className="mv-icon">
                              <div className="mv-icon">
                                <img
                                  src="assets/images/icon/market-value/icon2.png"
                                  alt="icon"
                                />
                              </div>
                            </td>
                            <td className="coin-name">LiteCoin</td>
                            <td className="buy">
                              30%
                            <img
                                src="assets/images/icon/market-value/triangle-down.png"
                                alt="icon"
                              />
                            </td>
                            <td className="sell">
                              20%
                            <img
                                src="assets/images/icon/market-value/triangle-up.png"
                                alt="icon"
                              />
                            </td>
                            <td className="trends">
                              <img
                                src="assets/images/icon/market-value/trends-down-icon.png"
                                alt="icon"
                              />
                            </td>
                            <td className="attachments">$ 56746,857</td>
                            <td className="stats-chart">
                              <canvas id="mvaluechart2"></canvas>
                            </td>
                          </tr>
                          <tr>
                            <td className="mv-icon">
                              <div className="mv-icon">
                                <img
                                  src="assets/images/icon/market-value/icon3.png"
                                  alt="icon"
                                />
                              </div>
                            </td>
                            <td className="coin-name">Euthorium</td>
                            <td className="buy">
                              30%
                            <img
                                src="assets/images/icon/market-value/triangle-down.png"
                                alt="icon"
                              />
                            </td>
                            <td className="sell">
                              20%
                            <img
                                src="assets/images/icon/market-value/triangle-up.png"
                                alt="icon"
                              />
                            </td>
                            <td className="trends">
                              <img
                                src="assets/images/icon/market-value/trends-up-icon.png"
                                alt="icon"
                              />
                            </td>
                            <td className="attachments">$ 56746,857</td>
                            <td className="stats-chart">
                              <canvas id="mvaluechart3"></canvas>
                            </td>
                          </tr>
                          <tr>
                            <td className="mv-icon">
                              <div className="mv-icon">
                                <img
                                  src="assets/images/icon/market-value/icon4.png"
                                  alt="icon"
                                />
                              </div>
                            </td>
                            <td className="coin-name">Bitcoindash</td>
                            <td className="buy">
                              30%
                            <img
                                src="assets/images/icon/market-value/triangle-down.png"
                                alt="icon"
                              />
                            </td>
                            <td className="sell">
                              20%
                            <img
                                src="assets/images/icon/market-value/triangle-up.png"
                                alt="icon"
                              />
                            </td>
                            <td className="trends">
                              <img
                                src="assets/images/icon/market-value/trends-up-icon.png"
                                alt="icon"
                              />
                            </td>
                            <td className="attachments">$ 56746,857</td>
                            <td className="stats-chart">
                              <canvas id="mvaluechart4"></canvas>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row area start --> */}
          <div className="row">
            {/* <!-- Live Crypto Price area start --> */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title">Live Crypto Price</h4>
                  <div className="cripto-live mt-5">
                    <ul>
                      <li>
                        <div className="icon b">b</div>
                        Bitcoin<span
                        ><i className="fa fa-long-arrow-up"></i>$876909.00</span
                        >
                      </li>
                      <li>
                        <div className="icon l">l</div>
                        Litecoin<span
                        ><i className="fa fa-long-arrow-up"></i>$29780.00</span
                        >
                      </li>
                      <li>
                        <div className="icon d">d</div>
                        Dashcoin<span
                        ><i className="fa fa-long-arrow-up"></i>$13276.00</span
                        >
                      </li>
                      <li>
                        <div className="icon b">b</div>
                        Bitcoindash<span
                        ><i className="fa fa-long-arrow-down"></i>$5684.890</span
                        >
                      </li>
                      <li>
                        <div className="icon e">e</div>
                        Euthorium<span
                        ><i className="fa fa-long-arrow-down"></i>$3890.98</span
                        >
                      </li>
                      <li>
                        <div className="icon t">b</div>
                        Tcoin<span
                        ><i className="fa fa-long-arrow-up"></i>$750.789</span
                        >
                      </li>
                      <li>
                        <div className="icon b">b</div>
                        Bitcoin<span
                        ><i className="fa fa-long-arrow-up"></i>$325.037</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Live Crypto Price area end --> */}

            {/* <!-- trading history area start --> */}
            <div className="col-lg-8 mt-sm-30 mt-xs-30">
              <div className="card">
                <div className="card-body">
                  <div
                    className="d-sm-flex justify-content-between align-items-center"
                  >
                    <h4 className="header-title">Trading History</h4>
                    <div className="trd-history-tabs">
                      <ul className="nav" role="tablist">
                        <li>
                          <a
                            className="active"
                            data-toggle="tab"
                            href="#buy_order"
                            role="tab"
                          >Buy Order</a
                          >
                        </li>
                        <li>
                          <a data-toggle="tab" href="#sell_order" role="tab"
                          >Sell Order</a
                          >
                        </li>
                      </ul>
                    </div>
                    <select className="custome-select border-0 pr-3">
                      <option >Last 24 Hours</option>
                      <option value="0">01 July 2018</option>
                    </select>
                  </div>
                  <div className="trad-history mt-4">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="buy_order"
                        role="tabpanel"
                      >
                        <div className="table-responsive">
                          <table className="dbkit-table">
                            <thead>
                              <tr className="heading-td">
                                <td>Trading ID</td>
                                <td>Time</td>
                                <td>Status</td>
                                <td>Amount</td>
                                <td>Last Trade</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>78211</td>
                                <td>4.00 AM</td>
                                <td>Pending</td>
                                <td>$758.90</td>
                                <td>$05245.090</td>
                              </tr>
                              <tr>
                                <td>782782</td>
                                <td>4.00 AM</td>
                                <td>Pending</td>
                                <td>$77878.90</td>
                                <td>$7778.090</td>
                              </tr>
                              <tr>
                                <td>89675978</td>
                                <td>4.00 AM</td>
                                <td>Pending</td>
                                <td>$0768.90</td>
                                <td>$0945.090</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="sell_order"
                        role="tabpanel"
                      >
                        <div className="table-responsive">
                          <table className="dbkit-table">
                            <thead>
                              <tr className="heading-td">
                                <td>Trading ID</td>
                                <td>Time</td>
                                <td>Status</td>
                                <td>Amount</td>
                                <td>Last Trade</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>8964978</td>
                                <td>4.00 AM</td>
                                <td>Pending</td>
                                <td>$445.90</td>
                                <td>$094545.090</td>
                              </tr>
                              <tr>
                                <td>89675978</td>
                                <td>4.00 AM</td>
                                <td>Pending</td>
                                <td>$78.90</td>
                                <td>$074852945.090</td>
                              </tr>
                              <tr>
                                <td>78527878</td>
                                <td>4.00 AM</td>
                                <td>Pending</td>
                                <td>$0768.90</td>
                                <td>$65465.090</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- trading history area end --> */}
          </div>
          <div className="row mt-5">
            {/* <!-- latest news area start --> */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title">Latest News</h4>
                  <div className="letest-news mt-5">
                    <div className="single-post mb-xs-40 mb-sm-40">
                      <div className="lts-thumb">
                        <img
                          src="/assets/images/blog/post-thumb1.jpg"
                          alt="post thumb"
                        />
                      </div>
                      <div className="lts-content">
                        <span>Admin Post</span>
                        <h2>
                          <a href="blog.html"
                          >Sed ut perspiciatis unde omnis iste.</a
                          >
                        </h2>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some...
                        </p>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="lts-thumb">
                        <img
                          src="assets/images/blog/post-thumb2.jpg"
                          alt="post thumb"
                        />
                      </div>
                      <div className="lts-content">
                        <span>Admin Post</span>
                        <h2>
                          <a href="blog.html"
                          >Sed ut perspiciatis unde omnis iste.</a
                          >
                        </h2>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- latest news area end --> */}
            {/* <!-- exchange area start --> */}
            <div className="col-xl-6 mt-md-30 mt-xs-30 mt-sm-30">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title">Exchange</h4>
                  <div className="exhcange-rate mt-5">
                    <form action="#">
                      <div className="input-form">
                        <input type="text" />
                        <span>BTC</span>
                      </div>
                      <div className="exchange-devider">To</div>
                      <div className="input-form">
                        <input type="text" />
                        <span>USD</span>
                      </div>
                      <div className="exchange-btn">
                        <button type="submit">Exchange Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- exchange area end --> */}
          </div>
        </div>
      </div>
      {/* <!-- main content area end --> */}
      {/* <!-- footer area start--> */}
      <footer>
        <div className="footer-area">
          <p>© Copyright 2021. All right reserved.</p>
        </div>
      </footer>
      {/* <!-- footer area end--> */}


      {/* <!-- offset area start --> */}
      {/* <div className="offset-area">
      <div className="offset-close"><i className="ti-close"></i></div>
      <ul className="nav offset-menu-tab">
        <li>
          <a className="active" data-toggle="tab" href="#activity">Activity</a>
        </li>
        <li><a data-toggle="tab" href="#settings">Settings</a></li>
      </ul>
      <div className="offset-content tab-content">
        <div id="activity" className="tab-pane fade in show active">
          <div className="recent-activity">
            <div className="timeline-task">
              <div className="icon bg1">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="tm-title">
                <h4>Rashed sent you an email</h4>
                <span className="time"><i className="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div className="timeline-task">
              <div className="icon bg2">
                <i className="fa fa-check"></i>
              </div>
              <div className="tm-title">
                <h4>Added</h4>
                <span className="time"><i className="ti-time"></i>7 Minutes Ago</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="timeline-task">
              <div className="icon bg2">
                <i className="fa fa-exclamation-triangle"></i>
              </div>
              <div className="tm-title">
                <h4>You missed you Password!</h4>
                <span className="time"><i className="ti-time"></i>09:20 Am</span>
              </div>
            </div>
            <div className="timeline-task">
              <div className="icon bg3">
                <i className="fa fa-bomb"></i>
              </div>
              <div className="tm-title">
                <h4>Member waiting for you Attention</h4>
                <span className="time"><i className="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div className="timeline-task">
              <div className="icon bg3">
                <i className="ti-signal"></i>
              </div>
              <div className="tm-title">
                <h4>You Added Kaji Patha few minutes ago</h4>
                <span className="time"><i className="ti-time"></i>01 minutes ago</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div className="timeline-task">
              <div className="icon bg1">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="tm-title">
                <h4>Ratul Hamba sent you an email</h4>
                <span className="time"><i className="ti-time"></i>09:35</span>
              </div>
              <p>Hello sir , where are you, i am egerly waiting for you.</p>
            </div>
            <div className="timeline-task">
              <div className="icon bg2">
                <i className="fa fa-exclamation-triangle"></i>
              </div>
              <div className="tm-title">
                <h4>Rashed sent you an email</h4>
                <span className="time"><i className="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div className="timeline-task">
              <div className="icon bg2">
                <i className="fa fa-exclamation-triangle"></i>
              </div>
              <div className="tm-title">
                <h4>Rashed sent you an email</h4>
                <span className="time"><i className="ti-time"></i>09:35</span>
              </div>
            </div>
            <div className="timeline-task">
              <div className="icon bg3">
                <i className="fa fa-bomb"></i>
              </div>
              <div className="tm-title">
                <h4>Rashed sent you an email</h4>
                <span className="time"><i className="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div className="timeline-task">
              <div className="icon bg3">
                <i className="ti-signal"></i>
              </div>
              <div className="tm-title">
                <h4>Rashed sent you an email</h4>
                <span className="time"><i className="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
          </div>
        </div>
        <div id="settings" className="tab-pane fade">
          <div className="offset-settings">
            <h4>General Settings</h4>
            <div className="settings-list">
              <div className="s-settings">
                <div className="s-sw-title">
                  <h5>Notifications</h5>
                  <div className="s-swtich">
                    <input type="checkbox" id="switch1" />
                    <label for="switch1">Toggle</label>
                  </div>
                </div>
                <p>Keep it 'On' When you want to get all the notification.</p>
              </div>
              <div className="s-settings">
                <div className="s-sw-title">
                  <h5>Show recent activity</h5>
                  <div className="s-swtich">
                    <input type="checkbox" id="switch2" />
                    <label for="switch2">Toggle</label>
                  </div>
                </div>
                <p>
                  The for attribute is necessary to bind our custom checkbox
                  with the input.
                </p>
              </div>
              <div className="s-settings">
                <div className="s-sw-title">
                  <h5>Show your emails</h5>
                  <div className="s-swtich">
                    <input type="checkbox" id="switch3" />
                    <label for="switch3">Toggle</label>
                  </div>
                </div>
                <p>Show email so that easily find you.</p>
              </div>
              <div className="s-settings">
                <div className="s-sw-title">
                  <h5>Show Task statistics</h5>
                  <div className="s-swtich">
                    <input type="checkbox" id="switch4" />
                    <label for="switch4">Toggle</label>
                  </div>
                </div>
                <p>
                  The for attribute is necessary to bind our custom checkbox
                  with the input.
                </p>
              </div>
              <div className="s-settings">
                <div className="s-sw-title">
                  <h5>Notifications</h5>
                  <div className="s-swtich">
                    <input type="checkbox" id="switch5" />
                    <label for="switch5">Toggle</label>
                  </div>
                </div>
                <p>Use checkboxes when looking for yes or no answers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      {/* <!-- offset area end --> */}
    </div>
  )
}

export default Dashboard
