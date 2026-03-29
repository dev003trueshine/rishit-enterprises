import React, { useState, useEffect } from 'react';
import Icon from '../../ui/AppIcon';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`top position-fixed d-flex justify-content-center align-items-center text-white border-0 ${isVisible ? '' : 'd-none'}`} aria-label="Back to top"
        >
            <Icon name="ArrowUpIcon" size={24} className="text-white" />
        </button>
    );
};

export default BackToTop;
