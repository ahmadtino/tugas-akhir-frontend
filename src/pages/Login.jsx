import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FormLogin from '../components/FormLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe,reset } from '../features/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user,isSuccess} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch,isSuccess])

    useEffect(() => {
        if(isSuccess) {
            navigate("/");
        }
    }, [isSuccess, navigate])
    
    return (
        <div>
            <Navbar />
            <div className='bg-light' style={{minWidth: "100vw", minHeight: "100vh"}}>
                <div className='row'></div>
                <div className="row mt-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 bg-white p-5" style={{boxShadow: '2px 3px 7px black'}}>
                        <FormLogin />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Login
