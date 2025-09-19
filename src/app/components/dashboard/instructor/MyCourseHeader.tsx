import Image from "next/image";

const MyCourseHeader = () => {
  return (
    <div className="student-header my-course mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="student-search flex items-center gap-2">
        <label className="student-lebel text-secondary whitespace-nowrap">
          Search:
        </label>
        <div className="form-searchbox relative">
          <span className="icon absolute left-3 top-1/2 -translate-y-1/2">
            <Image
              src="/assets/images/svg-icon/search.svg"
              alt="search"
              width={20}
              height={20}
            />
          </span>
          <input
            type="text"
            placeholder="What do you want to learn"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
      </div>
      <div className="student-header-dropdwon-wrap flex flex-wrap items-center gap-4">
        <div className="student-header-dropdwon-item flex items-center gap-2">
          <label className="student-lebel text-secondary">Sort by:</label>
          <select className="form-select border-gray-300 rounded-md shadow-sm focus:border-orange focus:ring focus:ring-orange/20">
            <option>Latest</option>
            <option>Oldest</option>
            <option>Popular</option>
          </select>
        </div>
        <div className="student-header-dropdwon-item flex items-center gap-2">
          <label className="student-lebel text-secondary">Category</label>
          <select className="form-select border-gray-300 rounded-md shadow-sm focus:border-orange focus:ring focus:ring-orange/20">
            <option>All Category</option>
            <option>Design</option>
            <option>Developments</option>
          </select>
        </div>
        <div className="student-header-dropdwon-item flex items-center gap-2">
          <label className="student-lebel text-secondary">Rating</label>
          <select className="form-select border-gray-300 rounded-md shadow-sm focus:border-orange focus:ring focus:ring-orange/20">
            <option>4 Star & Up</option>
            <option>3 Star & Up</option>
            <option>2 Star & Up</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MyCourseHeader;
