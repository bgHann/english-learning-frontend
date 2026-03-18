import CourseCard from "./CourseCard";
import { courses } from "@/data/courses";

export default function CourseList() {
  return (
    <div className="grid md:grid-cols-3 gap-6 gird-cols-1">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
