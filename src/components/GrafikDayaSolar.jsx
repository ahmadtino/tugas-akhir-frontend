import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { format } from "date-fns";
Chart.register(...registerables);

const GrafikDayaSolar = ({data}) => {
    return (
        <div style={{minHeight: '400px'}}>
            <Line 
                data={{
                    labels: (data.map(d => format(new Date(d.timestamp), 'kk:mm'))),
                    datasets: 
                    [
                        {
                            label: 'Daya Solar Panel (W)',
                            data: (data.map(d => parseFloat(d.p_solar))),
                            borderColor: 'Red',
                            backgroundColor: 'rgba(255, 0, 0, 0.45)',
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

export default GrafikDayaSolar
