import React, {useEffect} from 'react';
import Layout from './Layout';
import { properties } from '../properties/Welcome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';


const Welcome = () => {
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
    }, [isError, navigate])

    return (
        <Layout title="WELCOME!" activePage={properties.activePage} showCollapse={properties.showCollapse}>
            <h5>Welcome back...</h5>
            <h5>{user && user.name}!</h5>
        </Layout>
    )
}

export default Welcome
