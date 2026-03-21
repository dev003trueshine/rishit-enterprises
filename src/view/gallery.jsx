import React from 'react';
import MasonryGallery from '../components/widgets/MasonryGallery';

const GalleryView = () => {
    return (
        <main className="gallery-page">
            {/* The Masonry widget inherently includes a wrapper container */}
            <MasonryGallery />
        </main>
    );
};

export default GalleryView;
