import React from "react";
import '../styles/Hero.css';
import heroImage from '../resources/hero-section-img.svg';
import heroPointer from '../resources/hero-section-pointer.svg';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="main-content-container">
                <span className="catchphrase-container">
                    <div className="catchphrase">
                        <h1>We create, We deliver!</h1>
                    </div>
                    <div className="description">
                        <p>
                            Eliminate overstocking and under-stocking with Crest. Built by
                            supply-chain experts, it brings the same technology used by large
                            global brands to power fast-growing startups. In short, we make supply
                            meet demand, and then help you grow both.
                        </p>
                    </div>
                    <div className="get-started">
                        <button>Get started with Clever Books</button>
                        <img src={heroPointer} alt="pointer" width={200} height={'auto'} />
                    </div>
                </span>
                <span>
                    <img src={heroImage} alt="heroImage" width={600} height={'auto'} />
                </span>
            </div>
        </div>
    );
}

export default HeroSection;
