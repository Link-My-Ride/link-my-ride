import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import GadgetsSection from '../components/home/GadgetsSection';
import PromoBanner from '../components/home/PromoBanner';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <CategorySection />
            <GadgetsSection />
            <PromoBanner />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
