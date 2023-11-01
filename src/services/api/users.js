import http from "./index";

export const getUsers = async () => {
  try {
    const res = await http.get("/api/users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (id) => {
  try {
    const res = await http.get(`/api/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
