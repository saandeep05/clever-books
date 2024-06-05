import React from 'react';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <span className='company-info'>
                <h1>Clever Books</h1>
                <h3>Clever Books is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</h3>
            </span>
            <span className='company-address'>
                <h3>Contact Clever Books</h3>
                <div className='registered-office'>
                    <a href='/address-link'>
                        Registered Office:
                        1507, Incubex, 11th cross road,
                        19th Main Road, Bengaluru,
                        India.560102</a>
                </div>
                <div className='corporate-office'>
                    <a href='/address-link'>
                        Corporate Office:
                        291, All Time Space, 4th Floor,
                        15th A Cross, Sector - 6,
                        HSR Layout, Bengaluru,
                        India. 560102</a>
                </div>
            </span>
        </div>
    );
}

export default Footer;
