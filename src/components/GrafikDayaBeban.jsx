import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { format } from "date-fns";
Chart.register(...registerables);

const GrafikDayaBeban = ({data}) => {
    return (
        <div style={{minHeight: '400px'}}>
            <Line 
                data={{
                    labels: data.map(d => format(new Date(d.timestamp), 'kk:mm')),
                    datasets: 
                    [
                        {
                            label: 'Daya Beban (W)',
                            data: data.map(d => parseFloat(d.p_load)),
                            borderColor: 'Blue',
                            backgroundColor: 'rgba(0, 0, 255, 0.45)',
                            borderWidth: 2,
                            fill: true,
                            cubicInterpolationMode: 'monotone'
                        }
                    ]
                }}
                options=
                {{  
                    maintainAspectRatio: false,
                    animation: false,
                }}
            />
        </div>
    )
}

export default GrafikDayaBeban
