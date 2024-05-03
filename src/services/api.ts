import axios from "axios";

export const ApiFetch = axios.create({
  baseURL: `${process.env.ASSINGEMENT_API}`,
});
