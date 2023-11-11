import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function BarChart({ elementName, chartData } : { elementName: string,  chartData: number[] }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) chartRef.current.destroy();
        
        const element = document.getElementById(elementName).getContext('2d');
    
        const ref = new Chart(element, {
            type: 'bar',
            data: {
                labels: ['No DR', 'Mild', 'Moderate', 'Severe', 'Proliferate DR'],
                datasets: [{
                    label: ' Probability',
                    data: chartData,
                }],
            },
            options: {
                responsive: true,
                animations: {
                    tension: {
                      duration: 1000,
                      easing: 'linear',
                      from: 1,
                      to: 0,
                      loop: true
                    }
                },
                layout: {
                    padding: 5
                },
                barThickness: 40,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                    }
                }
            },
        });

        chartRef.current = ref;
    }, []);

    return (
        <div className='w-full'>
            <h1 className='text-1xl font-semibold text-center mb-3'>Prediction Results</h1>
            <canvas id={elementName} className='w-full'></canvas>
        </div>
    );
}