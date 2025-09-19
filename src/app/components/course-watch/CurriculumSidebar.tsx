"use client";

import { useState } from "react";
import { PlayCircle, CheckCircle, ChevronDown } from "lucide-react";

const curriculumData = [
  {
    title: "Section 1: Introduction",
    lectures: [
      {
        title: "Why Take This Course",
        duration: "04:20",
        isCompleted: true,
        isActive: true,
      },
      { title: "Download Syllabus", duration: "00:00", isCompleted: true },
    ],
  },
  {
    title: "Section 2: Python Setup",
    lectures: [
      { title: "Install Python on Mac", duration: "12:50" },
      { title: "Install Python on Windows", duration: "08:15" },
      { title: "Running Python Code", duration: "05:30" },
    ],
  },
  {
    title: "Section 3: Advanced Topics",
    lectures: [
      { title: "Decorators", duration: "15:00" },
      { title: "Generators", duration: "11:45" },
    ],
  },
];

const CurriculumItem = ({
  title,
  duration,
  isCompleted = false,
  isActive = false,
}: {
  title: string;
  duration: string;
  isCompleted?: boolean;
  isActive?: boolean;
}) => (
  <div
    className={`lecture-item flex items-center justify-between p-4 cursor-pointer ${
      isActive ? "bg-orange/10" : "hover:bg-gray-100"
    }`}
  >
    <div className="flex items-center gap-3">
      {isCompleted ? (
        <CheckCircle size={18} className="text-green-500" />
      ) : (
        <PlayCircle size={18} className="text-secondary" />
      )}
      <span
        className={`text-sm ${
          isActive ? "font-bold text-primary" : "text-secondary"
        }`}
      >
        {title}
      </span>
    </div>
    <span className="text-xs text-secondary">{duration}</span>
  </div>
);

const CurriculumSection = ({
  section,
  isOpen,
  onToggle,
}: {
  section: {
    title: string;
    lectures: {
      title: string;
      duration: string;
      isCompleted?: boolean;
      isActive?: boolean;
    }[];
  };
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="section border-b">
      <button
        className="section-header w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100"
        onClick={onToggle}
      >
        <span>{section.title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="lectures">
          {section.lectures.map(
            (
              lecture: {
                title: string;
                duration: string;
                isCompleted?: boolean;
                isActive?: boolean;
              },
              index: number
            ) => (
              <CurriculumItem key={index} {...lecture} />
            )
          )}
        </div>
      )}
    </div>
  );
};

const CurriculumSidebar = () => {
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const handleToggleSection = (index: number) => {
    setOpenSections(
      (prevOpenSections) =>
        prevOpenSections.includes(index)
          ? prevOpenSections.filter((i) => i !== index) 
          : [...prevOpenSections, index] 
    );
  };

  return (
    <aside className="curriculum-sidebar w-full lg:w-96 bg-white border-l flex-shrink-0">
      <div className="p-4 border-b">
        <h3 className="text-lg font-bold">Course Content</h3>
      </div>
      <div className="curriculum-list">
        {curriculumData.map((section, index) => (
          <CurriculumSection
            key={index}
            section={section}
            isOpen={openSections.includes(index)} 
            onToggle={() => handleToggleSection(index)} 
          />
        ))}
      </div>
    </aside>
  );
};

export default CurriculumSidebar;
