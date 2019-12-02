import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
class Dashboard extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand">
                    <div className='logo'></div>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <Link to='/dashboard'>
                            {this.props.userlogin.userdetails.role === 'Manager'
                                ? <li className="nav-item"><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</li>
                                : ''}
                        </Link>
                        <Link to='/shipments'><li className="nav-item"><i className="fa fa-list" aria-hidden="true"></i> Shipments</li></Link>
                        <Link to='/'><li className="nav-item"><i className="fa fa-power-off" aria-hidden="true"></i> Logout</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        userlogin: state
    }
}
export default connect(mapStateToProps)(Dashboard)