import InstructorProfileHeader from "@/app/components/instructor-profile/InstructorProfileHeader";
import InstructorProfileContent from "@/app/components/instructor-profile/InstructorProfileContent";
interface InstructorPageProps {
  params: {
    instructorId: string; // Параметр из URL, например, /instructor/123
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}
export default function InstructorPage({ params }: InstructorPageProps) {
  return (
    <>
      <InstructorProfileHeader />
      <InstructorProfileContent />
    </>
  );



// OneDrive\Рабочий стол\etutordiplom\src\app\instructor\[instructorId]\page.tsx
// yes
interface InstructorPageProps {
  params: {
    instructorId: string; // Параметр из URL, например, /instructor/123
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

  const { instructorId } = params; 
  return (
    <div>
      <h1>Профиль инструктора: {instructorId}</h1>
      const instructorData = await getInstructor(instructorId)
      <p>Это страница профиля инструктора с ID: {instructorId}</p>
    </div>
  );
}