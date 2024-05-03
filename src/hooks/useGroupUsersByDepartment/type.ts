import { User } from "@/types/summaryDepartment/summaryDepartmentType";

export interface DepartmentSummary {
  [departmentName: string]: {
    male: number;
    female: number;
    ageRange: string;
    hair: { [color: string]: number };
    addressUser: { [name: string]: string };
    users: User[];
  };
}
