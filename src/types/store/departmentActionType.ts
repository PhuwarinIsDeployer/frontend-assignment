import { User } from "../summaryDepartment/summaryDepartmentType";

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

export interface FetchDepartmentSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: {
    users: User[];
    total: number;
    skip: number;
  };
}

export type DepartmentActionType = FetchDepartmentSuccessAction;
