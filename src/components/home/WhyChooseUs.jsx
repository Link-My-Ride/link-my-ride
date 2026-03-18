import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '⚡',
            title: 'Fast Setup',
            desc: 'Get connected and hit the road in minutes with our intuitive rider-first installation process.'
        },
        {
            icon: '🔊',
            title: 'Crystal Clear Audio',
            desc: 'Advanced noise-canceling technology guarantees you hear every word, even at highway speeds.'
        },
        {
            icon: '📡',
            title: 'Long Range Connectivity',
            desc: 'Stay linked with your group up to 2km away using our ultra-stable network.'
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
