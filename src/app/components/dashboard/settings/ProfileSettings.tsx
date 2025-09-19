import Image from "next/image";

const ProfileSettings = () => {
  return (
    <form action="#" className="form">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="instructor-avater flex-shrink-0">
          <div className="w-40 h-40 rounded-full overflow-hidden relative">
            <Image
              src="/assets/images/photos.png"
              alt="avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="upload"
              className="button div-orange-btn cursor-pointer text-center"
            >
              Upload Avatar
            </label>
            <input type="file" id="upload" className="hidden" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                defaultValue="Kevin"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                defaultValue="Gilbert"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                defaultValue="kevin.gilbert@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <div className="form-field">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                defaultValue="+88 0123 4567 890"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
          </div>
          <div className="form-field mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Biography
            </label>
            <textarea
              placeholder="Write your biography"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
            ></textarea>
          </div>
          <div className="mt-6">
            <button type="submit" className="button orange-btn">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileSettings;
