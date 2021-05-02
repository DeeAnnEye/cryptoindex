import React, { useState , useEffect } from 'react';
import { SidebarHeader, SidebarMenu, 
  // FullscreenBtn, 
  UserProfile } from './Dashboard'
import { Link } from 'react-router-dom';


const Admin = () => {

  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/users/')
        .then(response => response.json())
        .then(data => setUserData(data));

}, []);

// console.log(UserData);

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
                    {/* <li> <Link to="/dashboard">Dashboard</Link></li> */}
                    <li><span>Admin Dashboard</span></li>
                </ul>
            </div>
        </div>
    }

    const UserTableData = ({item}) => {
      
        return <tr>
          <td className="user-id">{item ? item._id : '-'}</td>
          <td className="user-name">{item ? item.name : '-'}</td>
          <td className="email">{item ? item.email : '-'}</td>
          <td className="role">{item ? item.role : '-'}</td>
          <td className="remove-user"><button className="btn btn-danger" type="button" >Remove User</button></td>
        </tr>

    }

    const UserTable = () =>{
        return <table className="dbkit-table">
        <thead>
          <tr className="heading-td">
            <td className="user-id">Id</td>
            <td className="user-name">Name</td>
            <td className="email">Email</td>
            <td className="role">Role</td>
            <td className="remove-user">Manage User</td>
            {/* <td className="cir-supply">Circulating Supply</td> */}
          </tr>
        </thead>
        <tbody>
          {/* <UserTableData /> */}
          {UserData && UserData.length > 0 && UserData.slice(0, 8) .map(p => <UserTableData item={p} />)}
        </tbody>
      </table>
    }

    const AdminContent = () =>{
        return <div className="row mt-5 mb-5">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div
                className="d-sm-flex justify-content-between align-items-center"
              >
                <h4 className="header-title mb-0">Users</h4>
                {/* <select className="custome-select border-0 pr-3">
                  <option>Last 24 Hours</option>
                  <option value="0">01 July 2018</option>
                </select> */}
              </div>
              <div className="market-status-table mt-4">
                <div className="table-responsive">
                  <UserTable />
                </div>
              </div>
            </div>
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
                                    <Link to='/dashboard'>Go To Site</Link>
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
                <AdminContent />
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

export default Admin
