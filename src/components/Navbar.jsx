import React, { useReducer } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {LogOut,reset} from "../features/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);

    const logOut = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/login")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light" style={{minWidth: "100vw"}}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <NavLink className="navbar-brand font-weight-bold" to="/">DASHBOARD ENERGY METER</NavLink>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item dropdown">
                    {user && 
                    <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize: '14px'}}>
                        <i className="fa-solid fa-user" />
                        <span className="ml-2">{user.name}</span>
                    </a>}
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" href="#" to="/ubah-pass"><i className="fa-solid fa-gear"></i> Ubah Password</NavLink>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={logOut} href="#"><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
                    </div>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
