import { User } from "../summaryDepartment/summaryDepartmentType";

export interface DepartmentStateType {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
