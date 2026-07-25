import { useEffect, useState, useCallback } from 'react'
import slides from '../Data/slide'

const ImageSlide = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback((index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 700);
    }, [isAnimating]);

    const prev = useCallback(() => {
        goTo(current === 0 ? slides.length - 1 : current - 1);
    }, [current, goTo]);

    const next = useCallback(() => {
        goTo(current === slides.length - 1 ? 0 : current + 1);
    }, [current, goTo]);

    useEffect(() => {
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <div className=" top-15 w-full flex justify-center mt-6 px-4">
            <div
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
                style={{ height: '420px' }}
            >
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                        style={{ opacity: current === index ? 1 : 0, zIndex: current === index ? 1 : 0 }}
                    >
                        {/* Image with Ken Burns zoom on active */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                            style={{
                                transform: current === index ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 5s ease-in-out',
                            }}
                        />

                        {/* Gradient overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)',
                            }}
                        />

                        {/* Text content */}
                        <div
                            className="absolute inset-0 flex flex-col justify-center px-10"
                            style={{ zIndex: 2 }}
                        >
                            <div
                                className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3"
                                style={{
                                    background: 'rgba(255,255,255,0.18)',
                                    backdropFilter: 'blur(6px)',
                                    color: '#fff',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    opacity: current === index ? 1 : 0,
                                    transform: current === index ? 'translateY(0)' : 'translateY(12px)',
                                    transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                                }}
                            >
                                {slide.badge}
                            </div>
                            <h2
                                className="text-white font-extrabold leading-tight mb-2"
                                style={{
                                    fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                                    textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                                    opacity: current === index ? 1 : 0,
                                    transform: current === index ? 'translateY(0)' : 'translateY(16px)',
                                    transition: 'opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s',
                                }}
                            >
                                {slide.title}
                            </h2>
                            <p
                                className="text-gray-200 font-medium max-w-xs"
                                style={{
                                    fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                                    textShadow: '0 1px 6px rgba(0,0,0,0.4)',
                                    opacity: current === index ? 1 : 0,
                                    transform: current === index ? 'translateY(0)' : 'translateY(16px)',
                                    transition: 'opacity 0.6s ease 0.48s, transform 0.6s ease 0.48s',
                                }}
                            >
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Prev Arrow */}
                <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200"
                    style={{
                        zIndex: 10,
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Next Arrow */}
                <button
                    onClick={next}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200"
                    style={{
                        zIndex: 10,
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>

                {/* Dot indicators — pill style */}
                <div
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 items-center"
                    style={{ zIndex: 10 }}
                >
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className="rounded-full transition-all duration-400"
                            style={{
                                height: '6px',
                                width: current === index ? '28px' : '6px',
                                background: current === index ? '#fff' : 'rgba(255,255,255,0.45)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'width 0.4s ease, background 0.4s ease',
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlide;