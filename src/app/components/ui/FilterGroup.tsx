import React from "react";

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
}

const FilterGroup = ({ title, children }: FilterGroupProps) => {
  return (
    <div className="course-widget bg-white p-6 rounded-lg mb-6 shadow-sm">
      <h4 className="widget-title text-xl font-bold mb-4 border-b pb-3">
        {title}
      </h4>
      <div className="widget-body">{children}</div>
    </div>
  );
};

export default FilterGroup;
