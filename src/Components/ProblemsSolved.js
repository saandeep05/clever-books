import React from 'react';
import '../styles/ProblemsSolved.css';
import what from '../resources/what.svg';
import when from '../resources/when.svg';
import howMuch from '../resources/how-much.svg';
import where from '../resources/where.svg';

function ProblemsSolved() {
    return (
        <div className='problems-solved'>
            <div className='main-line'>
                <h1>Four Problems solved by Clever Books</h1>
            </div>
            <div className='features'>
                <span className='q1'>
                    <img src={what} alt='icon-img1' width={50} height={'auto'}/>
                    <h2>What to Order</h2>
                    <h4>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</h4>
                </span>
                <span className='q2'>
                    <img src={when} alt='icon-img2' width={50} height={'auto'}/>
                    <h2>What to Order</h2>
                    <h4>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</h4>
                </span>
                <span className='q3'>
                    <img src={howMuch} alt='icon-img3' width={50} height={'auto'}/>
                    <h2>What to Order</h2>
                    <h4>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</h4>
                </span>
                <span className='q4'>
                    <img src={where} alt='icon-img4' width={50} height={'auto'}/>
                    <h2>What to Order</h2>
                    <h4>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</h4>
                </span>
            </div>
        </div>
    );
}

export default ProblemsSolved;
