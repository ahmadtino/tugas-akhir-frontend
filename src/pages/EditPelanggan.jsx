import React, { useEffect } from 'react';
import Layout from './Layout';
import { properties } from '../properties/EditUser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import FormEditPelanggan from '../components/FormEditPelanggan';

const EditPelanggan = () => {
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
            <div className="row">
                <div className="col-md-6">
                    <FormEditPelanggan />
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </Layout>
    )
}

export default EditPelanggan;
