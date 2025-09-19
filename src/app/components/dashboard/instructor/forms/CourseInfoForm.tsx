const FormSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-lg shadow-sm">
    <div className="p-6 border-b">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const CourseInfoForm = () => {
  return (
    <FormSection title="Course Info">
      <form action="#" className="form space-y-6">
        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Title
          </label>
          <input
            type="text"
            placeholder="e.g. The Complete 2021 Web Development Bootcamp"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-field">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="form-select w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange">
              <option>Select Category</option>
              <option>Design</option>
              <option>Developments</option>
            </select>
          </div>
          <div className="form-field">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subcategory
            </label>
            <select className="form-select w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange">
              <option>Select Subcategory</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Description
          </label>
          <textarea
            placeholder="Write course description..."
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          ></textarea>
        </div>
        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Thumbnail
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Choose a photo
                </p>
              </div>
              <input type="file" className="opacity-0" />
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="button" className="button orange-btn">
            Next Step
          </button>
        </div>
      </form>
    </FormSection>
  );
};

export default CourseInfoForm;
