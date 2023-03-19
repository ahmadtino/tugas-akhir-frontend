import React from 'react'

const EnergiBiaya = ({data}) => {
    return (
        <div>
            <div className='row'>
            <div className="col-sm-4 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                    <h6>ENERGI SOLAR PANEL (kWh)</h6>
                    <hr className='bg-light'/>
                    <h4>{data && data.e_solar}</h4>
                </div>
            </div>
            <div className="col-sm-4 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h6>ENERGI BEBAN <br></br>(kWh)</h6>
                <hr className='bg-light'/>
                <h4>{data && data.e_load}</h4>
                </div>
            </div>
            <div className="col-sm-4 p-2">
                <div style={{borderRadius: '5%'}} className="p-3 text-light bg-dark">
                <h6>BIAYA BERSIH <br></br>(Rp)</h6>
                <hr className='bg-light'/>
                <h4>Rp0,-</h4>
                </div>
            </div>
        </div>
        </div>
    )
}

export default EnergiBiaya
