import Link from "next/link";

const CourseFeature = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <li className="flex items-center gap-3 text-secondary">
    {icon}
    <span>{text}</span>
  </li>
);

const CourseSidebar = () => {
  return (
    <div className="course-right-sidebar sticky top-8 border rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <div className="price-time">
            <h4 className="text-3xl font-bold">
              $14.00{" "}
              <del className="text-xl text-gray-400 font-normal">$26.00</del>
            </h4>
            <h6 className="text-red-500 text-sm mt-1 flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5.625V10H14.375"
                  stroke="#E34444"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875Z"
                  stroke="#E34444"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M15.3032 2.04492L17.9549 4.69657"
                  stroke="#E34444"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.04492 4.69657L4.69657 2.04492"
                  stroke="#E34444"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              2 days left at this price!
            </h6>
          </div>
          <div className="bg-orange/10 text-orange text-sm font-semibold px-3 py-1 rounded">
            56% off
          </div>
        </div>
      </div>
      <div className="p-6 border-b">
        <div className="space-y-4">
          <Link href="#" className="button orange-btn w-full">
            Add to Cart
          </Link>
          <Link href="#" className="button div-orange-btn w-full">
            Buy now
          </Link>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <Link
            href="#"
            className="text-primary font-semibold hover:text-orange"
          >
            Add to wishlist
          </Link>
          <Link
            href="#"
            className="text-primary font-semibold hover:text-orange"
          >
            Gift Course
          </Link>
        </div>
        <p className="text-center text-xs text-secondary mt-3">
          All courses have 30-days money-back guarantee
        </p>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-bold mb-4">This course includes:</h4>
        <ul className="space-y-3">
          <CourseFeature
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#A1A5B3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M12 6.75V12H17.25"
                  stroke="#A1A5B3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            text="Lifetime access"
          />
          <CourseFeature
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 5.25V10.4153C5.25 14.1372 8.227 17.2222 11.9488 17.2498C12.8395 17.2566 13.7228 17.087 14.5476 16.7508C15.3725 16.4146 16.1226 15.9185 16.7548 15.291C17.3871 14.6636 17.8889 13.9172 18.2313 13.0949C18.5737 12.2727 18.75 11.3907 18.75 10.5V5.25C18.75 5.05109 18.671 4.86032 18.5303 4.71967C18.3897 4.57902 18.1989 4.5 18 4.5H6C5.80109 4.5 5.61032 4.57902 5.46967 4.71967C5.32902 4.86032 5.25 5.05109 5.25 5.25Z"
                  stroke="#FF6636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 21H15"
                  stroke="#FF6636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17.25V21"
                  stroke="#FF6636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5825 12H19.4998C20.2955 12 21.0585 11.6839 21.6211 11.1213C22.1837 10.5587 22.4998 9.79565 22.4998 9V7.5C22.4998 7.30109 22.4208 7.11032 22.2801 6.96967C22.1395 6.82902 21.9487 6.75 21.7498 6.75H18.7498"
                  stroke="#FF6636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.43432 12H4.48828C3.69263 12 2.92957 11.6839 2.36696 11.1213C1.80435 10.5587 1.48828 9.79565 1.48828 9V7.5C1.48828 7.30109 1.5673 7.11032 1.70795 6.96967C1.8486 6.82902 2.03937 6.75 2.23828 6.75H5.23828"
                  stroke="#FF6636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            text="Shareable certificate"
          />
        </ul>
      </div>
    </div>
  );
};

export default CourseSidebar;
