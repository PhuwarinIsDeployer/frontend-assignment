import { User } from "@/types/summaryDepartment/summaryDepartmentType";

export const fetchDepartmentSuccess = (
  users: User[],
  total: number,
  skip: number
) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: { users, total, skip },
});
