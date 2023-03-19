import React, { useEffect } from 'react';
import Layout from './Layout';
import { properties } from '../properties/UbahPassword';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import FormUbahPassword from '../components/FormUbahPassword';

const UbahPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user,isError} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch,isError])

    useEffect(() => {
        if(isError) {
            navigate("/login");
        }
    }, [isError, navigate, user])

    return (
        <Layout title="UBAH PASSWORD" activePage={properties.activePage} showCollapse={properties.showCollapse}>
            <div className="row">
                <div className="col-md-6">
                    {user && <FormUbahPassword user={user} />}
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </Layout>
    )
}

export default UbahPassword
