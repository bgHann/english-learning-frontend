const categories = ["Tất cả", "Từ vựng", "Ngữ pháp", "Đọc hiểu"];

export default function CategoryFilter() {
  return (
    <div className="flex justify-center gap-3 ">
      {categories.map((item) => (
        <button
          key={item}
          className="px-4 py-2 border text-sm rounded-full hover:bg-gray-100"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
