import React
, { useState, useEffect }
    from 'react';
// import { useForm } from 'react-hook-form';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Link,
//     Route,
//     NavLink,
//     Redirect
//     // useHistory,
// } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="page-container">
                {/* <!-- sidebar menu area start --> */}
                <div className="sidebar-menu">
                    <div className="sidebar-header">
                        <div className="logo">
                            <a href="index.html">
                                {/* <!-- <img src="assets/images/icon/logo.png" alt="logo"/> --> */}
                                <h3 style={{ color: 'white' }, { fontWeight: 600 }}>CRYPTOINDEX</h3>
                            </a>
                        </div>
                    </div>
                    <div className="main-menu">
                        <div className="menu-inner">
                            <nav>
                                <ul className="metismenu" id="menu">
                                    <li>
                                        <a href="#" aria-expanded="true"
                                        ><i className="ti-bar-chart"></i><span>Markets</span></a
                                        >
                                        <ul className="collapse">
                                            {/* <!-- <li className="active"> --> */}
                                            <li><a href="#">INR</a></li>
                                            {/* <!-- </li> --> */}
                                            <li><a href="#">BTC</a></li>
                                            <li><a href="#">USDT</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" aria-expanded="true"
                                        ><i className="ti-headphone-alt"></i><span>support</span></a
                                        >
                                        <ul className="collapse">
                                            {/* <li className="active"> */}
                                            <li><a href="index.html">How It Works</a></li>
                                            {/* </li>  */}
                                            <li><a href="index.html">FAQ's</a></li>
                                            <li><a href="index3.html">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" aria-expanded="true"
                                        ><i className="ti-info"></i><span>About Us</span></a
                                        >
                                        <ul className="collapse">
                                            {/* <li classNameName="active"> */}
                                            <li><a href="#">Coin Info</a></li>
                                            {/* </li>  */}
                                            <li><a href="#">About Cryptoindex</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#"
                                        ><i className="ti-receipt"></i> <span>Terms of Use</span></a
                                        >
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    {/* <!-- header area start --> */}
                    <div className="header-area">
                        <div className="row align-items-center">
                            {/* <!-- nav and search button --> */}
                            <div className="col-md-6 col-sm-8 clearfix">
                                <div className="nav-btn pull-left">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="search-box pull-left">
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
                            </div>
                            {/* <!-- profile info & task notification --> */}
                            <div className="col-md-6 col-sm-4 clearfix">
                                <ul className="notification-area pull-right">
                                    <li id="full-view"><i className="ti-fullscreen"></i></li>
                                    <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
                                    <li className="dropdown">
                                        <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
                                            <span>2</span>
                                        </i>
                                        <div className="dropdown-menu bell-notify-box notify-box">
                                            <span className="notify-title"
                                            >You have 3 new notifications
                      <a href="#">view all</a></span
                                            >
                                            <div className="nofity-list">
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <i className="ti-key btn-danger"></i>
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>You have Changed Your Password</p>
                                                        <span>Just Now</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <i className="ti-comments-smiley btn-info"></i>
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>New Commetns On Post</p>
                                                        <span>30 Seconds ago</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <i className="ti-key btn-primary"></i>
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Some special like you</p>
                                                        <span>Just Now</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <i className="ti-comments-smiley btn-info"></i>
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>New Commetns On Post</p>
                                                        <span>30 Seconds ago</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <i className="ti-key btn-primary"></i>
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Some special like you</p>
                                                        <span>Just Now</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <i className="ti-key btn-danger"></i>
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>You have Changed Your Password</p>
                                                        <span>Just Now</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <i className="ti-key btn-danger"></i>
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>You have Changed Your Password</p>
                                                        <span>Just Now</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <i
                                            className="fa fa-envelope-o dropdown-toggle"
                                            data-toggle="dropdown"
                                        ><span>3</span></i
                                        >
                                        <div className="dropdown-menu notify-box nt-enveloper-box">
                                            <span className="notify-title"
                                            >You have 3 new notifications
                      <a href="#">view all</a></span
                                            >
                                            <div className="nofity-list">
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <img
                                                            src="assets/images/author/author-img1.jpg"
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Aglae Mayer</p>
                                                        <span className="msg">Hey I am waiting for you...</span>
                                                        <span>3:15 PM</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <img
                                                            src="assets/images/author/author-img2.jpg"
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Aglae Mayer</p>
                                                        <span className="msg"
                                                        >When you can connect with me...</span
                                                        >
                                                        <span>3:15 PM</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <img
                                                            src="assets/images/author/author-img3.jpg"
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Aglae Mayer</p>
                                                        <span className="msg">I missed you so much...</span>
                                                        <span>3:15 PM</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <img
                                                            src="assets/images/author/author-img4.jpg"
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Aglae Mayer</p>
                                                        <span className="msg"
                                                        >Your product is completely Ready...</span
                                                        >
                                                        <span>3:15 PM</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <img
                                                            src="assets/images/author/author-img2.jpg"
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Aglae Mayer</p>
                                                        <span className="msg">Hey I am waiting for you...</span>
                                                        <span>3:15 PM</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <img
                                                            src="assets/images/author/author-img1.jpg"
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Aglae Mayer</p>
                                                        <span className="msg">Hey I am waiting for you...</span>
                                                        <span>3:15 PM</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="notify-item">
                                                    <div className="notify-thumb">
                                                        <img
                                                            src="assets/images/author/author-img3.jpg"
                                                            alt="image"
                                                        />
                                                    </div>
                                                    <div className="notify-text">
                                                        <p>Aglae Mayer</p>
                                                        <span className="msg">Hey I am waiting for you...</span>
                                                        <span>3:15 PM</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="settings-btn">
                                        <i className="ti-settings"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- header area end -->
        <!-- page title area start --> */}
         {/* <!-- page title area start --> */}
        <div className="page-title-area">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="breadcrumbs-area clearfix">
                <h4 className="page-title pull-left">CRYPTOINDEX</h4>
                <ul className="breadcrumbs pull-left">
                  <li><a href="#">Home</a></li>
                  <li><span>Dashboard</span></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 clearfix">
              <div className="user-profile pull-right">
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
            </div>
          </div>
        </div>
        {/* <!-- page title area end --> */}
                </div>
                {/* <!-- page title area end --> */}
        <div className="main-content-inner">
          {/* <!-- sales report area start --> */}
          <div className="sales-report-area mt-5 mb-5">
            <div className="row">
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
                  <canvas id="coin_sales1" height="100"></canvas>
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
                  <canvas id="coin_sales2" height="100"></canvas>
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
                  <canvas id="coin_sales3" height="100"></canvas>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sales report area end --> */}
          </div>
          {/* <!-- overview area start --> */}
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <h4 className="header-title mb-0">Overview</h4>
                    <select className="custome-select border-0 pr-3">
                      <option selected>Last 24 Hours</option>
                      <option value="0">01 July 2018</option>
                    </select>
                  </div>
                  <div id="verview-shart"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 coin-distribution">
              <div className="card h-full">
                <div className="card-body">
                  <h4 className="header-title mb-0">Coin Distribution</h4>
                  <div id="coin_distribution"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- overview area end --> */}
          {/* <!-- market value area start --> */}
          <div class="row mt-5 mb-5">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div
                    class="d-sm-flex justify-content-between align-items-center"
                  >
                    <h4 class="header-title mb-0">Market Value And Trends</h4>
                    <select class="custome-select border-0 pr-3">
                      <option selected>Last 24 Hours</option>
                      <option value="0">01 July 2018</option>
                    </select>
                  </div>
                  <div class="market-status-table mt-4">
                    <div class="table-responsive">
                      <table class="dbkit-table">
                        <tr class="heading-td">
                          <td class="mv-icon">Logo</td>
                          <td class="coin-name">Coin Name</td>
                          <td class="buy">Buy</td>
                          <td class="sell">Sells</td>
                          <td class="trends">Trends</td>
                          <td class="attachments">Attachments</td>
                          <td class="stats-chart">Stats</td>
                        </tr>
                        <tr>
                          <td class="mv-icon">
                            <img
                              src="../assets/images/icon/market-value/icon1.png"
                              alt="icon"
                            />
                          </td>
                          <td class="coin-name">Dashcoin</td>
                          <td class="buy">
                            30%
                            <img
                              src="assets/images/icon/market-value/triangle-down.png"
                              alt="icon"
                            />
                          </td>
                          <td class="sell">
                            20%
                            <img
                              src="assets/images/icon/market-value/triangle-up.png"
                              alt="icon"
                            />
                          </td>
                          <td class="trends">
                            <img
                              src="assets/images/icon/market-value/trends-up-icon.png"
                              alt="icon"
                            />
                          </td>
                          <td class="attachments">$ 56746,857</td>
                          <td class="stats-chart">
                            <canvas id="mvaluechart"></canvas>
                          </td>
                        </tr>
                        <tr>
                          <td class="mv-icon">
                            <div class="mv-icon">
                              <img
                                src="assets/images/icon/market-value/icon2.png"
                                alt="icon"
                              />
                            </div>
                          </td>
                          <td class="coin-name">LiteCoin</td>
                          <td class="buy">
                            30%
                            <img
                              src="assets/images/icon/market-value/triangle-down.png"
                              alt="icon"
                            />
                          </td>
                          <td class="sell">
                            20%
                            <img
                              src="assets/images/icon/market-value/triangle-up.png"
                              alt="icon"
                            />
                          </td>
                          <td class="trends">
                            <img
                              src="assets/images/icon/market-value/trends-down-icon.png"
                              alt="icon"
                            />
                          </td>
                          <td class="attachments">$ 56746,857</td>
                          <td class="stats-chart">
                            <canvas id="mvaluechart2"></canvas>
                          </td>
                        </tr>
                        <tr>
                          <td class="mv-icon">
                            <div class="mv-icon">
                              <img
                                src="assets/images/icon/market-value/icon3.png"
                                alt="icon"
                              />
                            </div>
                          </td>
                          <td class="coin-name">Euthorium</td>
                          <td class="buy">
                            30%
                            <img
                              src="assets/images/icon/market-value/triangle-down.png"
                              alt="icon"
                            />
                          </td>
                          <td class="sell">
                            20%
                            <img
                              src="assets/images/icon/market-value/triangle-up.png"
                              alt="icon"
                            />
                          </td>
                          <td class="trends">
                            <img
                              src="assets/images/icon/market-value/trends-up-icon.png"
                              alt="icon"
                            />
                          </td>
                          <td class="attachments">$ 56746,857</td>
                          <td class="stats-chart">
                            <canvas id="mvaluechart3"></canvas>
                          </td>
                        </tr>
                        <tr>
                          <td class="mv-icon">
                            <div class="mv-icon">
                              <img
                                src="assets/images/icon/market-value/icon4.png"
                                alt="icon"
                              />
                            </div>
                          </td>
                          <td class="coin-name">Bitcoindash</td>
                          <td class="buy">
                            30%
                            <img
                              src="assets/images/icon/market-value/triangle-down.png"
                              alt="icon"
                            />
                          </td>
                          <td class="sell">
                            20%
                            <img
                              src="assets/images/icon/market-value/triangle-up.png"
                              alt="icon"
                            />
                          </td>
                          <td class="trends">
                            <img
                              src="assets/images/icon/market-value/trends-up-icon.png"
                              alt="icon"
                            />
                          </td>
                          <td class="attachments">$ 56746,857</td>
                          <td class="stats-chart">
                            <canvas id="mvaluechart4"></canvas>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row area start --> */}
          <div class="row">
            {/* <!-- Live Crypto Price area start --> */}
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Live Crypto Price</h4>
                  <div class="cripto-live mt-5">
                    <ul>
                      <li>
                        <div class="icon b">b</div>
                        Bitcoin<span
                          ><i class="fa fa-long-arrow-up"></i>$876909.00</span
                        >
                      </li>
                      <li>
                        <div class="icon l">l</div>
                        Litecoin<span
                          ><i class="fa fa-long-arrow-up"></i>$29780.00</span
                        >
                      </li>
                      <li>
                        <div class="icon d">d</div>
                        Dashcoin<span
                          ><i class="fa fa-long-arrow-up"></i>$13276.00</span
                        >
                      </li>
                      <li>
                        <div class="icon b">b</div>
                        Bitcoindash<span
                          ><i class="fa fa-long-arrow-down"></i>$5684.890</span
                        >
                      </li>
                      <li>
                        <div class="icon e">e</div>
                        Euthorium<span
                          ><i class="fa fa-long-arrow-down"></i>$3890.98</span
                        >
                      </li>
                      <li>
                        <div class="icon t">b</div>
                        Tcoin<span
                          ><i class="fa fa-long-arrow-up"></i>$750.789</span
                        >
                      </li>
                      <li>
                        <div class="icon b">b</div>
                        Bitcoin<span
                          ><i class="fa fa-long-arrow-up"></i>$325.037</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Live Crypto Price area end --> */}
            
            {/* <!-- trading history area start --> */}
            <div class="col-lg-8 mt-sm-30 mt-xs-30">
              <div class="card">
                <div class="card-body">
                  <div
                    class="d-sm-flex justify-content-between align-items-center"
                  >
                    <h4 class="header-title">Trading History</h4>
                    <div class="trd-history-tabs">
                      <ul class="nav" role="tablist">
                        <li>
                          <a
                            class="active"
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
                    <select class="custome-select border-0 pr-3">
                      <option selected>Last 24 Hours</option>
                      <option value="0">01 July 2018</option>
                    </select>
                  </div>
                  <div class="trad-history mt-4">
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="buy_order"
                        role="tabpanel"
                      >
                        <div class="table-responsive">
                          <table class="dbkit-table">
                            <tr class="heading-td">
                              <td>Trading ID</td>
                              <td>Time</td>
                              <td>Status</td>
                              <td>Amount</td>
                              <td>Last Trade</td>
                            </tr>
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
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="sell_order"
                        role="tabpanel"
                      >
                        <div class="table-responsive">
                          <table class="dbkit-table">
                            <tr class="heading-td">
                              <td>Trading ID</td>
                              <td>Time</td>
                              <td>Status</td>
                              <td>Amount</td>
                              <td>Last Trade</td>
                            </tr>
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
            <div class="row mt-5">
            {/* <!-- latest news area start --> */}
            <div class="col-xl-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Latest News</h4>
                  <div class="letest-news mt-5">
                    <div class="single-post mb-xs-40 mb-sm-40">
                      <div class="lts-thumb">
                        <img
                          src="assets/images/blog/post-thumb1.jpg"
                          alt="post thumb"
                        />
                      </div>
                      <div class="lts-content">
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
                    <div class="single-post">
                      <div class="lts-thumb">
                        <img
                          src="assets/images/blog/post-thumb2.jpg"
                          alt="post thumb"
                        />
                      </div>
                      <div class="lts-content">
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
            <div class="col-xl-6 mt-md-30 mt-xs-30 mt-sm-30">
              <div class="card">
                <div class="card-body">
                  <h4 class="header-title">Exchange</h4>
                  <div class="exhcange-rate mt-5">
                    <form action="#">
                      <div class="input-form">
                        <input type="text" value="0.76834" />
                        <span>BTC</span>
                      </div>
                      <div class="exchange-devider">To</div>
                      <div class="input-form">
                        <input type="text" value="5689.846" />
                        <span>USD</span>
                      </div>
                      <div class="exchange-btn">
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
            {/* <!-- main content area end --> */}
      {/* <!-- footer area start--> */}
      <footer>
        <div class="footer-area">
          <p>© Copyright 2021. All right reserved.</p>
        </div>
      </footer>
      {/* <!-- footer area end--> */}
    
    
    {/* <!-- offset area start --> */}
    {/* <div class="offset-area">
      <div class="offset-close"><i class="ti-close"></i></div>
      <ul class="nav offset-menu-tab">
        <li>
          <a class="active" data-toggle="tab" href="#activity">Activity</a>
        </li>
        <li><a data-toggle="tab" href="#settings">Settings</a></li>
      </ul>
      <div class="offset-content tab-content">
        <div id="activity" class="tab-pane fade in show active">
          <div class="recent-activity">
            <div class="timeline-task">
              <div class="icon bg1">
                <i class="fa fa-envelope"></i>
              </div>
              <div class="tm-title">
                <h4>Rashed sent you an email</h4>
                <span class="time"><i class="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div class="timeline-task">
              <div class="icon bg2">
                <i class="fa fa-check"></i>
              </div>
              <div class="tm-title">
                <h4>Added</h4>
                <span class="time"><i class="ti-time"></i>7 Minutes Ago</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="timeline-task">
              <div class="icon bg2">
                <i class="fa fa-exclamation-triangle"></i>
              </div>
              <div class="tm-title">
                <h4>You missed you Password!</h4>
                <span class="time"><i class="ti-time"></i>09:20 Am</span>
              </div>
            </div>
            <div class="timeline-task">
              <div class="icon bg3">
                <i class="fa fa-bomb"></i>
              </div>
              <div class="tm-title">
                <h4>Member waiting for you Attention</h4>
                <span class="time"><i class="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div class="timeline-task">
              <div class="icon bg3">
                <i class="ti-signal"></i>
              </div>
              <div class="tm-title">
                <h4>You Added Kaji Patha few minutes ago</h4>
                <span class="time"><i class="ti-time"></i>01 minutes ago</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div class="timeline-task">
              <div class="icon bg1">
                <i class="fa fa-envelope"></i>
              </div>
              <div class="tm-title">
                <h4>Ratul Hamba sent you an email</h4>
                <span class="time"><i class="ti-time"></i>09:35</span>
              </div>
              <p>Hello sir , where are you, i am egerly waiting for you.</p>
            </div>
            <div class="timeline-task">
              <div class="icon bg2">
                <i class="fa fa-exclamation-triangle"></i>
              </div>
              <div class="tm-title">
                <h4>Rashed sent you an email</h4>
                <span class="time"><i class="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div class="timeline-task">
              <div class="icon bg2">
                <i class="fa fa-exclamation-triangle"></i>
              </div>
              <div class="tm-title">
                <h4>Rashed sent you an email</h4>
                <span class="time"><i class="ti-time"></i>09:35</span>
              </div>
            </div>
            <div class="timeline-task">
              <div class="icon bg3">
                <i class="fa fa-bomb"></i>
              </div>
              <div class="tm-title">
                <h4>Rashed sent you an email</h4>
                <span class="time"><i class="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
            <div class="timeline-task">
              <div class="icon bg3">
                <i class="ti-signal"></i>
              </div>
              <div class="tm-title">
                <h4>Rashed sent you an email</h4>
                <span class="time"><i class="ti-time"></i>09:35</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                distinctio itaque at.
              </p>
            </div>
          </div>
        </div>
        <div id="settings" class="tab-pane fade">
          <div class="offset-settings">
            <h4>General Settings</h4>
            <div class="settings-list">
              <div class="s-settings">
                <div class="s-sw-title">
                  <h5>Notifications</h5>
                  <div class="s-swtich">
                    <input type="checkbox" id="switch1" />
                    <label for="switch1">Toggle</label>
                  </div>
                </div>
                <p>Keep it 'On' When you want to get all the notification.</p>
              </div>
              <div class="s-settings">
                <div class="s-sw-title">
                  <h5>Show recent activity</h5>
                  <div class="s-swtich">
                    <input type="checkbox" id="switch2" />
                    <label for="switch2">Toggle</label>
                  </div>
                </div>
                <p>
                  The for attribute is necessary to bind our custom checkbox
                  with the input.
                </p>
              </div>
              <div class="s-settings">
                <div class="s-sw-title">
                  <h5>Show your emails</h5>
                  <div class="s-swtich">
                    <input type="checkbox" id="switch3" />
                    <label for="switch3">Toggle</label>
                  </div>
                </div>
                <p>Show email so that easily find you.</p>
              </div>
              <div class="s-settings">
                <div class="s-sw-title">
                  <h5>Show Task statistics</h5>
                  <div class="s-swtich">
                    <input type="checkbox" id="switch4" />
                    <label for="switch4">Toggle</label>
                  </div>
                </div>
                <p>
                  The for attribute is necessary to bind our custom checkbox
                  with the input.
                </p>
              </div>
              <div class="s-settings">
                <div class="s-sw-title">
                  <h5>Notifications</h5>
                  <div class="s-swtich">
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