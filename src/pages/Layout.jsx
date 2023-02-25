import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="row">
                <div className="col-md-2 bg-dark" style={{minHeight: "100vh"}}>
                    <Sidebar active={props.activePage} collapse={props.showCollapse} viewing={props.viewData} />
                </div>
                <div className="col-md-10 p-4">
                    <h3 className="font-weight-bold">{props.title}</h3>
                    <hr/>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout
