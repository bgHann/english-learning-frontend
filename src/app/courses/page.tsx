import CategoryFilter from "@/components/course/CategoryFilter";
import CourseList from "@/components/course/CourseList";
import SearchBar from "@/components/course/SearchBar";

import React from "react";

export default function Courses() {
  return (
    <div className="flex min-h-screen flex-col gap-5 items-center p-6">
      <h1 className="text-2xl font-bold">Khám phá khóa học</h1>
      <p>Chọn chủ đề mong muốn</p>
      <SearchBar />
      <CategoryFilter />

      <CourseList />
    </div>
  );
}
