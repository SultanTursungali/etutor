import HeroSection from "@/app/components/home/HeroSection";
import BrandSection from "@/app/components/home/BrandSection";
import CategoriesSection from "@/app/components/home/CategoriesSection";
import FeaturedCourses from "@/app/components/home/FeaturedCourses";
import AchievementSection from "@/app/components/home/AchievementSection";
import InstructorSection from "@/app/components/home/InstructorSection";
import TestimonialSection from "@/app/components/home/TestimonialSection";
import BlogSection from "@/app/components/home/BlogSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <CategoriesSection />
      <FeaturedCourses />
      <AchievementSection />
      <InstructorSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
