import React, { useEffect, useState } from 'react';
import TabelOperator from '../components/TabelOperator';
import Layout from './Layout';
import { properties } from '../properties/DataOperator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import axios from 'axios';
import { serverHost } from '../server/server';

const DataOperator = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user,isError} = useSelector((state) => state.auth);

    const [userData, setUserData] = useState("");
    const [viewingData, setViewingData] = useState("");

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        setLoading(true);
        axios.get(serverHost+"/users?role=pln")
        .then(response => response.data)
        .then(data => {
            setUserData(data);
            setViewingData(data);
            setLoading(false);
            setError(false);
        })
        .catch(err => {
            setErrorMsg(err.msg);
            setLoading(false);
            setError(true);
        })
    },[])

    const changeDataTable = (value) => {
        setViewingData(userData.filter(user => {
            return user.name.toLowerCase().includes(value.toLowerCase()) || user.username.toLowerCase().includes(value.toLowerCase());
        }))
    }

    return (
        <Layout title="DATA OPERATOR" activePage={properties.activePage} showCollapse={properties.showCollapse}>
            <div className="row">
                <div className="container">
                    <div className="text-danger">{error && errorMsg}</div>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => changeDataTable(e.target.value)}/>
                    </form>
                    <br />
                    {loading ? <h4 className="text-center">Loading Data...</h4> : viewingData && <TabelOperator data={viewingData}/>}
                </div>
            </div>
        </Layout>
    )
}

export default DataOperator
