import React from 'react';
import MasonryGallery from '../components/widgets/MasonryGallery';
import { Container } from 'react-bootstrap';

const GalleryView = () => {
    return (
        <main className="gallery-page">
            {/* The Masonry widget inherently includes a wrapper container */}
            <MasonryGallery />
        </main>
    );
};

export default GalleryView;
