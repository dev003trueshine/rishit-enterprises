import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";
// Dynamically import all images from the gallery folder
const req = require.context('../../assets/images/gallery', false, /\.(png|jpe?g)$/i);
const dummyImages = req.keys().map(key => req(key).default || req(key));
const MasonryGallery = () => {
    // Lightbox state
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    const openLightboxOnSlide = (index) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1
        });
    };
    return (
        <div className="container py-24">
            <div className="text-center mb-12">
                <h2 className="fw-bold text-5xl mb-4">Our Work Gallery</h2>
                <p className="text-lg max-w-2xl mx-auto text-muted">
                    Explore some of our beautiful outcomes! Click any image to view it in full screen.
                </p>
            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="20px">
                    {dummyImages.map((image, i) => (
                        <div
                            key={i}
                            style={{
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                            onClick={() => openLightboxOnSlide(i)}
                        >
                            <img
                                src={image}
                                style={{
                                    width: "100%",
                                    display: "block",
                                    transition: "transform 0.3s ease",
                                }}
                                alt={`Gallery Item ${i + 1}`}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={dummyImages}
                slide={lightboxController.slide}
            />
        </div>
    );
};
export default MasonryGallery;