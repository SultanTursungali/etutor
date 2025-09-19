"use client";

import TestimonialCard from "@/app/components/ui/TestimonialCard";

// 1. Импортируем компоненты Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// 2. Импортируем стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    imgSrc: "/assets/images/team-member-1.jpg",
    name: "Dianne Russell",
    title: "Web Designer",
    text: "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },

  {
    imgSrc: "/assets/images/team-member-2.jpg",
    name: "Esther Howard",
    title: "Programmer",
    text: "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },
  {
    imgSrc: "/assets/images/team-member-3.jpg",
    name: "Cody Fisher",
    title: "UI/UX Designer",
    text: "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },
  {
    imgSrc: "/assets/images/team-member-0.jpg",
    name: "Jane Doe",
    title: "Product Manager",
    text: "Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section bg-light-gray py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="section-title mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Students Say
          </h2>
          <p className="text-secondary mt-2\">Explore our popular courses</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
