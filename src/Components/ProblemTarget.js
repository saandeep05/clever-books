import React, { useState } from 'react';
import '../styles/ProblemTarget.css';
import f1Image from '../resources/f1.webp';
import f2Image from '../resources/f2.webp';
import f3Image from '../resources/f3.webp';
import f4Image from '../resources/f4.webp';
import f5Image from '../resources/f5.webp';
import f6Image from '../resources/f6.webp';
import f7Image from '../resources/f7.png';

function ProblemTarget() {
    const features = [
        {
            name: 'Accurate Demand Forecasting',
            description: '',
            sampleImageSrc: f1Image
        },
        {
            name: 'HELIX: Workflow Automation',
            description: '',
            sampleImageSrc: f2Image
        },
        {
            name: 'Automated Purchase Planning',
            description: '',
            sampleImageSrc: f3Image
        },
        {
            name: 'Automated Distribution Planning',
            description: '',
            sampleImageSrc: f4Image
        },
        {
            name: 'Easy Integration',
            description: '',
            sampleImageSrc: f5Image
        },
        {
            name: 'Custom Dashboards',
            description: '',
            sampleImageSrc: f6Image
        },
        {
            name: 'Consensus Planning',
            description: '',
            sampleImageSrc: f7Image
        }
    ];

    const [selectedFeature, setSelectedFeature] = useState(features[0]);
    const selectFeatureStyle = {
        background: 'linear-gradient(135deg, #a74b8b 0%, #7b7bc1 25%, #a74b8b 100%)',
        backgroundClip: 'text',
        backgroundSize: '100%',
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent', 
        MozTextFillColor: 'transparent',
    }

    const unselectedFeatureStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }

    return (
        <div className='problem-target'>
            <div>
                <h1>Things your spreadsheet wishes it could do</h1>
            </div>
            <div className='problem-target-box'>
                <span className='feature-list'>
                {
                    features.map((feature, id) => {
                        return (
                            <div className={'feature'} key={id} onClick={() => setSelectedFeature(features[id])}>
                                <h1 style={selectedFeature.name === features[id].name ? selectFeatureStyle : unselectedFeatureStyle}>{feature.name}</h1>
                                {
                                    selectedFeature.name === feature.name ? 
                                        <div>
                                            <h3>{feature.description}</h3>
                                            <a href='/'>Learn More</a>
                                        </div> :
                                        <></>
                                }
                            </div>
                        );
                    })
                }
                </span>
                <span className='sampleImage'>
                    <img src={selectedFeature.sampleImageSrc} alt='featureImage' width={600} height={'auto'} />
                </span>
            </div>
            <div className='view-features-button'>
                <button>View all features</button>
            </div>
        </div>
    );
}

export default ProblemTarget;
