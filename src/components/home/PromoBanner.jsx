import React from 'react';
import './PromoBanner.css';
import promoImg from '../../assets/images/categories/communicator-promo.jpg';

const PromoBanner = () => {
    return (
        <section className="promo-section container section-padding">
            <div className="promo-container">
                <div className="promo-content reveal">
                    <h2 className="promo-title">
                        <em>STAY LINKED</em><br />
                        <span className="text-accent">EVERYWHERE</span>
                    </h2>
                    <p className="promo-desc">
                        Join 50,000+ riders who trust Link My Ride for their daily commute
                        and cross-country adventures. Quality tested in Dhaka, designed
                        for the world.
                    </p>
                    <div className="promo-stats">
                        <div className="stat-item">
                            <span className="stat-number">50K+</span>
                            <span className="stat-label">ACTIVE USERS</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.9</span>
                            <span className="stat-label">AVG RATING</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">120+</span>
                            <span className="stat-label">GLOBAL DEALERS</span>
                        </div>
                    </div>
                </div>
                <div className="promo-visual reveal" style={{ transitionDelay: '200ms' }}>
                    <div className="device-mockup">
                        <div className="device-screen">
                            <img src={promoImg} alt="Device Interface" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
