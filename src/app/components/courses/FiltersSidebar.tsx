"use client";

import FilterGroup from "../ui/FilterGroup";

// Определяем типы для пропсов
interface FiltersSidebarProps {
  selectedCategories: string[];
  selectedRating: number | null;
  selectedInstructors: string[];
  selectedPrice: string;
  selectedLevels: string[];
  onCategoryChange: (category: string) => void;
  onRatingChange: (rating: number) => void;
  onInstructorChange: (instructor: string) => void;
  onPriceChange: (price: string) => void;
  onLevelChange: (level: string) => void;
}

// Данные для фильтров
const categories = [
  "Design",
  "Developments",
  "Business",
  "Photography",
  "Marketing",
  "Health & Care",
  "Technology",
  "Music",
];
const ratings = [
  { label: "5 Star", value: 5 },
  { label: "4 Star & Up", value: 4 },
  { label: "3 Star & Up", value: 3 },
  { label: "2 Star & Up", value: 2 },
  { label: "1 Star & Up", value: 1 },
];
const instructors = [
  "Dianne Russell",
  "Eleanor Pena",
  "Theresa Webb",
  "Cody Fisher",
  "Bessie Cooper",
  "Guy Hawkins",
];
const prices = ["All", "Free", "Paid"];
const levels = ["All Levels", "Beginner", "Intermediate", "Expert"];

const FiltersSidebar = ({
  selectedCategories,
  selectedRating,
  selectedInstructors,
  selectedPrice,
  selectedLevels,
  onCategoryChange,
  onRatingChange,
  onInstructorChange,
  onPriceChange,
  onLevelChange,
}: FiltersSidebarProps) => {
  return (
    <aside className="course-sidebar space-y-6">
      <FilterGroup title="Categories">
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2 text-secondary hover:text-primary cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-orange focus:ring-orange/50"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Ratings">
        <ul className="space-y-3">
          {ratings.map((rating) => (
            <li key={rating.value}>
              <label className="flex items-center space-x-2 text-secondary hover:text-primary cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-orange focus:ring-orange/50"
                  checked={selectedRating === rating.value}
                  onChange={() => onRatingChange(rating.value)}
                />
                <span>{rating.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Instructors">
        <ul className="space-y-3">
          {instructors.map((instructor) => (
            <li key={instructor}>
              <label className="flex items-center space-x-2 text-secondary hover:text-primary cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-orange focus:ring-orange/50"
                  checked={selectedInstructors.includes(instructor)}
                  onChange={() => onInstructorChange(instructor)}
                />
                <span>{instructor}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Price">
        <ul className="space-y-3">
          {prices.map((price) => (
            <li key={price}>
              <label className="flex items-center space-x-2 text-secondary hover:text-primary cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  className="form-radio text-orange focus:ring-orange/50"
                  checked={selectedPrice === price}
                  onChange={() => onPriceChange(price)}
                />
                <span>{price}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Level">
        <ul className="space-y-3">
          {levels.map((level) => (
            <li key={level}>
              <label className="flex items-center space-x-2 text-secondary hover:text-primary cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-orange focus:ring-orange/50"
                  checked={selectedLevels.includes(level)}
                  onChange={() => onLevelChange(level)}
                />
                <span>{level}</span>
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>
    </aside>
  );
};

export default FiltersSidebar;
