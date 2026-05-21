"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
    const slides = [
        {
            id: 1,
            tag: "Primary Care",
            title: "Your Family's Health is Our Priority",
            description:
                "Connect with top-rated general practitioners for routine checkups, wellness advice, and preventative care.",
            rating: "4.9 (12k+ reviews)",
            image:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
            features: ["Same-day appointments", "Virtual or In-person"],
        },
        {
            id: 2,
            tag: "Cardiology Specialist",
            title: "Advanced Care for a Healthier Heart",
            description:
                "Book immediate consultations with leading cardiologists equipped with state-of-the-art diagnostic tools.",
            rating: "5.0 (4.8k+ reviews)",
            image:
                "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop",
            features: ["Expert heart screenings", "Comprehensive reports"],
        },
        {
            id: 3,
            tag: "Pediatrics & Child Care",
            title: "Gentle Medical Care for Little Ones",
            description:
                "Dedicated pediatricians offering a warm, welcoming environment for your children’s medical milestones.",
            rating: "4.9 (8.5k+ reviews)",
            image:
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop",
            features: ["Kid-friendly clinics", "24/7 emergency chat"],
        },
    ];

    return (
        <div className="w-full h-[90vh]">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass:
                        "inline-block w-2 h-2 rounded-full bg-white/50 mx-1 cursor-pointer transition-all duration-300",
                    bulletActiveClass: "!bg-white !w-6",
                }}
                className="w-full h-screen"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full h-screen bg-cover bg-center text-white flex flex-col p-6 sm:p-10 md:p-16"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60" />

                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                                    {slide.tag}
                                </span>

                                <div className="flex items-center gap-1 backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold">
                                    <Star className="h-4 w-4 fill-white" />
                                    {slide.rating}
                                </div>
                            </div>

                            <div className="relative z-10 flex-1 flex items-center justify-start">
                                <div className="max-w-3xl text-left space-y-5">
                                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="text-sm sm:text-lg text-slate-200 max-w-2xl">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {slide.features.map((feat, idx) => (
                                            <span
                                                key={idx}
                                                className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium"
                                            >
                                                ✓ {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;