export const convertStatus = (status?: string) => {
  switch (status) {
    case "cancel": {
      return "Đã hủy";
    }
    case "pending": {
      return "Chờ xác nhận";
    }
    case "completed": {
      return "Hoàn thành";
    }
    default: {
      return "Chờ xác nhận";
    }
  }
};
