import { ApiResponse } from "@/types/shared";
import useMutation from "../useMutation";

const useImageImport = () => {
  return useMutation<ApiResponse<{ filename: string; id?: number }>, FormData>({
    path: "/image",
    method: "POST",
  });
};

export default useImageImport;
