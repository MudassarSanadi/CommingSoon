import React, { useState, useEffect, useCallback, useRef } from "react";
import one from "../assets/sliderImages/one.png";
import two from "../assets/sliderImages/two.png";
import three from "../assets/sliderImages/three.png";
import four from "../assets/sliderImages/four.png";
import five from "../assets/sliderImages/five.png";
import six from "../assets/sliderImages/six.png";

interface Slide {
  id: number;
  imageUrl: string;
}

const slides: Slide[] = [
  { id: 1, imageUrl: one },
  { id: 2, imageUrl: two },
  { id: 3, imageUrl: three },
  { id: 4, imageUrl: four },
  { id: 5, imageUrl: five },
  { id: 6, imageUrl: six },
];

const AUTOPLAY_MS = 3200;
const TRANSITION_MS = 550;
const SWIPE_THRESHOLD = 50; 

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (touchStartX.current === null) nextSlide();
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [nextSlide]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      prevSlide();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      nextSlide();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div
   
      className="relative w-full aspect-1672/941 overflow-hidden bg-slate-900 touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
   
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex w-full h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative shrink-0 w-full h-full overflow-hidden"
            >
             
              <img
                src={slide.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
                loading={slide.id === 1 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 active:bg-black/60 backdrop-blur-sm text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 active:bg-black/60 backdrop-blur-sm text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 border border-white/20 ${
              index === currentIndex
                ? "w-5 sm:w-6 bg-white"
                : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      
      <div className="absolute bottom-4 sm:bottom-6 right-3 sm:right-6 z-20 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs text-white/60 bg-black/30 backdrop-blur-sm rounded-full border border-white/10">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HeroSlider;