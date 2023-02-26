import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { serverHost } from '../server/server';

const TabelPelanggan = ({data}) => {
    let i = 1;
    const [msg, setMsg] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const deleteData = async(id) => {
        await axios.delete(serverHost+'/users/'+id)
        .then(response => response.data)
        .then(data => {
            setMsg(data.msg);
            setSuccess(true);
            setError(false);
            window.location.reload(false);
        })
        .catch(err => {
            setMsg(err.response.data.msg);
            setError(true);
            setSuccess(false);
        })
    }

    return (
        <div>
            {msg && (<p className={success ? 'text-success' : (error ? 'text-danger' : '')}>{msg}</p>)}
            <table className="table text-center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Device ID</th>
                        <th scope="col">Domisili</th>
                        <th scope="col">Kelas</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {data && data.map(customer =>
                        (<tr>
                            <th>{i++}</th>
                            <td>{customer.name}</td>
                            <td>{customer.username}</td>
                            <td>{customer.region}</td>
                            <td>-</td>
                            <td>
                                <NavLink className="bg-success text-light p-2 m-1" to={"/data-listrik/"+customer.id} data-toggle="tooltip" title="View Data"><i class="fa-solid fa-eye"></i></NavLink>
                                <NavLink to={"/edit-pelanggan/"+customer.uuid} className="bg-primary text-light p-2 m-1" data-toggle="tooltip" title="Edit Data"><i class="fa-solid fa-wrench"></i></NavLink>
                                <span data-toggle="modal" data-target={"#exampleModal"+customer.id}>
                                <NavLink className="bg-danger text-light p-2 m-1" data-toggle="tooltip" title="Delete Data"><i class="fa-solid fa-trash-can"></i></NavLink>
                                </span>
                                
                                <div class="modal fade" id={"exampleModal"+customer.id} tabindex="-1" role="dialog" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Confirm Delete</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Anda yakin ingin hapus data {customer.name} ?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tidak</button>
                                        <button type="button" class="btn btn-primary" onClick={() => deleteData(customer.uuid)} data-dismiss="modal">Yakin</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
        
    )
}

export default TabelPelanggan
