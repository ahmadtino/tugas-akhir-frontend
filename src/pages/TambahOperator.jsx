import React, { useEffect } from 'react';
import Layout from './Layout';
import { properties } from '../properties/TambahOperator';
import FormAddOperator from '../components/FormAddOperator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const TambahOperator = () => {
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
        <Layout title="TAMBAH DATA OPERATOR" activePage={properties.activePage} showCollapse={properties.showCollapse}>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <FormAddOperator />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TambahOperator
