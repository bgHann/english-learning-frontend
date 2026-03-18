export const loginAPI = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          email: data.email,
          role: "student",
        },
      });
    }, 500);
  });
};

export const getCoursesAPI = async () => {
  return [
    { id: 1, title: "Từ vựng A1" },
    { id: 2, title: "Ngữ pháp A2" },
  ];
};
