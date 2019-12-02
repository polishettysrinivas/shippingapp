import React, { Component } from 'react';
import { connect } from "react-redux";
const initialvalues = {
    username: '',
    password: '',
    usernameerror: '',
    passworderror: '',
    errormessage: ''
}
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = initialvalues;
    }
    handleuserchange = event => {
        this.setState({ username: event.target.value });
    }
    handlepasswordchange = event => {
        this.setState({ password: event.target.value });
    }
    handleformsubmit = (event, dispatch) => {
        let usernameerror = (this.state.username === '') ? true : false;
        this.setState({ usernameerror })
        let passworderror = (this.state.password === '') ? true : false;
        this.setState({ passworderror })
        if (!usernameerror && !passworderror) {
            let self = this;
            let username = self.state.username;
            let password = self.state.password;
            const url = 'http://localhost:5000/users';
            fetch(url).then((resp) => resp.json())
                .then(function (data) {
                    const result = data.filter(obj => {
                        return obj.userName === username && obj.password === password
                    })
                    if (result.length > 0) {
                        let errormessage = '';
                        self.setState({ errormessage });
                        const path = (result[0].role === 'Manager') ? '/dashboard' : '/shipments';
                        self.props.history.push(path);
                        localStorage.setItem('state', JSON.stringify(result[0]));
                        self.props.dispatch({
                            type: 'in',
                            payload: result[0]
                        })
                    }
                    else {
                        let errormessage = 'Invalid User Details';
                        self.setState({ errormessage });
                    }
                })
                .catch(function (error) {
                    let errormessage = error;
                    self.setState({ errormessage });
                });
        }
        event.preventDefault();
    }
    handlechange = () => {
    }
    render() {
        const { username, password, usernameerror, passworderror, errormessage } = this.state;
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleformsubmit}>
                            <div className='logo loginpage'></div>
                            <span className="login100-form-title p-b-32">Login</span>
                            <div className='errorblock m-b-15'>{errormessage}</div>
                            <label className="txt1 p-b-11">Username</label>
                            <div className={"wrap-input100 validate-input m-b-36 " + ((usernameerror === true) ? 'haserror' : '')}>
                                <input className="input100" autoComplete="off" type="text" name="username" value={username} onChange={this.handleuserchange} />
                                <span className="focus-input100"></span>
                                <span className='errormsg'>User Name is Required</span>
                            </div>
                            <label className="txt1 p-b-11">Password</label>
                            <div className={"wrap-input100 validate-input m-b-36 " + ((passworderror === true) ? 'haserror' : '')}>
                                <input className="input100" autoComplete="off" type="password" name="password" value={password} onChange={this.handlepasswordchange} />
                                <span className="focus-input100"></span>
                                <span className='errormsg'>Password is Required</span>
                            </div>
                            <div className="flex-sb-m w-full p-b-48 p-t-10 m-t-10">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="rememberme" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox100" htmlFor="rememberme">
                                        Remember me
							</label>
                                </div>
                                <div>
                                    <a href="/" className="txt3">
                                        Forgot Password?
							</a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={this.props.onIncrementCounter}>
                                    Login
						</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.status
    }
}
// const mapDispatchToProps = (dispatch, state) => {
//     return {
//         onIncrementCounter: () => dispatch({
//             type: 'in',
//             payload: {
//                 name: 'Srinivas',
//                 surname: 'Polishetty'
//             }
//         })
//     };
// };
export default connect(mapStateToProps)(Login)