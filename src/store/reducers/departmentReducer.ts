import { DepartmentActionType } from "@/types/store/departmentActionType";
import { DepartmentStateType } from "@/types/store/departmentStateType";

const initialState: DepartmentStateType = {
  users: [],
  total: 0,
  skip: 0,
  limit: 10,
};

const departmentReducer = (
  state = initialState,
  action: DepartmentActionType
): DepartmentStateType => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload.users,
        total: action.payload.total,
        skip: action.payload.skip,
      };
    default:
      return state;
  }
};

export default departmentReducer;
