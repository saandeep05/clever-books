import React, { useState } from 'react';
import CompaniesSlider from './CompaniesSlider';
import pTal from '../resources/p-tal.svg';
import samosaParty from '../resources/samosa-party.svg';
import samosaPartyBig from '../resources/samosa-party-big.png'
import pTalBig from '../resources/p-tal-big.png';
import diksha from '../resources/diksha.png';
import kirti from '../resources/kirti.png';
import '../styles/Reviews.css';

function Reviews() {
    const reviews = [
        {
            name: 'Diksha Pande',
            knownFor: 'Co-Founder, Samosa Party',
            content: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Clever Books automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Clever Books unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
            profileImgSrc: diksha,
            companyLogoSrc: samosaParty,
            sampleImgSrc: samosaPartyBig,
            fulfilments: ['Upto 95% ~ Demand Fulfilment', '<3% ~ Daily Stock-out']
        },
        {
            name: 'Kirti Goel',
            knownFor: 'Co-Founder, P-TAL',
            content: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Clever Books I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
            profileImgSrc: kirti,
            companyLogoSrc: pTal,
            sampleImgSrc: pTalBig,
            fulfilments: ['Automated Invoice Reconciliation', 'Channel wise Sales Classification']
        }
    ];

    const [currentReviewId, setCurrentReviewId] = useState(0);

    const previousReview = () => {
        if(currentReviewId <= 0) setCurrentReviewId((reviews.length + (currentReviewId-1))%(reviews.length));
        setCurrentReviewId((currentReviewId - 1)%(reviews.length));
    }

    const nextReview = () => {
        setCurrentReviewId((currentReviewId + 1)%(reviews.length));
    }

    return (
        <div className='reviews'>
            <div className='slider'>
                <CompaniesSlider />
            </div>
            <div className='information-container'>
                <span className='information'>
                    {
                        <div className={'review'}>
                            <div>
                                <h2>{reviews[currentReviewId].content}</h2>
                            </div>
                            <div className='information-footer'>
                                <span className='profile'>
                                    <span>
                                        <img src={reviews[currentReviewId].profileImgSrc} alt='profile-img' width={75} height={'auto'}/>
                                    </span>
                                    <span>
                                        <h3>{reviews[currentReviewId].name}</h3>
                                        <h4>{reviews[currentReviewId].knownFor}</h4>
                                    </span>
                                </span>
                                <span>
                                    <img src={reviews[currentReviewId].companyLogoSrc} alt='logo' width={100} height={'auto'}/>
                                </span>
                            </div>
                        </div>
                    }
                    <div className='previous-next'>
                        <button onClick={previousReview}>{'<'}</button>
                        <button onClick={nextReview}>{'>'}</button>
                    </div>
                    <div className='fulfilments'>
                        {
                            reviews[currentReviewId].fulfilments.map((item, id) => {
                                return (
                                    <button key={id}>
                                        <h1>{item.split('~')[0]}</h1>
                                        <h3>{item.split('~')[1]}</h3>
                                    </button>
                                );
                            })
                        }
                    </div>
                </span>
                <span className='sample-big-image' >
                    <img src={reviews[currentReviewId].sampleImgSrc} alt=''/>
                </span>
            </div>
        </div>
    );
}

export default Reviews;
