import Link from "next/link";

const Pagination = () => {
  return (
    <div className="pag text-center mt-10">
      <div className="pag-content inline-flex items-center justify-center space-x-2 bg-white p-2 rounded-md shadow-sm">
        <Link
          href="#"
          className="pag-arrow flex items-center justify-center w-10 h-10 rounded-md hover:bg-orange/10"
        >
          <svg
            className="w-5 h-5 text-orange"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 8H0.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 1.25L0.75 8L7.5 14.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
        <ul className="flex items-center space-x-1">
          <li>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-orange text-white"
            >
              01
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-orange/10 text-secondary"
            >
              02
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-orange/10 text-secondary"
            >
              03
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-orange/10 text-secondary"
            >
              04
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-orange/10 text-secondary"
            >
              05
            </Link>
          </li>
        </ul>
        <Link
          href="#"
          className="pag-arrow flex items-center justify-center w-10 h-10 rounded-md hover:bg-orange/10"
        >
          <svg
            className="w-5 h-5 text-orange"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 12H20.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.5 5.25L20.25 12L13.5 18.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
