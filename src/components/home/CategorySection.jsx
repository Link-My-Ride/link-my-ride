import React from 'react';
import './CategorySection.css';
import { categoriesContent } from '../../data/siteContent';

const CategorySection = () => {
    return (
        <section className="container section-padding">
            <div className="section-header">
                <h2 className="section-title">SHOP BY <span className="text-accent">CATEGORY</span></h2>
                <a href="#catalog" className="view-all-link">VIEW ALL PRODUCTS</a>
            </div>

            <div className="category-grid">
                {categoriesContent.map((cat, i) => (
                    <div className="category-card reveal" key={i} onClick={() => window.location.hash = `#catalog?category=${cat.id}`} style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="category-img-wrapper">
                            <img src={cat.image} alt={cat.title} className="category-img" />
                        </div>
                        <div className="category-overlay"></div>
                        <div className="category-content">
                            <span className="category-subtitle">{cat.subtitle}</span>
                            <h3 className="category-title">{cat.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
