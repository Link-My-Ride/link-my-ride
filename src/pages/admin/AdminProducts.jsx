import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { supabase } from '../../lib/supabase';
import './AdminDashboard.css';

const AdminProducts = () => {
    const { products, refreshProducts, loading } = useShop();
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    const handleEdit = (product) => {
        setCurrentProduct(product);
        setIsEditing(true);
    };

    const handleCreate = () => {
        setCurrentProduct({
            name: '',
            price: 0,
            image: '',
            category: 'accessories',
            description: '',
            is_active: true,
            badge: '',
            specs: [],
            features: []
        });
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if(window.confirm('Are you sure you want to delete this product?')) {
            const { error } = await supabase.from('products').delete().eq('id', id);
            if(error) alert('Failed to delete');
            else refreshProducts();
        }
    };

    const toggleActive = async (id, currentStatus) => {
        const { error } = await supabase.from('products').update({ is_active: !currentStatus }).eq('id', id);
        if(error) alert('Failed to update status');
        else refreshProducts();
    };

    const handleSave = async (e) => {
        e.preventDefault();
        
        let specsToSave = currentProduct.specs;
        let featuresToSave = currentProduct.features;
        
        if (typeof specsToSave === 'string') {
            try { specsToSave = specsToSave.split(',').map(s => s.trim()); } catch(e) { specsToSave = []; }
        }
        
        const payload = {
            name: currentProduct.name,
            price: currentProduct.price,
            old_price: currentProduct.old_price,
            image: currentProduct.image,
            category: currentProduct.category,
            description: currentProduct.description,
            is_active: currentProduct.is_active,
            badge: currentProduct.badge,
            specs: specsToSave,
            features: featuresToSave
        };

        if (currentProduct.id) {
            const { error } = await supabase.from('products').update(payload).eq('id', currentProduct.id);
            if(error) alert('Failed to update');
        } else {
            const { error } = await supabase.from('products').insert([payload]);
            if(error) alert('Failed to create');
        }
        
        setIsEditing(false);
        refreshProducts();
    };

    if (loading) return <div className="admin-loading">Configuring Product Stream...</div>;

    if (isEditing) {
        return (
            <div className="admin-card animate-fade-in" style={{ maxWidth: '800px' }}>
                <h2 style={{ marginBottom: '30px' }}>{currentProduct.id ? 'UPDATE SYSTEM ENTITY' : 'INITIALIZE NEW PRODUCT'}</h2>
                <form onSubmit={handleSave} className="admin-form">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                            <label className="metric-label">Product Name</label>
                            <input type="text" className="admin-input" value={currentProduct.name || ''} onChange={e => setCurrentProduct({...currentProduct, name: e.target.value})} required />
                        </div>
                        <div>
                            <label className="metric-label">Category</label>
                            <select className="admin-input" value={currentProduct.category || ''} onChange={e => setCurrentProduct({...currentProduct, category: e.target.value})}>
                                <option value="communicators">Communicators</option>
                                <option value="dashcams">Dashcams</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                            <label className="metric-label">Market Price (TK)</label>
                            <input type="number" className="admin-input" value={currentProduct.price || 0} onChange={e => setCurrentProduct({...currentProduct, price: Number(e.target.value)})} required />
                        </div>
                        <div>
                            <label className="metric-label">Asset Path (Image)</label>
                            <input type="text" className="admin-input" value={currentProduct.image || ''} onChange={e => setCurrentProduct({...currentProduct, image: e.target.value})} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label className="metric-label">Entity Descriptions</label>
                        <textarea className="admin-input" rows="4" value={currentProduct.description || ''} onChange={e => setCurrentProduct({...currentProduct, description: e.target.value})}></textarea>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                        <div>
                            <label className="metric-label">Identity Badge</label>
                            <input type="text" className="admin-input" value={currentProduct.badge || ''} onChange={e => setCurrentProduct({...currentProduct, badge: e.target.value})} placeholder="e.g. NEW" />
                        </div>
                        <div>
                            <label className="metric-label">Status</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                <input type="checkbox" checked={currentProduct.is_active} onChange={e => setCurrentProduct({...currentProduct, is_active: e.target.checked})} />
                                <span style={{ fontSize: '0.9rem' }}>Active in System</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button type="submit" className="admin-btn admin-btn-primary">SAVE CHANGES</button>
                        <button type="button" className="admin-btn admin-btn-outline" onClick={() => setIsEditing(false)}>CANCEL</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-products animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h1 className="admin-page-title">PRODUCT <span style={{ color: 'var(--admin-accent)' }}>INVENTORY</span></h1>
                <button onClick={handleCreate} className="admin-btn admin-btn-primary">+ NEW ASSET</button>
            </div>

            <div className="admin-card">
                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Preview</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stream Status</th>
                                <th>Admin Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} style={{ opacity: product.is_active ? 1 : 0.4 }}>
                                    <td>
                                        <img src={product.image} alt={product.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--admin-border)' }} />
                                    </td>
                                    <td style={{ fontWeight: 600 }}>{product.name}</td>
                                    <td>
                                        <span className="status-badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--admin-text-muted)' }}>
                                            {product.category}
                                        </span>
                                    </td>
                                    <td style={{ color: 'var(--admin-accent)', fontWeight: 700 }}>৳{Number(product.price).toLocaleString()}</td>
                                    <td>
                                        <button 
                                            onClick={() => toggleActive(product.id, product.is_active)}
                                            className={`status-badge ${product.is_active ? 'status-completed' : 'status-cancelled'}`}
                                            style={{ cursor: 'pointer', border: 'none' }}
                                        >
                                            {product.is_active ? 'ONLINE' : 'OFFLINE'}
                                        </button>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button onClick={() => handleEdit(product)} className="admin-btn admin-btn-outline" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>EDIT</button>
                                            <button onClick={() => handleDelete(product.id)} className="admin-btn admin-btn-outline" style={{ padding: '6px 12px', fontSize: '0.75rem', color: 'var(--admin-danger)' }}>ERASE</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;
