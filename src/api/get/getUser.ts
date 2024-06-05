import axios from "axios";
import { BASEURL } from "../BASEURL";

export async function getUser() {
  const res = await axios.get(`${BASEURL}/users`);
  return res.data;
}
