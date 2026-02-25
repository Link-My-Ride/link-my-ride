import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    const phoneNumber = '+8801622864377';
    // Remove spaces and non-numeric characters (except +) for the wa.me link
    const cleanNumber = phoneNumber.replace(/[^\w\s+]/gi, '').replace(/\s+/g, '');
    const defaultMessage = 'Hello! I would like to know more about your products.';

    return (
        <a
            href={`https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`}
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <div className="wa-icon-container">
                <svg viewBox="0 0 32 32" className="wa-icon" fill="currentColor">
                    <path d="M16.035 2.06c-7.794 0-14.113 6.319-14.113 14.113 0 2.484.646 4.912 1.874 7.051l-2.004 7.323 7.489-1.963c2.068 1.127 4.415 1.722 6.754 1.722h.005c7.792 0 14.111-6.318 14.111-14.111.002-3.776-1.468-7.327-4.137-9.996-2.671-2.668-6.223-4.139-9.979-4.139zm0 23.834c-2.106 0-4.17-.565-5.975-1.636l-.428-.254-4.441 1.164 1.185-4.329-.279-.444c-1.176-1.872-1.796-4.041-1.796-6.257 0-6.491 5.281-11.77 11.777-11.77 3.146 0 6.101 1.226 8.324 3.451 2.223 2.224 3.447 5.18 3.447 8.325-.001 6.49-5.282 11.75-11.814 11.75zm6.463-8.823c-.354-.177-2.094-1.034-2.418-1.152-.324-.118-.561-.177-.798.177-.236.354-.915 1.152-1.121 1.388-.207.236-.413.266-.768.089-2.003-.997-3.473-2.128-4.593-3.69-.328-.458.337-.417 1.026-1.785.118-.236.059-.442-.03-.619-.089-.177-.798-1.919-1.092-2.627-.288-.694-.582-.6-.798-.611-.205-.011-.442-.014-.679-.014-.236 0-.62.089-.944.442C9.44 9.074 8.5 9.959 8.5 11.789c0 1.83 1.062 3.599 1.21 3.796.148.197 2.585 3.945 6.262 5.532 2.529 1.092 3.479 1.17 4.743.987.97-.14 2.094-.856 2.389-1.683.295-.826.295-1.534.207-1.683-.089-.147-.325-.235-.679-.413z" />
                </svg>
            </div>
            <span className="wa-tooltip">Chat with us</span>
        </a>
    );
};

export default FloatingWhatsApp;
