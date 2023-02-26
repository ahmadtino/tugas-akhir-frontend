import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serverHost } from '../server/server';

const FormEditPelanggan = () => {
    const [fullname, setFullName] = useState(null);
    const [username, setUserName] = useState(null);
    const [region, setRegion] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const role = "pelanggan";

    const { uuid } = useParams();

    const getData = async() => {
        axios.get(serverHost+'/users/'+uuid)
        .then(response => response.data)
        .then(data => {
            setFullName(data && data.name);
            setUserName(data && data.username);
            setRegion(data && data.region);
            setLat(data && data.lat);
            setLong(data && data.long);
            // console.log(data)
        })
    }

    const updateData = async(e) => {
        e.preventDefault();
        setLoading(true);
        axios.patch('http://localhost:5000/users/'+uuid, {
            name: fullname,
            username,
            role,
            region,
            password: null,
            lat,
            long
        })
        .then(response => response.data)
        .then(data => {
            setError(false);
            setSuccessMsg(data.msg);
            setLoading(false);
            navigate('/data-pelanggan');
        })
        .catch(err => {
            setError(true);
            setErrorMsg(err.response.data.msg);
            setLoading(false);
        })
    }

    useEffect(() => {
         getData()
    },[])

    return (
        <form onSubmit={updateData}>
            <p className='text-success'>{!error && successMsg}</p>
            <p className='text-danger'>{error && errorMsg}</p>
            <div className="form-group">
                <label>Nama Lengkap</label>
                <input type="text" name="name" className="form-control" placeholder='Nama Lengkap' value={fullname} onChange={(e) => setFullName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Device ID</label>
                <input type="text" name="username" className="form-control" placeholder='Device ID' value={username} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Domisili</label>
                <input type="text" name="region" placeholder='Domisili' className="form-control" value={region} onChange={(e) => setRegion(e.target.value)}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Latitude</label>
                    <input type="text" name="latitude" placeholder='Latitude' className="form-control" value={lat} onChange={(e) => setLat(e.target.value)}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Longitude</label>
                    <input type="text" name="region" placeholder='Longitude' className="form-control" value={long} onChange={(e) => setLong(e.target.value)}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Ubah Data</button>
        </form>
    )
}

export default FormEditPelanggan
