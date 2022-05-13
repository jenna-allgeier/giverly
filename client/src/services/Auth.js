import Client from "./index";

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("userLogin", data);
    return res.data;
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

export const GetAllUsers = async () => {
  try {
    const res = await Client.get("user");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  try {
    const res = await Client.get("users/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};