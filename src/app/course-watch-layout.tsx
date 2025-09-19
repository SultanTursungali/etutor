import CourseWatchHeader from "@/app/components/course-watch/CourseWatchHeader";

export default function CourseWatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100">
      <CourseWatchHeader />
      <main>{children}</main>
    </div>
  );
}
