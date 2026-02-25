import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '🛠️',
            title: 'Precision Engineered',
            desc: 'Our gadgets undergo rigorous vibration and weather testing to ensure they outlast whatever you need them for.'
        },
        {
            icon: '🏍️',
            title: 'Rider Focused',
            desc: 'Every feature is designed to be easily accessible even while wearing thick winter gloves at 100km/h.'
        },
        {
            icon: '🔄',
            title: 'Seamless Ecosystem',
            desc: 'Sync your communicator, dashcams, and phone in one unified interface with the LinkMyRide Mobile App.'
        }
    ];

    return (
        <section className="why-choose-section container section-padding">
            <div className="text-center mb-12">
                <h2 className="section-title centered-title">
                    WHY CHOOSE <span className="text-accent">US</span>
                </h2>
                <p className="section-subtitle">
                    We don't just sell gear; we're riders who live for the asphalt and the open road.
                </p>
            </div>

            <div className="reasons-grid">
                {reasons.map((reason, i) => (
                    <div className="reason-card reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="reason-icon-wrapper">
                            <span className="reason-icon">{reason.icon}</span>
                        </div>
                        <h3 className="reason-title">{reason.title}</h3>
                        <p className="reason-desc">{reason.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
