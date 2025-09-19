// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\student\dashboard\page.tsx

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, PlayCircle, CheckCircle, Users } from "lucide-react";

const StatCard = ({ icon, count, label, bgColor }: { icon: React.ReactNode, count: string, label: string, bgColor: string }) => (
    <div className={`p-6 rounded-lg flex items-center gap-4 ${bgColor}`}>
        <div className="text-orange">{icon}</div>
        <div>
            <h4 className="text-2xl font-bold text-primary">{count}</h4>
            <span className="text-secondary">{label}</span>
        </div>
    </div>
);

const LearningCourseCard = ({ imgSrc, title, lesson, progress }: { imgSrc: string, title: string, lesson: string, progress: number }) => (
    <div className="course-lecture border rounded-lg overflow-hidden bg-white">
        <Link href="/course-watch" className="course-lecture-img block">
            <Image src={imgSrc} alt={title} width={400} height={220} className="w-full object-cover" />
        </Link>
        <div className="p-4">
            <h4 className="font-bold hover:text-orange transition-colors"><Link href="/course-watch">{title}</Link></h4>
            <p className="text-sm text-secondary mt-1">{lesson}</p>
        </div>
        <div className="course-lecture-footer p-4 border-t flex justify-between items-center">
            <Link href="/course-watch" className="button orange-btn !py-2 !px-4">Watch Lecture</Link>
            <span className="text-sm text-secondary">{progress}% Completed</span>
        </div>
        <div className="w-full bg-gray-200 h-1">
            <div className="bg-orange h-1" style={{ width: `${progress}%` }}></div>
        </div>
    </div>
);

export default function StudentDashboardPage() {
    return (
        <div id="tabs01">
            <div className="category-section mb-8">
                <div className="student-title mb-6">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard icon={<GraduationCap size={32} />} count="957" label="Enrolled Courses" bgColor="bg-orange/10" />
                    <StatCard icon={<PlayCircle size={32} />} count="6" label="Active Courses" bgColor="bg-blue-500/10" />
                    <StatCard icon={<CheckCircle size={32} />} count="951" label="Completed Courses" bgColor="bg-green-500/10" />
                    <StatCard icon={<Users size={32} />} count="241" label="Course Instructors" bgColor="bg-yellow-500/10" />
                </div>
            </div>
            
            <div className="lecture-section">
                <div className="student-title mb-6">
                    <h2 className="text-2xl font-bold">Let’s start learning, Kevin</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <LearningCourseCard imgSrc="/assets/images/slider1.jpg" title="The Complete 2021 Web Development" lesson="The Complete 2021 Web Development" progress={61} />
                    <LearningCourseCard imgSrc="/assets/images/slider3.jpg" title="2021 Complete Python Bootcamp From Zero to" lesson="9. Advanced CSS - Selector Priority" progress={85} />
                </div>
            </div>
        </div>
    );
}