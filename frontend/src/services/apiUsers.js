import axios from "axios";

export async function login(body) {
  const res = await axios.post("/api/v1/users/login", body);
  return res.data.data;
}

export async function getUser() {
  const res = await axios.get("/api/v1/users/me");
  return res.data.data;
}
