import React from 'react'

const EnergiBiaya = ({data}) => {
    return (
        <div>
            <div className='row'>
            <div className="col-sm-4 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                    <h5>ENERGI SOLAR PANEL (kWh)</h5>
                    <hr className='bg-light'/>
                    <h3>{data && data.e_solar}</h3>
                </div>
            </div>
            <div className="col-sm-4 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h5>ENERGI BEBAN (kWh)</h5>
                <hr className='bg-light'/>
                <h3>{data && data.e_load}</h3>
                </div>
            </div>
            <div className="col-sm-4 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h5>BIAYA BERSIH</h5>
                <hr className='bg-light'/>
                <h3>Rp0,-</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EnergiBiaya
