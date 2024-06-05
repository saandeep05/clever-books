import React from 'react';
import ajanta from '../resources/ajanta.svg';
import pilgrim from '../resources/pilgrim.svg';
import samosa from '../resources/samosa-party.svg';
import everloom from '../resources/everloom.svg';
import aroka from '../resources/aroka.svg';
import plix from '../resources/plix.svg';

function CompaniesSlider() {
    const companiesImages = [
        ajanta,
        pilgrim,
        samosa,
        everloom,
        aroka,
        plix
    ];

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <marquee scrollAmount="20">
                {
                    companiesImages.map((image, id) => {
                        return <img style={{
                            paddingLeft: '5rem',
                            paddingRight: '5rem',
                        }} src={image} key={id} alt='anImage' width={'auto'} height={75}/>
                    })
                }
            </marquee>
        </div>
    );
}

export default CompaniesSlider;
