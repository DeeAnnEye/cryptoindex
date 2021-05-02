import React, { useState, useEffect, useContext, useRef } from 'react';
import SocketContext from '../../context';
// import CoinSalesA from "./charts/CoinSales1.js"
// import CoinSalesB from "./charts/CoinSales2.js"
// import CoinSalesC from "./charts/CoinSales3.js"
// import OverviewChart from "./charts/OverviewChart.js"
// import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';



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
  // console.log(m);
  const [open, setOpen] = useState(false);
  // console.log('open',open)
  return <li className={open ? 'active' : ''} >
    <a onClick={() => {
      setOpen(!open)
    }} href="#" aria-expanded={open ? "true" : "false"}
    ><i className={m.icon}></i><span>{m.name}</span>
    </a>

    <ul style={!open ? { height: 0 } : { display: 'block' }} className={`collapse ${open ? 'in' : ''}`}>
      {m.submenu && m.submenu.map((sm, idx) =>
        <li key={'sm-' + idx}><Link to={`${sm.path}`}>{sm.name}</Link></li>)}
    </ul>
  </li>
}

const SidebarMenu = () => {
  const menu = [{
    name: 'Markets',
    icon: 'ti-bar-chart',
    submenu: [{
      name: 'Buy and Sell Coins',
      path: '/buycoins'
    },
    {
      name: 'Wallets',
      path: '/wallets'
    }]
  },
  {
    name: 'About Us',
    icon: 'ti-info',
    submenu: [
      {
        name: 'About Cryptoindex',
        path: '/about'
      }]
  },
  {
    name: 'Terms of Use',
    icon: 'ti-receipt',
    submenu: [{
      name: 'Security',
      path: '/security'
    },
    {
      name: 'Cookie Statement',
      path: '/cookies'
    }]
  },
  {
    name: 'Support',
    icon: 'ti-headphone-alt',
    submenu: [
      {
        name: "FAQ's",
        path: '/faqs'
      },
      {
        name: 'Contact Us',
        path: '/contacts'
      }]
  },
  ]
  return <div className="main-menu">
    <div className="menu-inner" style={{ overflowY: 'hidden' }}>
      <nav>
        <ul className="metismenu" id="menu">
          {menu.map((m, idx) => <MenuItem key={'menuitem-' + idx} m={m} />)}
        </ul>
      </nav>
    </div>
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

const PageTitle = () => {
  return <div className="col-sm-6">
    <div className="breadcrumbs-area clearfix">
      <h4 className="page-title pull-left">CRYPTOINDEX</h4>
      <ul className="breadcrumbs pull-left">
        {/* <li><a href="#">Home</a></li> */}
        <li><span>Dashboard</span></li>
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

const ExchangeArea = (props) => {
  const qtyRef = useRef();
  const resultRef = useRef();
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);



  const coinConvert = async (coinType, coinCur) => {
    //  console.log(coinType);
    const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=df4f2c2bf8926feecee70b01bf6ec9f9&ids=${coinType}&convert=${coinCur}`)
    const data = await response.json();
    // let price = JSON.stringify(data);
    const qty = qtyRef.current.value;
    const rate = data[0].price;
    resultRef.current.value = (qty * rate).toFixed(2);

  }

  return <div className="col-xl-6 mt-md-30 mt-xs-30 mt-sm-30">
    <div className="card">
      <div className="card-body">
        <h4 className="header-title">Exchange</h4>
        <div className="exhcange-rate mt-5">
          <form action="#">
            <div className="input-form">
              <input ref={qtyRef} id='coin-qty' type="text" onChange={e => {
                // props.setCoinPrice(e.target.value)
                coinConvert(props.coinType, props.coinCur);
              }} />
              <h4 className="coin-price " data-toggle="dropdown" aria-expanded={showA ? "true" : "false"} onClick={() => { setShowA(!showA) }}>
                <span>{props.coinType}</span>
              </h4>
              <div className={`dropdown-menu ${showA ? 'show' : ''}`}>
                <option onClick={(e) => props.setCoinType(e.target.value)} className="dropdown-item" value="BTC">BTC</option>
                <option onClick={(e) => props.setCoinType(e.target.value)} className="dropdown-item" value="ETH">ETH</option>
                <option onClick={(e) => props.setCoinType(e.target.value)} className="dropdown-item" value="BNB">BNB</option>
                <option onClick={(e) => props.setCoinType(e.target.value)} className="dropdown-item" value="XRP">XRP</option>
                <option onClick={(e) => props.setCoinType(e.target.value)} className="dropdown-item" value="BNC">BNC</option>
              </div>
            </div>
            <div className="exchange-devider">To</div>
            <div className="input-form">
              <input ref={resultRef} type="text" />
              <h4 className="coin-cur " data-toggle="dropdown" aria-expanded={showB ? "true" : "false"} onClick={() => { setShowB(!showB) }}>
                <span>{props.coinCur}</span>
              </h4>
              <div className={`dropdown-menu ${showB ? 'show' : ''}`}>
                <option onClick={(e) => props.setCoinCur(e.target.value)} className="dropdown-item" value="USD">USD</option>
                <option onClick={(e) => props.setCoinCur(e.target.value)} className="dropdown-item" value="INR">INR</option>
                <option onClick={(e) => props.setCoinCur(e.target.value)} className="dropdown-item" value="EUR">EUR</option>
                <option onClick={(e) => props.setCoinCur(e.target.value)} className="dropdown-item" value="YEN">YEN</option>
                <option onClick={(e) => props.setCoinCur(e.target.value)} className="dropdown-item" value="RUB">RUB</option>
              </div>
            </div>
            {/* <div className="exchange-btn">
              <button type="submit">Exchange Now</button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  </div>
}

const Dashboard = ({ user, setIsLoggedIn }) => {
  const socket = useContext(SocketContext);
  const [price, setPrice] = useState([]);
  const [coinType, setCoinType] = useState('BTC');
  const [coinCur, setCoinCur] = useState('USD');
  const [coinPrice, setCoinPrice] = useState(0);
  const [coinResult, setCoinResult] = useState(0);



  useEffect(() => {
    if (socket) {
      socket.emit('get-price', {})
      socket.on('price', ({ data }) => {
        console.log(data)
        setPrice(data);
      });


    }
    return () => {
      if (socket) {
        socket.off('price');

      }
    };
  }, [socket]);


  const [navclick, setNavclick] = useState(false);
  const NavbarBtn = () => {
    return <div className="nav-btn pull-left" onClick={() => { setNavclick(!navclick) }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  }

  // const CoinSales = ({item}) => {
  //   // console.log(item);
  //   // var coinData = item[0].price;
  //   const data = {
  //     labels:false,
  //     datasets: [{
  //         label: "Coin Price",
  //         backgroundColor: "rgba(117, 19, 246, 0.1)",
  //         borderColor: '#0b76b6',
  //         fill: true,
  //         data: item.price ,
  //         lineTension: 0.5,
  //     }]
  // };
  
  // const options = {
  //     plugins: {
  //     legend: {
  //         display: false
  //     },
  //     // animation: {
  //     //     easing: "easeInOutBack"
  //     // },
  //     scales: {
  //       yAxes: [{
  //           display: false          
  //       }],
  //       xAxes: [{
  //         type: 'time',
  //         display: false,
  //         autoSkip: false,
  //         time: {
  //             unit: 'second',
  //             unitStepSize: 10
  //         },
  //       }]
  //     }
  //     }
  // };

  // return <Line data={data} options={options} />

  // }

  const Card = ({ item }) => {
    // console.log('item',item);
    return <div className="col-md-4">
      <div className="single-report mb-xs-30">
        <div className="s-report-inner pr--20 pt--30 mb-3">
          <div className="iconimg"><img
            className="coin-img"
            src={item ? item.logo_url : ''}
            alt="avatar"
            style={{ height: '50px', width: '50px' }}
          /></div>
          <div className="s-report-title d-flex justify-content-between">
            <h4 className="header-title mb-0">{item ? item.name : '-'}</h4>
            <p>24 H</p>
          </div>
          <div className="d-flex justify-content-between pb-2">
            <h2>$ {item ? parseFloat(item.price).toFixed(2) : '0'}</h2>
            <span>{item && item['1d'] ? parseFloat(item['1d'].price_change_pct).toFixed(2) : '0'}</span>
          </div>
        </div>
        {/* <CoinSales data={item} /> */}
      </div>
    </div>
  }
  const SalesCard = () => {
    return <div className="row">
      {price && price.length > 0 && price.slice(0, 3).map(p => <Card item={p} />)}
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
            {/* <select className="custome-select border-0 pr-3">
              <option>This Week</option>
              <option value="0">Last Week</option>
            </select> */}
          </div>
          {/* <div id="verview-shart"> */}
          {/* <OverviewChart /> */}
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

  const MarketValueList = ({ item }) => {
    return <tr>
      <td className="mv-icon">
        <img
          className="coin-img"
          src={item ? item.logo_url : ''}
          alt="avatar"
          style={{ height: '40px', width: '40px' }}
        />
      </td>
      <td className="coin-name">{item ? item.symbol : '-'}</td>
      <td className="buy">
        {item ? item.num_exchanges : '-'}
      </td>
      <td className="sell">
        {item ? item.num_pairs : '-'}
      </td>
      <td className="status">
        {item ? item.status : '-'}
      </td>
      <td className="stats">{item ? item.circulating_supply : '-'}</td>
    </tr>
  }

  const MarketValue = () => {
    return <div className="row mt-5 mb-5">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div
              className="d-sm-flex justify-content-between align-items-center"
            >
              <h4 className="header-title mb-0">Market Value And Trends</h4>
              {/* <select className="custome-select border-0 pr-3">
                <option>Last 24 Hours</option>
                <option value="0">01 July 2018</option>
              </select> */}
            </div>
            <div className="market-status-table mt-4">
              <div className="table-responsive">
                <table className="dbkit-table">
                  <thead>
                    <tr className="heading-td">
                      <td className="mv-icon">Logo</td>
                      <td className="coin-name">Coin</td>
                      <td className="exchange">Exchanges</td>
                      <td className="pairs">Pairs</td>
                      <td className="status">Status</td>
                      <td className="cir-supply">Circulating Supply</td>
                    </tr>
                  </thead>
                  <tbody>
                    {price && price.length > 0 && price.slice(0, 10).map(p => <MarketValueList item={p} />)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  const LivePriceList = ({ item }) => {
    return <li>
      {/* <div className="iconimg"> */}
      <img
        className="coin-img"
        src={item ? item.logo_url : ''}
        alt="avatar"
        style={{ height: '20px', width: '20px' }}
      />
      {/* </div> */}
      {item ? item.name : '-'}<span>
        <i className={(item.price < 5.0) ? 'fa fa-long-arrow-down' : 'fa fa-long-arrow-up'}></i>
        $ {item ? parseFloat(item.price).toFixed(2) : '0'}</span>
    </li>
  }

  const LiveCryptoPrice = () => {
    return <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h4 className="header-title">Live Crypto Price</h4>
          <div className="cripto-live mt-5">
            <ul>
              {price && price.length > 0 && price.slice(0, 8).map(p => <LivePriceList item={p} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  }

  const TradeList = ({ item }) => {
    return <tr>
      <td>{item ? item.symbol : '-'}</td>
      <td>{item && item['1d'] ? parseFloat(item['1d'].price_change).toFixed(2) : '0'}</td>
      <td>{item && item['1d'] ? parseFloat(item['1d'].price_change_pct).toFixed(2) : '0'}</td>
      <td>{item && item['1d'] ? parseFloat(item['1d'].volume).toFixed(2) : '0'}</td>
      <td>{item && item['1d'] ? parseFloat(item['1d'].volume_change_pct).toFixed(2) : '0'}</td>
    </tr>
  }

  const TradingHistory = () => {
    return <div className="col-lg-8 mt-sm-30 mt-xs-30">
      <div className="card">
        <div className="card-body">
          <div
            className="d-sm-flex justify-content-between align-items-center"
          >
            <h4 className="header-title">Price and Volume Trends (Per day)</h4>
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
                        <td>Coin</td>
                        <td>Price Change</td>
                        <td>Price Change %</td>
                        <td>Volume</td>
                        <td>Volume Change %</td>
                      </tr>
                    </thead>
                    <tbody>
                      {price && price.length > 0 && price.slice(0, 5).map(p => <TradeList item={p} />)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  const NewsList = ({ item }) => {
    return <tr>
      <td>{item ? item.symbol : '-'}</td>
      <td>{item && item['1d'] ? parseFloat(item['1d'].market_cap_change).toFixed(2) : '0'}</td>
      <td>{item && item['1d'] ? parseFloat(item['1d'].market_cap_change_pct).toFixed(2) : '0'}</td>
    </tr>
  }

  const News = () => {
    return <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <h4 className="header-title">Market Cap Changes (Per day)</h4>
          <div className="letest-news mt-5">
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
                        <td>Coin</td>
                        <td>MCap Change</td>
                        <td>MCap Change %</td>
                      </tr>
                    </thead>
                    <tbody>
                      {price && price.length > 0 && price.slice(0, 5).map(p => <NewsList item={p} />)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  }



  const MainContent = (props) => {
    return <div className="main-content-inner ">
      {/* <!-- sales report area start --> */}
      <div className="sales-report-area mt-5 mb-5">
        <SalesCard />
      </div>
      {/* <!-- sales report area end --> */}

      {/* <!-- overview area start --> */}
      {/* <div className="row">
        <OverviewArea />
        <CoinDistArea />
      </div> */}
      {/* <!-- overview area end --> */}

      {/* <!-- market value area start --> */}
      <MarketValue />
      {/* <!-- row area start --> */}
      <div className="row">
        {/* <!-- Live Crypto Price area start --> */}
        <LiveCryptoPrice />
        {/* <!-- trading history area start --> */}
        <TradingHistory />
      </div>
      <div className="row mt-5">
        {/* <!-- latest news area start --> */}
        <News />
        {/* <!-- exchange area start --> */}
        <ExchangeArea coinResult={props.coinResult} coinPrice={props.coinPrice} setCoinResult={props.setCoinResult} setCoinPrice={props.setCoinPrice} coinCur={props.coinCur} coinType={props.coinType} setCoinCur={props.setCoinCur} setCoinType={props.setCoinType} />
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
        <MainContent coinCur={coinCur} coinType={coinType} setCoinCur={setCoinCur} setCoinType={setCoinType} coinResult={coinResult} coinPrice={coinPrice} setCoinResult={setCoinResult} setCoinPrice={setCoinPrice} />
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

export default Dashboard
export { SidebarHeader, SidebarMenu, MenuItem, FullscreenBtn, PageTitle, UserProfile }
