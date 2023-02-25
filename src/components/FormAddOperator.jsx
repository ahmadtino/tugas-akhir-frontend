import React, {useState} from 'react';
import axios from 'axios';

const FormAddOperator = () => {
    const [fullname, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const role = "pln";
    const region = "PLN";

    const resetState = () => {
        setFullName("");
        setUserName("");
        setPassword("");
        setConfPassword("");
    }

    const postData = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post("http://localhost:5000/users", {
            name: fullname,
            username,
            password,
            confPassword,
            role,
            region
        })
        .then(response => response.data)
        .then(data => {
            setError(false);
            setSuccessMsg(data.msg);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setErrorMsg(err.response.data.msg);
            setLoading(false);
        })
        resetState();
    }

    return (
        <form onSubmit={postData}>
            <p className='text-success'>{!error && successMsg}</p>
            <p className='text-danger'>{error && errorMsg}</p>
            <div className="form-group">
                <label>Nama Lengkap</label>
                <input type="text" name="name" className="form-control" placeholder='Nama Lengkap' value={fullname} onChange={(e) => setFullName(e.target.value)}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="form-group col-md-4">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group col-md-4">
                    <label>Confirm Password</label>
                    <input type="password" name="confPassword" className="form-control" placeholder='Confirm Password' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Tambah Data</button>
            {loading && <h4>Submitting...</h4>}
        </form>
    )
}

export default FormAddOperator
