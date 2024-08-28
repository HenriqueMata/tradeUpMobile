import api from ".";
import { UserProps } from "../pages/Users";

interface ApiResponse {
  data: UserProps[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
async function getUsers(page: number): Promise<ApiResponse> {
  try {
    const { data } = await api.get<ApiResponse>(`/users?page=${page}`);

    return data;
  } catch (err) {
    throw new Error("Falha ao buscar dado");
  }
}

export default getUsers;
