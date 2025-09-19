// OneDrive\Рабочий стол\etutordiplom\src\app\about\page.tsx

import AboutHero from "@/app/components/about/AboutHero";
import AboutStory from "@/app/components/about/AboutStory";
import AchievementSection from "@/app/components/home/AchievementSection";
import InstructorSection from "@/app/components/home/InstructorSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AchievementSection />
      <InstructorSection />
    </>
  );
}
