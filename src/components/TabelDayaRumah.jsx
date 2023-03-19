import React from 'react';
import { format } from "date-fns";

const TabelDayaRumah = ({data}) => {
    let i = 1;
    
    return (
        <table className="table text-center" style={{fontSize: '14px'}}>
            <thead className="thead-dark">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Date</th>
                    <th scope="col">V (V)</th>
                    <th scope="col">I (A)</th>
                    <th scope="col">P (W)</th>
                    <th scope="col">pf</th>
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr>
                        <th>{i++}</th>
                        <th>
                            {format(new Date(d.timestamp), 'dd/MM/yyyy kk:mm')}
                        </th>
                        <td>{d.v_load}</td>
                        <td>{d.i_load}</td>
                        <td>{d.p_load}</td>
                        <td>{d.pf_load}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelDayaRumah
