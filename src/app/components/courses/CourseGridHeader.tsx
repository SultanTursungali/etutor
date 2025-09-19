// import Image from "next/image";

const CourseGridHeader = () => {
  return (
    <div className="showing-result-wrap flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="showing-result">
        <p className="text-secondary">Showing 1-12 of 54 results</p>
      </div>
      <div className="sort-by flex items-center gap-2">
        <span className="text-secondary">Sort by:</span>
        <select className="form-select border-gray-300 rounded-md shadow-sm focus:border-orange focus:ring focus:ring-orange/20">
          <option>Latest</option>
          <option>Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CourseGridHeader;
