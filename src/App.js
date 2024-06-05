import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import KeyMetrics from './Components/KeyMetrics';
import Reviews from './Components/Reviews';
import ProblemTarget from './Components/ProblemTarget';
import CTA from './Components/CTA';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import './App.css';
import ProblemsSolved from './Components/ProblemsSolved';

function App () {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <ProblemsSolved />
            <KeyMetrics />
            <Reviews />
            <ProblemTarget />
            {/* <Blog /> */}
            <CTA />
            <Footer />
        </div>
    );
}

export default App;