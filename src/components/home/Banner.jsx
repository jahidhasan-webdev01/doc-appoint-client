"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "@heroui/react";
import Link from "next/link";

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
        <div className="w-full h-[80vh]">
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
                className="w-full h-[80vh]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full h-[80vh] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />

                            <div className="absolute inset-0 z-10 flex items-center justify-start">
                                <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-left">

                                    <div className="max-w-3xl space-y-5">
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                                            {slide.title}
                                        </h1>

                                        <p className="text-sm sm:text-lg text-slate-200 max-w-2xl">
                                            {slide.description}
                                        </p>

                                        <div>
                                            {slide.features.map((feat, index) => (
                                                <p
                                                    key={index}
                                                    className="backdrop-blur-md bg-transparent px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-white"
                                                >
                                                    ✓ {feat}
                                                </p>
                                            ))}
                                        </div>

                                        <div className="flex flex-row flex-wrap gap-2">
                                            <Link href="/appointments">
                                                <Button size="sm" >Book an appoinment</Button>
                                            </Link>
                                            <Link href="/register">
                                                <Button size="sm" variant="secondary">Join Now</Button>
                                            </Link>
                                        </div>
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