import React from 'react';
import './FeaturesBar.css';

const FeaturesBar = () => {
    const features = [
        { icon: '🚚', title: 'Free Shipping', desc: 'On all orders over ৳2000' },
        { icon: '🛡️', title: '2-Year Warranty', desc: 'Premium quality guaranteed' },
        { icon: '🎧', title: 'Expert Support', desc: 'Assistants ready 24/7' },
        { icon: '🔒', title: 'Secure Checkout', desc: '100% encrypted payment' }
    ];

    return (
        <div className="features-bar">
            <div className="container features-container">
                {features.map((f, i) => (
                    <div className="feature-item animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }} key={i}>
                        <div className="feature-icon">{f.icon}</div>
                        <div className="feature-text">
                            <h4>{f.title}</h4>
                            <p>{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesBar;
