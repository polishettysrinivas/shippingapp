import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import Nav from '../Components/nav';
const MainLayout = ({ children, ...rest }) => {
    return (
        <div className="page page-dashboard">
            <Nav></Nav>
            <div className="main">{children}</div>
        </div>
    )
}
const MainLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <MainLayout>
                <Component {...matchProps} />
            </MainLayout>
        )} />
    )
};
const mapStateToProps = (state) => {
    return {
        status: state
    }
}
export default connect(mapStateToProps)(MainLayoutRoute)