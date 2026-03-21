import React from 'react';
import { useSelector } from 'react-redux';
import './Loader.css';
import loaderGif from '../../../assets/images/mango-loader.gif';

const Loader = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);

    if (!isLoading) return null;

    return (
        <div className="global-loader-overlay">
            <div className="global-loader-container">
                <img src={loaderGif} alt="Loading..." className="global-loader-gif" />
            </div>
        </div>
    );
};

export default Loader;
