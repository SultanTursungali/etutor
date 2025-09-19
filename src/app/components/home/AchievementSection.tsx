import Image from "next/image";

const stats = [
  {
    icon: "/assets/images/svg-icon/cap.svg",
    count: "22.9k",
    label: "Students",
  },
  {
    icon: "/assets/images/svg-icon/video.svg",
    count: "2,407",
    label: "Video Courses",
  },
  { icon: "/assets/images/svg-icon/tutor.svg", count: "258", label: "Tutors" },
  {
    icon: "/assets/images/category/briefcase.svg",
    count: "548",
    label: "Subjects",
  },
];

const AchievementSection = () => {
  return (
    <section className="achevement-section bg-light-gray py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            <Image
              src="/assets/images/achievement-thumb.png"
              alt="Achievement"
              width={540}
              height={520}
            />
          </div>

          <div>
            <div className="section-title mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Achievement
              </h2>
              <p className="text-secondary mt-2">
                Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                Donec mattis odio at.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="achevement-content flex items-center gap-4 bg-white p-4 rounded-lg"
                >
                  <div className="icon">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="counter-data">
                    <h3 className="text-2xl font-bold">{stat.count}</h3>
                    <p className="text-secondary">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
