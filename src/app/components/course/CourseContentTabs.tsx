"use client";

import { useState } from "react";

const CurriculumContent = () => (
  <div id="curriculum" className="py-6">
    <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
    <p className="text-secondary leading-relaxed">
      Здесь будет отображаться учебный план курса. Каждая секция и лекция будут
      представлены в виде интерактивного списка, который мы сможем
      &quot;оживить&quot; на следующих этапах.
    </p>
  </div>
);

const InstructorContent = () => (
  <div id="instructor" className="py-6">
    <h3 className="text-2xl font-bold mb-4">About the Instructor</h3>
    <p className="text-secondary leading-relaxed">
      Информация об инструкторе. Биография, рейтинг, количество студентов и
      другие курсы автора.
    </p>
  </div>
);

const ReviewContent = () => (
  <div id="review" className="py-6">
    <h3 className="text-2xl font-bold mb-4">Student Reviews</h3>
    <p className="text-secondary leading-relaxed">
      Список отзывов от студентов, прошедших этот курс, включая оценки, текст
      отзыва и информацию о студенте.
    </p>
  </div>
);

const CourseContentTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "instructor", label: "Instructor" },
    { id: "review", label: "Review" },
  ];

  return (
    <div>
      <div className="student-profile-menu border-b">
        <ul className="flex flex-wrap space-x-8">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`block py-3 border-b-2 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-orange text-primary"
                    : "border-transparent text-secondary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {activeTab === "overview" && (
          <div id="overview" className="overview-section py-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-secondary leading-relaxed">
                It gives you a huge self-satisfaction when you look at your work
                and say, &quot;I made this!&quot;. I love that feeling after
                I&apos;m done working on something. When I lean back in my
                chair, look at the final result with a smile, and have this
                little &quot;spark joy&quot; moment.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                What you will learn in this course
              </h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">&#10003;</span> You
                    will learn how to design beautiful websites using Figma...
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">&#10003;</span> You
                    will learn secret tips of Freelance Web Designers...
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">&#10003;</span> You
                    will learn how to take your designs and build them...
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">&#10003;</span> Learn
                    to use Python professionally...
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "curriculum" && <CurriculumContent />}
        {activeTab === "instructor" && <InstructorContent />}
        {activeTab === "review" && <ReviewContent />}
      </div>
    </div>
  );
};

export default CourseContentTabs;
