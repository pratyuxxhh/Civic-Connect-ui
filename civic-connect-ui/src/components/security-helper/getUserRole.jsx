import { jwtDecode } from "jwt-decode";


export default function getUserRole() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.role[0].authority;
  } catch {
    return null;
  }
}
