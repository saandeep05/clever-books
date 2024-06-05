import React, { useEffect, useState } from 'react';
import '../styles/KeyMetrics.css';

function KeyMetrics() {
    const buttons = [
        {
            name: 'stockouts',
            value: 85,
            unit: '%',
            description: 'Reduction in out-of-stock'
        },
        {
            name: 'cash',
            value: 25,
            unit: 'Days',
            description: 'Reduction in cash recovery time'
        },
        {
            name: 'revenue',
            value: 15,
            unit: '%',
            description: 'Growth in revenue'
        }
    ];
    const [selectedMetric, setSelectedMetric] = useState(buttons[0]);

    useEffect(() => {
        // const valueObj = document.getElementById('value');
        // const val = Number(valueObj.innerHTML);
        // for(let i=0;i<val+1;i++) {
        //     valueObj.innerHTML = i.toString();
        //     setTimeout(() => {
        //     }, 500);
        // }
    }, [selectedMetric])

    return (
        <div className='key-metrics'>
            <span className='dummy-icons'>
                <div className='stockouts'>
                    <img src='' alt='' style={{ display: selectedMetric.name === 'stockouts' }} />
                    <button className='' style={{ border: selectedMetric.name === 'stockouts' ? '0.15rem solid #69375a' : 'hidden' }} onClick={() => setSelectedMetric(buttons[0])}>Stockouts</button>
                </div>
                <div className='cash'>
                    <img src='' alt='' style={{ display: selectedMetric.name === 'cash' }} />
                    <button className='' style={{ border: selectedMetric.name === 'cash' ? '0.15rem solid #69375a' : 'hidden' }} onClick={() => setSelectedMetric(buttons[1])}>Cash Recovery Cycle</button>
                </div>
                <div className='revenue'>
                    <img src='' alt='' style={{ display: selectedMetric.name === 'revenue' }} />
                    <button className='' style={{ border: selectedMetric.name === 'revenue' ? '0.15rem solid #69375a' : 'hidden' }} onClick={() => setSelectedMetric(buttons[2])}>Revenue</button>
                </div>
            </span>
            <span className='display-screen'>
                <div>
                    <h1>
                        <span className='value' id='value' style={{ 'color': '#69375a' }}>{selectedMetric.value}</span>
                        <span className='unit' style={{ 'color': 'white' }}>{selectedMetric.unit}</span>
                    </h1>
                    <div className='desc'><h2>{selectedMetric.description}</h2></div>
                </div>
            </span>
        </div>
    );
}

export default KeyMetrics;
