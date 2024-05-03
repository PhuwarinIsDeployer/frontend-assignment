import { ApiFetch } from "@/services/api";
import { ApiPath } from "@/services/path/serviceApi";
import { UsersDataResponse } from "@/types/summaryDepartment/summaryDepartmentType";

export const getSummaryDepartmentService =
  async (): Promise<UsersDataResponse> => {
    try {
      const response = await ApiFetch.get(ApiPath.DEPARTMENT_INFO);
      return response.data;
    } catch (error) {
      throw new Error("Error: " + error);
    }
  };
