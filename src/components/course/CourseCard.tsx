import { Card } from "../ui/card";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="mt-4 p-4 w-full max-w-sm">
      <div className="bg-gray-200 h-[140px] rounded-lg mb-3"></div>

      <h3 className="font-semibold">{course.title}</h3>

      <p className="text-sm text-gray-500">{course.description}</p>
    </Card>
  );
}
