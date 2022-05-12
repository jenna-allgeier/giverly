import Client from "./index";

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("api/token", data);
    localStorage.setItem("token", res.data.token);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("users/register", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// research Django check session

export const CheckSession = async () => {
  try {
    const res = await Client.get("users/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};