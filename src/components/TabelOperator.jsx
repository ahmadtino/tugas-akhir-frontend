import React from 'react'
import { NavLink } from 'react-router-dom';

const TabelOperator = ({data}) => {
    let i = 1;
    return (
        <table className="table text-center" style={{fontSize: '14px'}}>
            <thead className="thead-dark">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Username</th>
                    {/* <th scope="col">Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {data && data.map(operator =>
                    (<tr>
                        <th>{i++}</th>
                        <td>{operator.name}</td>
                        <td>{operator.username}</td>
                        {/* <td>
                            <NavLink to={"/edit-operator/"+operator.uuid} className="bg-primary text-light p-2 m-1" data-toggle="tooltip" title="Edit Data"><i class="fa-solid fa-wrench"></i></NavLink>
                            <NavLink className="bg-danger text-light p-2 m-1" data-toggle="tooltip" title="Delete Data"><i class="fa-solid fa-trash-can"></i></NavLink>
                        </td> */}
                    </tr>
                    )
                )}
            </tbody>
        </table>
    )
}

export default TabelOperator
