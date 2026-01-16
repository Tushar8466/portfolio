import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 text-center text-white/40 text-sm">
                <p>© {new Date().getFullYear()} Portfolio. Built with Spline & React.</p>
            </div>
        </footer>
    );
};

export default Footer;
