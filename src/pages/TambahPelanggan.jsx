import React, { useEffect } from 'react';
import Layout from './Layout';
import { properties } from '../properties/TambahPelanggan';
import FormAddPelanggan from '../components/FormAddPelanggan';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';


const TambahPelanggan = () => {
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
        <Layout title="TAMBAH DATA PELANGGAN" activePage={properties.activePage} showCollapse={properties.showCollapse}>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <FormAddPelanggan />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TambahPelanggan;
