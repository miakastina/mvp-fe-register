import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Masuk</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Ingat saya</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Masuk</button>
                <p className="forgot-password text-right">
                    Lupa <a href="#">password?</a>
                </p>
            </form>
        );
    }
}