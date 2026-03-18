import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { supabase } from '../../lib/supabase';
import './AdminDashboard.css';

const AdminOrders = () => {
    const { orders, fetchOrders, loading } = useShop();

    useEffect(() => {
        fetchOrders();
    }, []);

    const updateOrderStatus = async (id, status) => {
        const { error } = await supabase.from('orders').update({ status }).eq('id', id);
        if (error) {
            console.error('Error updating order:', error);
            alert('Failed to update status');
        } else {
            fetchOrders();
        }
    };

    if (loading) return <div className="admin-loading">Intercepting Orders...</div>;

    return (
        <div className="admin-orders animate-fade-in">
            <h1 className="admin-page-title">ORDER <span style={{ color: 'var(--admin-accent)' }}>OPERATIONS</span></h1>

            <div className="admin-card">
                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Client Details</th>
                                <th>Items</th>
                                <th>Total Yield</th>
                                <th>Nexus Status</th>
                                <th>Control</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td>
                                        <div style={{ fontSize: '0.85rem' }}>{new Date(order.created_at).toLocaleDateString()}</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--admin-text-muted)' }}>{new Date(order.created_at).toLocaleTimeString()}</div>
                                    </td>
                                    <td>
                                        <div style={{ fontWeight: 600 }}>{order.customer_name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)' }}>{order.customer_phone}</div>
                                    </td>
                                    <td>
                                        <div style={{ maxWidth: '200px' }}>
                                            {Array.isArray(order.items) ? (
                                                order.items.map((item, idx) => (
                                                    <div key={idx} style={{ fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                        • {item.name} <span style={{ color: 'var(--admin-accent)' }}>x{item.quantity}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <span style={{ fontSize: '0.7rem', color: 'var(--admin-danger)' }}>Error in Data</span>
                                            )}
                                        </div>
                                    </td>
                                    <td style={{ fontWeight: 700, color: 'var(--admin-accent)' }}>৳{Number(order.total_amount).toLocaleString()}</td>
                                    <td>
                                        <span className={`status-badge status-${order.status}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <select 
                                            value={order.status} 
                                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                            className="admin-input"
                                            style={{ padding: '4px 8px', fontSize: '0.75rem', width: 'auto' }}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="completed">Completed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                            {orders.length === 0 && (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--admin-text-muted)' }}>
                                        No active orders detected in the system.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;
