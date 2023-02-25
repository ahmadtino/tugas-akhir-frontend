import React from 'react'

const ProfilBeban = ({data}) => {
    return (
        <div className='pl-3 pr-3 pb-3'>
        <div className='row'>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                    <h5>POWER (W)</h5>
                    <hr className='bg-light'/>
                    <h3>{data && data.p_load}</h3>
                </div>
            </div>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h5>POWER FACTOR</h5>
                <hr className='bg-light'/>
                <h3>{data && data.pf_load}</h3>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h5>VOLTAGE (V)</h5>
                <hr className='bg-light'/>
                <h3>{data && data.v_load}</h3>
                </div>
            </div>
            <div className="col-sm-6 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h5>CURRENT (A)</h5>
                <hr className='bg-light'/>
                <h3>{data && data.i_load}</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfilBeban
