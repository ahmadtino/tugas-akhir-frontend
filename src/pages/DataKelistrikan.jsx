import React, { useEffect, useState } from 'react';
import TabelDayaRumah from '../components/TabelDayaRumah';
import TabelDayaSolar from '../components/TabelDayaSolar';
import Layout from './Layout';
import { properties } from '../properties/DataKelistrikan';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GrafikDayaSolar from '../components/GrafikDayaSolar';
import GrafikDayaBeban from '../components/GrafikDayaBeban';
import { format } from "date-fns";
import ProfilSolarPanel from '../components/ProfilSolarPanel';
import ProfilBeban from '../components/ProfilBeban';
import WeatherInfo from '../components/WeatherInfo';
import TabelPrediksiCuaca from '../components/TabelPrediksiCuaca';
import EnergiBiaya from '../components/EnergiBiaya';
import { serverHost } from '../server/server';

const DataKelistrikan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user,isError} = useSelector((state) => state.auth);
  const [edata, setEdata] = useState(null);
  const [reversedData, setReversedData] = useState(null);
  const [slicedData, setSlicedData] = useState(null);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
      dispatch(getMe());
  }, [dispatch,isError])

  useEffect(() => {
      if(isError) {
          navigate("/login");
      }
  }, [isError, navigate])

  const { userId } = useParams();

  const getData = async() => {
    setLoading(true);
    await axios.get(serverHost+"/edata?userId="+userId)
    .then(response => {
        setEdata(response.data);
        setSlicedData((response.data.length > 10) ? response.data.slice(-10) : response.data);
        setReversedData(response.data.reverse());
        setLoading(false);
    })
    .catch(err => {
        setErrorMsg(err.response.data.msg);
        setLoading(false);
    })
  }

  properties.viewData = reversedData && reversedData[0];

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    const intervalCall = setInterval(() => {
      getData();
    }, 10000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, [])

  const deleteEdata = async () => {
    // await axios.delete(`http://localhost:5000/edata/${userId}`);
    // mutate("edata");
  }

  return (
    <Layout title="DATA PENGGUNAAN LISTRIK" activePage={properties.activePage} showCollapse={properties.showCollapse} viewData={properties.viewData}>
        {loading ? 
        <h4>Loading Data...</h4> :
        <>
            <p><span className='font-weight-bold'>DATE:</span> {format(new Date(), 'dd/MM/yyyy')}</p>
            <div>
                {reversedData && <WeatherInfo data={reversedData[0]}/>}
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h5>GRAFIK DAYA SOLAR PANEL</h5>
                    {slicedData && <GrafikDayaSolar data={slicedData}/>}
                </div>
                <div className="col-md-6">
                    <h5>GRAFIK DAYA BEBAN</h5>
                    {slicedData && <GrafikDayaBeban data={slicedData}/>}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h5>PROFIL SOLAR PANEL</h5>
                    {reversedData && <ProfilSolarPanel data={reversedData[0]}/>}
                </div>
                <div className="col-md-6">
                    <h5>PROFIL BEBAN</h5>
                    {reversedData && <ProfilBeban data={reversedData[0]}/>}
                </div>
            </div>
            <hr />
            <h5>ENERGI DAN BIAYA</h5>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    {reversedData && <EnergiBiaya data={reversedData[0]}/>}
                </div>
                <div className="col-md-2"></div>
            </div>
            <hr />
            <div>
                <a className="nav-link collapsed text-dark" data-toggle="collapse" data-target="#collapseSix" href="#" role="button" aria-expanded="false" aria-controls="collapseSix" id="headingSix" onClick={() => setShow1(!show1)}><h5><span className={(show1 ? 'd-none' : '')}><i className="fa-solid fa-angles-right"></i></span><span className={(!show1 ? 'd-none' : '')}><i className="fa-solid fa-angles-down"></i></span> <span>PREDIKSI CUACA</span></h5></a>
                <div id="collapseSix" className={"collapse"} data-parent="#accordion" aria-labelledby="headingSix">
                    <div style={{maxHeight: '400px', overflowY: 'scroll'}} className='container mt-3'>
                        {reversedData && reversedData[0] && <TabelPrediksiCuaca data={reversedData[0]}/>}
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <a className="nav-link collapsed text-dark" data-toggle="collapse" data-target="#collapseFour" href="#" role="button" aria-expanded="false" aria-controls="collapseFour" id="headingFour" onClick={() => setShow3(!show3)}><h5><span className={(show3 ? 'd-none' : '')}><i className="fa-solid fa-angles-right"></i></span><span className={(!show3 ? 'd-none' : '')}><i className="fa-solid fa-angles-down"></i></span> <span>LOG DAYA SOLAR PANEL</span></h5></a>
                <div id="collapseFour" className={"collapse"} data-parent="#accordion" aria-labelledby="headingFour">
                    <div style={{maxHeight: '400px', overflowY: 'scroll'}} className='container mt-3'>
                        {reversedData && <TabelDayaSolar data={reversedData} />}
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <a className="nav-link collapsed text-dark" data-toggle="collapse" data-target="#collapseFive" href="#" role="button" aria-expanded="false" aria-controls="collapseFive" id="headingFive" onClick={() => setShow2(!show2)}><h5><span className={(show2 ? 'd-none' : '')}><i className="fa-solid fa-angles-right"></i></span><span className={(!show2 ? 'd-none' : '')}><i className="fa-solid fa-angles-down"></i></span> <span>LOG DAYA BEBAN</span></h5></a>
                <div id="collapseFive" className="collapse" data-parent="#accordion" aria-labelledby="headingFive">
                    <div style={{maxHeight: '400px', overflowY: 'scroll'}} className='container mt-3'>
                        {reversedData && <TabelDayaRumah data={reversedData} />}
                    </div>
                </div>
            </div>
            <hr />
            <button className='btn btn-danger' onClick={deleteEdata}>Delete Data</button>)
        </>}
    </Layout>
  )
}

export default DataKelistrikan
