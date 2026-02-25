import React from 'react';
import './HeroSection.css';
import communicatorImg from '../../assets/images/categories/communicator-bg.jpg';
import dashcamImg from '../../assets/images/categories/dashcam-bg.jpg';

const HeroSection = () => {
    return (
        <section className="split-hero">
            <div className="hero-half hero-left">
                <div className="hero-bg" style={{ backgroundImage: `url(${communicatorImg})` }}></div>
                <div className="dark-overlay"></div>
                <div className="hero-content">
                    <span className="hero-pill badge-moto">MOTO SERIES</span>
                    <h1 className="hero-split-title">Ride Free.<br />Stay<br />Connected.</h1>
                    <p className="hero-split-desc">
                        Premium motorcycle communicators designed for crystal-clear audio and seamless mesh networking on the open road.
                    </p>
                    <button
                        className="btn-split btn-moto"
                        onClick={() => window.location.hash = "#catalog?category=communicators"}
                    >
                        Shop Communicators
                    </button>
                </div>
            </div>

            <div className="hero-half hero-right">
                <div className="hero-bg" style={{ backgroundImage: `url(${dashcamImg})` }}></div>
                <div className="light-overlay"></div>
                <div className="hero-content">
                    <span className="hero-pill badge-auto">AUTO SERIES</span>
                    <h1 className="hero-split-title dark-text">Your Eye<br />On The Road.</h1>
                    <p className="hero-split-desc dark-text">
                        Capture every ride in crystal-clear 4K — even at night. Cloud-ready for ultimate security.
                    </p>
                    <button
                        className="btn-split btn-auto"
                        onClick={() => window.location.hash = "#catalog?category=dashcams"}
                    >
                        Shop Dashcams
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
