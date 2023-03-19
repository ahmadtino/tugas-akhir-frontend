import React from 'react'

const ProfilSolarPanel = ({data}) => {
    return (
        <div className='pl-3 pr-3 pb-3'>
        <div className='row'>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                    <h6>POWER (W)</h6>
                    <hr className='bg-light'/>
                    <h4>{data && data.p_solar}</h4>
                </div>
            </div>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h6>POWER FACTOR</h6>
                <hr className='bg-light'/>
                <h4>{data && data.pf_solar}</h4>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h6>VOLTAGE (V)</h6>
                <hr className='bg-light'/>
                <h4>{data && data.v_solar}</h4>
                </div>
            </div>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h6>CURRENT (A)</h6>
                <hr className='bg-light'/>
                <h4>{data && data.i_solar}</h4>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default ProfilSolarPanel;
