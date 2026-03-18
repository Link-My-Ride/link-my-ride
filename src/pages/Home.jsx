import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FreeGiftsSection from '../components/home/FreeGiftsSection';
import OffersSection from '../components/home/OffersSection';
import GadgetsSection from '../components/home/GadgetsSection';
import PromoBanner from '../components/home/PromoBanner';
import WhyChooseUs from '../components/home/WhyChooseUs';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <div className="bg-white" style={{ paddingBottom: '80px' }}>
                <div className="promotions-row">
                    <FreeGiftsSection />
                    <OffersSection />
                </div>
            </div>
            <div className="bg-gray">
                <GadgetsSection />
            </div>
            <PromoBanner />
            <div className="bg-white">
                <WhyChooseUs />
            </div>
        </div>
    );
};

export default Home;
