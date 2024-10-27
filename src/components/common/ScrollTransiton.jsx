import React, { useEffect, useRef, useState } from 'react';

const ScrollTransition = ({ 
    children, 
    className = "",
    direction = "up",
    duration = "duration-500",
    delay = 0,
    distance = "5"
}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const getInitialTransform = () => {
        switch (direction) {
            case "up": return `translate-y-${distance}`;
            case "down": return `-translate-y-${distance}`;
            case "left": return `translate-x-${distance}`;
            case "right": return `-translate-x-${distance}`;
            default: return `translate-y-${distance}`;
        }
    };

    useEffect(() => {
        // Check if element is already in viewport on mount
        const checkInitialVisibility = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const isInViewport = rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                                   rect.bottom >= 0;
                if (isInViewport) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            }
        };

        // Create intersection observer for scroll detection
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '20px',
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
            checkInitialVisibility(); // Check initial visibility
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={elementRef}
            className={`
                transform 
                transition-all 
                ${duration}
                ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${getInitialTransform()}`}
                will-change-transform
                ${className}
            `}
            style={{ 
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollTransition;