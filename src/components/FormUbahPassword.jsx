import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serverHost } from '../server/server';

const FormUbahPassword = ({user}) => {
    const fullname = user.name;
    const username = user.username;
    const role = user.role;
    const region = user.region;
    const uuid = user.uuid;
    let lat;
    let long;
    if (role === 'pln') {
        lat = 0.00;
        long = 0.00;
    } else {
        lat = user.lat;
        long = user.long;
    }

    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [prevPassword, setPrevPassword] = useState(null);

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const updatePassword = async(e) => {
        e.preventDefault();
        setLoading(true);
        axios.patch(serverHost+'/users/'+uuid, {
            name: fullname,
            username,
            role,
            region,
            prevPassword,
            password,
            confPassword,
            lat,
            long
        })
        .then(response => response.data)
        .then(data => {
            setError(false);
            setSuccessMsg(data.msg);
            setLoading(false);

            setPassword(null);
            setConfPassword(null);
            setPrevPassword(null);
        })
        .catch(err => {
            setError(true);
            setErrorMsg(err.response.data.msg);
            setLoading(false);
        })
    }

    return (
        <form style={{fontSize: '14px'}} onSubmit={updatePassword}>
            <p className='text-success'>{!error && successMsg}</p>
            <p className='text-danger'>{error && errorMsg}</p>
            <div className="form-group">
                <label>Password Saat Ini</label>
                <input type="password" name="name" className="form-control" placeholder='Password Saat Ini' value={prevPassword} onChange={(e) => setPrevPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password Baru</label>
                <input type="password" name="name" className="form-control" placeholder='Password Baru' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Confirm Password Baru</label>
                <input type="password" name="name" className="form-control" placeholder='Confirm Password Baru' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary">Ubah Password</button>
            {loading && <h4>Submitting...</h4>}
        </form>
    )
}

export default FormUbahPassword;
