import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {LogOut,reset} from "../features/authSlice";

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);

    const logOut = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/login");
    }

    return (
        <nav className="nav flex-column" id="accordion" style={{fontSize: '14px'}}>

            {
            user && user.role == "pln" ? 
            <>
                <a className="nav-link collapsed text-light" data-toggle="collapse" data-target="#collapseOne" href="#" role="button" aria-expanded="false" aria-controls="collapseOne" id="headingOne"><i className="fa-solid fa-user" /> <span className='ml-2'>Data User</span></a>
                <div id="collapseOne" className={"collapse "+props.collapse.collapseOne} data-parent="#accordion" aria-labelledby="headingOne">
                    <NavLink className={"nav-link text-light ml-4 "+props.active.DataPelanggan} to="/data-pelanggan"><i class="fa-solid fa-database"></i> Data Pelanggan</NavLink>
                    <NavLink className={"nav-link text-light ml-4 "+props.active.DataOperator} to="/data-operator"><i class="fa-solid fa-database"></i> Data Operator</NavLink>
                </div>
                <span className="border-bottom border-secondary"></span>

                <a className="nav-link collapsed text-light" data-toggle="collapse" data-target="#collapseTwo" href="#" role="button" aria-expanded="false" aria-controls="collapseTwo" id="headingTwo"><i className="fa-solid fa-user-plus"></i><span className="ml-2">Tambah User</span></a>
                <div id="collapseTwo" className={"collapse "+props.collapse.collapseTwo} data-parent="#accordion" aria-labelledby="headingTwo">
                    <NavLink className={"nav-link text-light ml-4 "+props.active.TambahPelanggan} to="/tambah-pelanggan"><i class="fa-solid fa-plus"></i> Tambah Pelanggan</NavLink>
                    <NavLink className={"nav-link text-light ml-4 "+props.active.TambahOperator} to="/tambah-operator"><i class="fa-solid fa-plus"></i> Tambah Operator</NavLink>
                </div>
                <span className="border-bottom border-secondary"></span>

                <a className="nav-link collapsed text-light" data-toggle="collapse" data-target="#collapseThree" href="#" role="button" aria-expanded="false" aria-controls="collapseThree" id="headingThree"><i class="fa-solid fa-wrench"></i><span className='ml-2'> Settings</span></a>
                <div id="collapseThree" className={"collapse "+props.collapse.collapseThree} data-parent="#accordion" aria-labelledby="headingThree">
                    <NavLink className={"nav-link text-light ml-4 "+props.active.UbahPassword} to="/ubah-pass"><i className="fa-solid fa-gear" /> Ubah Password</NavLink>
                    <a className="nav-link text-light ml-4" href="#" onClick={logOut}><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
                </div>
                <span className="border-bottom border-secondary"></span>
            </>
            : 
            <>
            <NavLink className="nav-link text-light" to='/data-listrik/999'><i class="fa-solid fa-database"></i><span className='ml-2'>Data Kelistrikan</span></NavLink>
            <span className="border-bottom border-secondary"></span>
            </>
            }

            {
            props.viewing ?
            <>
                <div className='p-1'>
                    <h6 className='font-weight-bold text-light text-center mt-2'>VIEWING</h6>
                    <table className="table table-dark text-light mt-3">
                        <tbody>
                            <tr>
                                <th >Nama</th>
                                <td >{props.viewing.user.name}</td>
                            </tr>
                            <tr>
                                <th >ID</th>
                                <td >{props.viewing.user.username}</td>
                            </tr>
                            <tr>
                                <th>Domisili</th>
                                <td>{props.viewing.user.region}</td>
                            </tr>
                            <tr>
                                <th>Kelas</th>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className="border-bottom border-secondary"></span>
                
            </>
            :
            <>
            </>
            }

        </nav>
    )
}

export default Sidebar;
