import { useEffect, useState } from 'react'
import slides from '../Data/slide'
const ImageSlide = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className="w-full flex justify-center mt-5">
                <div className="relative w-[85%] h-[500px] md:h-[550px] overflow-hidden rounded-xl mt-10">
                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out h-full"
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide.image}
                                alt=""
                                className="w-full h-full object-cover shrink-0"
                            />
                        ))}
                    </div>
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer ${current === index
                                    ? "bg-white"
                                    : "bg-gray-400"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlide