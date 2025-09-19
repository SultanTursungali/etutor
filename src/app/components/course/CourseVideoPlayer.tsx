// import Image from "next/image";
import Link from "next/link";

const CourseVideoPlayer = () => {
  return (
    <div className="course-singe-main my-6">
      <div
        className="course-video-wrap relative rounded-lg overflow-hidden bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url(/assets/images/popup-thumb.jpg)" }}
      >
        <Link
          href="https://www.youtube.com/watch?v=GL0rbxB9Lqg"
          target="_blank"
          className="popup-youtube w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3889 8.35995L1.8911 0.111021C1.77741 0.0415409 1.64726 0.00360271 1.51404 0.00110806C1.38083 -0.00138659 1.24935 0.0316526 1.13314 0.0968271C1.01692 0.162002 0.920173 0.256958 0.852834 0.371929C0.785495 0.486901 0.75 0.617736 0.75 0.750976V17.2488C0.75 17.3821 0.785495 17.5129 0.852834 17.6279C0.920173 17.7429 1.01692 17.8378 1.13314 17.903C1.24935 17.9682 1.38083 18.0012 1.51404 17.9987C1.64726 17.9962 1.77741 17.9583 1.8911 17.8888L15.3889 9.63986C15.4985 9.57287 15.5891 9.47883 15.652 9.36677C15.7148 9.25471 15.7478 9.12839 15.7478 8.99991C15.7478 8.87143 15.7148 8.74511 15.652 8.63305C15.5891 8.52099 15.4985 8.42695 15.3889 8.35995Z"
              fill="#FF6636"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CourseVideoPlayer;
