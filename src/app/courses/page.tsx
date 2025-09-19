"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation"; // Импортируем хук для чтения URL
import CourseCard from "@/app/components/ui/CourseCard";
import FiltersSidebar from "@/app/components/courses/FiltersSidebar";
import CourseGridHeader from "@/app/components/courses/CourseGridHeader";
import Pagination from "@/app/components/ui/Pagination";

// Исходные данные по курсам, как вы и просили, остаются без изменений
const allCourses = [
  {
    id: 1,
    href: "/single-course",
    imgSrc: "/assets/images/course1.jpg",
    category: "Design",
    categoryColor: "bg-orange/10 text-orange",
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    oldPrice: "72.00",
    level: "Beginner",
    instructor: "Dianne Russell",
  },
  {
    id: 2,
    href: "/single-course",
    imgSrc: "/assets/images/course2.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "The Complete 2021 Web Development Bootcamp",
    rating: 4.8,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    level: "All Levels",
    instructor: "Eleanor Pena",
  },
  {
    id: 3,
    href: "/single-course",
    imgSrc: "/assets/images/course3.jpg",
    category: "Business",
    categoryColor: "bg-blue-500/10 text-blue-500",
    title: "Learn Python Programming Masterclass",
    rating: 4.5,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "0.00",
    level: "Intermediate",
    instructor: "Theresa Webb",
  },
  {
    id: 4,
    href: "/single-course",
    imgSrc: "/assets/images/course4.jpg",
    category: "Marketing",
    categoryColor: "bg-red-500/10 text-red-500",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    rating: 4.2,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    level: "Expert",
    instructor: "Cody Fisher",
  },
  {
    id: 5,
    href: "/single-course",
    imgSrc: "/assets/images/course5.jpg",
    category: "IT & Software",
    categoryColor: "bg-indigo-500/10 text-indigo-500",
    title: "Reiki Level I, II and Master/Teacher Program",
    rating: 3.8,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    oldPrice: "72.00",
    level: "Beginner",
    instructor: "Bessie Cooper",
  },
  {
    id: 6,
    href: "/single-course",
    imgSrc: "/assets/images/course6.jpg",
    category: "Music",
    categoryColor: "bg-purple-500/10 text-purple-500",
    title: "Learn Ethical Hacking From Scratch",
    rating: 2.5,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    level: "All Levels",
    instructor: "Guy Hawkins",
  },
  {
    id: 7,
    href: "/single-course",
    imgSrc: "/assets/images/course7.jpg",
    category: "Design",
    categoryColor: "bg-orange/10 text-orange",
    title: "The Complete Financial Analyst Course 2021",
    rating: 1.8,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "0.00",
    oldPrice: "72.00",
    level: "Intermediate",
    instructor: "Dianne Russell",
  },
  {
    id: 8,
    href: "/single-course",
    imgSrc: "/assets/images/course8.jpg",
    category: "Developments",
    categoryColor: "bg-green-500/10 text-green-500",
    title: "Data Structures & Algorithms Essentials",
    rating: 5.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    level: "Expert",
    instructor: "Eleanor Pena",
  },
  {
    id: 9,
    href: "/single-course",
    imgSrc: "/assets/images/course9.jpg",
    category: "Business",
    categoryColor: "bg-blue-500/10 text-blue-500",
    title: "Copywriting - Become a Freelance Copywriter",
    rating: 4.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    level: "Beginner",
    instructor: "Theresa Webb",
  },
  {
    id: 10,
    href: "/single-course",
    imgSrc: "/assets/images/course10.jpg",
    category: "Marketing",
    categoryColor: "bg-red-500/10 text-red-500",
    title: "2021 Social Media Marketing Guide",
    rating: 3.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    oldPrice: "72.00",
    level: "All Levels",
    instructor: "Cody Fisher",
  },
  {
    id: 11,
    href: "/single-course",
    imgSrc: "/assets/images/course11.jpg",
    category: "IT & Software",
    categoryColor: "bg-indigo-500/10 text-indigo-500",
    title: "The Python Mega Course: Build 10 Real World Apps",
    rating: 2.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    level: "Intermediate",
    instructor: "Bessie Cooper",
  },
  {
    id: 12,
    href: "/single-course",
    imgSrc: "/assets/images/course12.jpg",
    category: "Music",
    categoryColor: "bg-purple-500/10 text-purple-500",
    title: "An Entire MBA in 1 Course:Award Winning Business School Prof",
    rating: 1.0,
    reviewCount: "451,444",
    studentCount: "265.7K",
    price: "57.00",
    level: "Expert",
    instructor: "Guy Hawkins",
  },
];

export default function CourseListPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  // 1. Состояния для каждого фильтра (без изменений)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("All");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  // 2. Функции-обработчики для обновления состояния (без изменений)
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const handleRatingChange = (rating: number) => {
    setSelectedRating((prev) => (prev === rating ? null : rating));
  };
  const handleInstructorChange = (instructor: string) => {
    setSelectedInstructors((prev) =>
      prev.includes(instructor)
        ? prev.filter((i) => i !== instructor)
        : [...prev, instructor]
    );
  };
  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
  };
  const handleLevelChange = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  // 3. ОБНОВЛЕННАЯ логика фильтрации и поиска
  const filteredCourses = useMemo(() => {
    let coursesToFilter = allCourses;

    // --- ЭТАП 1: Глобальный поиск из хедера ---
    // Сначала фильтруем по поисковому запросу из URL, если он есть
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      coursesToFilter = allCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(lowercasedQuery) ||
          course.category.toLowerCase().includes(lowercasedQuery) ||
          course.instructor.toLowerCase().includes(lowercasedQuery)
      );
    }

    // --- ЭТАП 2: Фильтры из сайдбара ---
    // Теперь применяем фильтры из сайдбара к результатам поиска (или ко всем курсам, если поиска не было)
    return coursesToFilter.filter((course) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(course.category)
      ) {
        return false;
      }
      if (selectedRating !== null && course.rating < selectedRating) {
        return false;
      }
      if (
        selectedInstructors.length > 0 &&
        !selectedInstructors.includes(course.instructor)
      ) {
        return false;
      }
      if (selectedPrice === "Free" && parseFloat(course.price) !== 0) {
        return false;
      }
      if (selectedPrice === "Paid" && parseFloat(course.price) === 0) {
        return false;
      }
      if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
        return false;
      }
      return true;
    });
  }, [
    searchQuery, // Добавляем зависимость от поискового запроса
    selectedCategories,
    selectedRating,
    selectedInstructors,
    selectedPrice,
    selectedLevels,
  ]);

  return (
    <div className="course-list-section section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <FiltersSidebar
              selectedCategories={selectedCategories}
              selectedRating={selectedRating}
              selectedInstructors={selectedInstructors}
              selectedPrice={selectedPrice}
              selectedLevels={selectedLevels}
              onCategoryChange={handleCategoryChange}
              onRatingChange={handleRatingChange}
              onInstructorChange={handleInstructorChange}
              onPriceChange={handlePriceChange}
              onLevelChange={handleLevelChange}
            />
          </div>
          <div className="lg:col-span-9">
            <CourseGridHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <CourseCard key={course.id || index} {...course} />
                ))
              ) : (
                <p className="col-span-full text-center text-secondary">
                  No courses found matching your criteria.
                </p>
              )}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
