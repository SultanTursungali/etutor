"use client";

import CourseCard from "@/app/components/ui/CourseCard";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const courses = [
  {
    href: "/single-course",
    imgSrc: "/assets/images/course1.jpg",
    category: "Design",
    categoryColor: "bg-orange/10 text-orange",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
  {
    href: "/single-course",
    imgSrc: "/assets/images/course2.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "The Complete 2021 Web Development Bootcamp",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
  {
    href: "/single-course",
    imgSrc: "/assets/images/course3.jpg",
    category: "Business",
    categoryColor: "bg-blue-500/10 text-blue-500",
    title: "Learn Python Programming Masterclass",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
  {
    href: "/single-course",
    imgSrc: "/assets/images/course4.jpg",
    category: "Marketing",
    categoryColor: "bg-red-500/10 text-red-500",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
  {
    href: "/single-course",
    imgSrc: "/assets/images/course5.jpg",
    category: "IT & Software",
    categoryColor: "bg-indigo-500/10 text-indigo-500",
    title: "Reiki Level I, II and Master/Teacher Program",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
  {
    href: "/single-course",
    imgSrc: "/assets/images/course6.jpg",
    category: "Music",
    categoryColor: "bg-purple-500/10 text-purple-500",
    title: "Learn Ethical Hacking From Scratch",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="feature-course-section pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="section-title mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Courses</h2>
            <p className="text-secondary mt-2">Explore our popular courses</p>
          </div>
          <Link href="/courses" className="button div-orange-btn mt-4 sm:mt-0">
            View All
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCourses;
