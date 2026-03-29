import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";

// Explicit imports — avoids require.context returning duplicate keys
import img1 from '../../assets/images/gallery/1.webp';
import img2 from '../../assets/images/gallery/2.webp';
import img3 from '../../assets/images/gallery/3.webp';
import img4 from '../../assets/images/gallery/4.webp';
import img5 from '../../assets/images/gallery/5.webp';
import img6 from '../../assets/images/gallery/6.webp';
import img7 from '../../assets/images/gallery/7.webp';
import img8 from '../../assets/images/gallery/8.webp';
import img9 from '../../assets/images/gallery/9.webp';
import img10 from '../../assets/images/gallery/10.webp';
import img11 from '../../assets/images/gallery/11.webp';
import img12 from '../../assets/images/gallery/12.webp';
import img13 from '../../assets/images/gallery/13.webp';
import img14 from '../../assets/images/gallery/14.webp';
import img15 from '../../assets/images/gallery/15.webp';
import img16 from '../../assets/images/gallery/16.webp';
import img17 from '../../assets/images/gallery/17.webp';
import img18 from '../../assets/images/gallery/18.webp';
import img19 from '../../assets/images/gallery/19.webp';
import img20 from '../../assets/images/gallery/20.webp';
import img21 from '../../assets/images/gallery/21.webp';
import img22 from '../../assets/images/gallery/22.webp';
import img23 from '../../assets/images/gallery/23.webp';
import img24 from '../../assets/images/gallery/24.webp';
import img25 from '../../assets/images/gallery/25.webp';
import img26 from '../../assets/images/gallery/26.webp';
import img27 from '../../assets/images/gallery/27.webp';
import img28 from '../../assets/images/gallery/28.webp';
const dummyImages = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14,
    img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28
];

const MasonryGallery = () => {
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