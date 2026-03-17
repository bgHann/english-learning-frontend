import CourseCard from "./CourseCard";
import { courses } from "@/data/courses";

export default function CourseList() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
