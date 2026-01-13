import axios from "axios";

export async function callProtectedApi() {
  const token = localStorage.getItem("token");

  const res = await axios.get("http://localhost:5000/api/protected", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}
