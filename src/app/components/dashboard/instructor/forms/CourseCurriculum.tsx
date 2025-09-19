import { Plus, GripVertical, FileText, Video, Trash2 } from "lucide-react";

const LectureItem = ({
  title,
  type,
  duration,
}: {
  title: string;
  type: "video" | "article";
  duration: string;
}) => (
  <div className="lecture-item flex items-center justify-between p-4 bg-gray-50 rounded-md border">
    <div className="flex items-center gap-3">
      <GripVertical size={20} className="text-gray-400 cursor-move" />
      {type === "video" ? (
        <Video size={18} className="text-secondary" />
      ) : (
        <FileText size={18} className="text-secondary" />
      )}
      <span className="text-primary">{title}</span>
    </div>
    <div className="flex items-center gap-4 text-secondary">
      <span>{duration}</span>
      <button className="hover:text-red-500">
        <Trash2 size={18} />
      </button>
    </div>
  </div>
);

const CourseCurriculum = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b flex justify-between items-center">
        <h3 className="text-xl font-bold">Course Curriculum</h3>
        <button className="button orange-btn flex items-center gap-2">
          <Plus size={20} />
          <span>Add Lecture</span>
        </button>
      </div>
      <div className="p-6 space-y-4">
        <div className="section-item border rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold">Section 1: Introduction</h4>
            <button className="text-red-500 hover:text-red-700 text-sm font-semibold">
              Remove
            </button>
          </div>
          <div className="lectures space-y-3">
            <LectureItem
              title="Why Take This Course"
              type="video"
              duration="04:20"
            />
            <LectureItem
              title="Download Syllabus"
              type="article"
              duration="00:00"
            />
          </div>
        </div>
        <div className="section-item border rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold">Section 2: Python Setup</h4>
            <button className="text-red-500 hover:text-red-700 text-sm font-semibold">
              Remove
            </button>
          </div>
          <div className="lectures space-y-3">
            <LectureItem
              title="Install Python on Mac"
              type="video"
              duration="12:50"
            />
            <LectureItem
              title="Install Python on Windows"
              type="video"
              duration="08:15"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button type="button" className="button div-orange-btn">
            Previous
          </button>
          <button type="button" className="button orange-btn">
            Publish Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
