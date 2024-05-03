import { createStore, combineReducers } from "redux";
import departmentReducer from "./reducers/departmentReducer";

const rootReducer = combineReducers({
  department: departmentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
