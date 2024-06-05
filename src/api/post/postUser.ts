import axios from "axios";
import { BASEURL } from "../BASEURL";
import { UserType } from "../../types/types";

export const postUser = async (data: UserType) => {
    return await axios.post(`${BASEURL}/users`, data);
  };