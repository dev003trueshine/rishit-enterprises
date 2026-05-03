import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FsLightbox from "fslightbox-react";

// ── NEW images (29–33) ──────────────────────────────────────────────────────
import img29 from '../../assets/images/gallery/29.webp';
import img30 from '../../assets/images/gallery/30.webp';
import img31 from '../../assets/images/gallery/31.webp';
import img32 from '../../assets/images/gallery/32.webp';
import img33 from '../../assets/images/gallery/33.webp';
import img34 from '../../assets/images/gallery/34.webp';

// ── Videos ──────────────────────────────────────────────────────────────────
import reel1 from '../../assets/images/gallery/reel1.mp4';
import reel2 from '../../assets/images/gallery/reel2.mp4';

// ── OLD images (1–28) ───────────────────────────────────────────────────────
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

// ── Gallery items — NEW first (33→29 + videos), OLD last (28→1) ─────────────
// Each item: { src, type }  type = 'image' | 'video'
const galleryItems = [
    // Videos — show first
    { src: reel1, type: 'video' },
    { src: reel2, type: 'video' },
    // New images (33→29)
    { src: img34, type: 'image' },
    { src: img33, type: 'image' },
    { src: img32, type: 'image' },
    { src: img31, type: 'image' },
    { src: img30, type: 'image' },
    { src: img29, type: 'image' },
    // Old images — newest-old (28) first
    { src: img28, type: 'image' },
    { src: img27, type: 'image' },
    { src: img26, type: 'image' },
    { src: img25, type: 'image' },
    { src: img24, type: 'image' },
    { src: img23, type: 'image' },
    { src: img22, type: 'image' },
    { src: img21, type: 'image' },
    { src: img20, type: 'image' },
    { src: img19, type: 'image' },
    { src: img18, type: 'image' },
    { src: img17, type: 'image' },
    { src: img16, type: 'image' },
    { src: img15, type: 'image' },
    { src: img14, type: 'image' },
    { src: img13, type: 'image' },
    { src: img12, type: 'image' },
    { src: img11, type: 'image' },
    { src: img10, type: 'image' },
    { src: img9, type: 'image' },
    { src: img8, type: 'image' },
    { src: img7, type: 'image' },
    { src: img6, type: 'image' },
    { src: img5, type: 'image' },
    { src: img4, type: 'image' },
    { src: img3, type: 'image' },
    { src: img2, type: 'image' },
    { src: img1, type: 'image' },
];

// Flat arrays needed by FsLightbox
const lightboxSources = galleryItems.map(item => item.src);
const lightboxTypes = galleryItems.map(item => item.type);

const MasonryGallery = () => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    const openLightboxOnSlide = (index) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1,
        });
    };

    return (
        <div className="container py-24">
            <div className="text-center mb-12">
                <h2 className="fw-bold text-5xl mb-4">Our Work Gallery</h2>
                <p className="text-lg max-w-2xl mx-auto text-muted">
                    Explore some of our beautiful outcomes! Click any image or video to view it in full screen.
                </p>
            </div>

            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="20px">
                    {galleryItems.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                cursor: 'pointer',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                position: 'relative',
                            }}
                            onClick={() => openLightboxOnSlide(i)}
                        >
                            {item.type === 'video' ? (
                                <>
                                    <video
                                        src={item.src}
                                        style={{
                                            width: '100%',
                                            display: 'block',
                                            transition: 'transform 0.3s ease',
                                        }}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    {/* Play-icon overlay so users know it's a video */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        background: 'rgba(0,0,0,0.45)',
                                        borderRadius: '50%',
                                        width: 52,
                                        height: 52,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pointerEvents: 'none',
                                    }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </>
                            ) : (
                                <img
                                    src={item.src}
                                    style={{
                                        width: '100%',
                                        display: 'block',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    alt={`Gallery Item ${i + 1}`}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            )}
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={lightboxSources}
                types={lightboxTypes}
                slide={lightboxController.slide}
            />
        </div>
    );
};

export default MasonryGallery;
