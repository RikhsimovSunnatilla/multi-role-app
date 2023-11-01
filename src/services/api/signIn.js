import http from "./index";

export const signIn = async (values) => {
  return await http.post(`/api/signin`, values);
};
