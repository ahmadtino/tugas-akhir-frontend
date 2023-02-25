import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const TabelPrediksiCuaca = ({data}) => {
    const [weathersData, setWeathersData] = useState(null);
    let i = 1;

    useEffect(() => {
        getWeathersData();
    },[])

    const getWeathersData = async() => {
        await axios.get(`http://localhost:5000/weathers?lat=${data.user.lat}&long=${data.user.long}`)
        .then(response => setWeathersData(response.data))
    }
    
    return (
        <table className="table text-center">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Date</th>
                    <th scope="col">Cuaca</th>
                    <th scope="col">Suhu (<sup>O</sup>C)</th>
                    <th scope="col">Kelembapan (%)</th>
                    <th scope="col">Kec. Angin (m/s)</th>
                    <th scope="col">Tekanan (hPa)</th>
                    <th scope="col">Solar Irradiance</th>
                </tr>
            </thead>
            <tbody>
                {weathersData && weathersData.map(d => (
                    <tr>
                        <th>{i++}</th>
                        <th>
                            {format(new Date(d.dt_txt), 'dd/MM/yyyy kk:mm')}
                        </th>
                        <td>{d.weather[0].description}</td>
                        <td>{d.main.temp}</td>
                        <td>{d.main.humidity}</td>
                        <td>{d.wind.speed}</td>
                        <td>{d.main.pressure}</td>
                        <td>0</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelPrediksiCuaca
