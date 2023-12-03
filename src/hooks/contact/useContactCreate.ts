import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { ContactInput } from "@/types/contact";
import { contactApi } from "@/config/api-path";

const useContactCreate = () => {
  return useMutation<ApiResponse<never>, ContactInput>({
    path: contactApi.createContact,
    method: "POST",
  });
};

export default useContactCreate;
