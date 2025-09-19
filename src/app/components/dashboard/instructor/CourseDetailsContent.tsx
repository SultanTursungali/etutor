"use client";

const CourseDetailsContent = () => {
  return (
    <div className="course-details-content">
      <div className="student-profile-menu border-b bg-white rounded-t-lg p-2">
        <ul className="flex flex-wrap">
          <li>
            <a
              href="#overview"
              className="block py-2 px-4 rounded-md bg-orange/10 text-orange font-semibold"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#curriculum"
              className="block py-2 px-4 rounded-md text-secondary hover:bg-gray-100"
            >
              Curriculum
            </a>
          </li>
          <li>
            <a
              href="#notes"
              className="block py-2 px-4 rounded-md text-secondary hover:bg-gray-100"
            >
              Notes
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className="block py-2 px-4 rounded-md text-secondary hover:bg-gray-100"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#announcements"
              className="block py-2 px-4 rounded-md text-secondary hover:bg-gray-100"
            >
              Announcements
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-b-lg shadow-sm">
        <div id="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border rounded-md text-center">
              <h4 className="text-2xl font-bold">2,407</h4>
              <p className="text-secondary">Students</p>
            </div>
            <div className="p-4 border rounded-md text-center">
              <h4 className="text-2xl font-bold">3</h4>
              <p className="text-secondary">Lessons</p>
            </div>
            <div className="p-4 border rounded-md text-center">
              <h4 className="text-2xl font-bold">4</h4>
              <p className="text-secondary">Quizzes</p>
            </div>
            <div className="p-4 border rounded-md text-center">
              <h4 className="text-2xl font-bold">100%</h4>
              <p className="text-secondary">Pass Rate</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Course Description</h3>
            <p className="text-secondary leading-relaxed">
              It gives you a huge self-satisfaction when you look at your work
              and say, &quot;I made this!&quot;. I love that feeling after
              I&apos;m done working on something. When I lean back in my chair,
              look at the final result with a smile, and have this little
              &quot;spark joy&quot; moment. It&apos;s especially satisfying when
              I know I just made $5,000.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsContent;
