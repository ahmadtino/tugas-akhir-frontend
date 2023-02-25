import React, { useEffect } from 'react';
import Layout from './Layout';
import { properties } from '../properties/EditUser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const EditOperator = () => {
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
        if(user && user.role !== "pln") {
            navigate("/")
        }
    }, [user, isError, navigate])
    
    return (
        <Layout title="EDIT USER" activePage={properties.activePage} showCollapse={properties.showCollapse}>

        </Layout>
    )
}

export default EditOperator;
