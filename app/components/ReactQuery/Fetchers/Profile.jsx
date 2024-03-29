/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchProfile = async () => {
  try {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_MAIN}/dashboard`,
      tokenConfig
    );
    const dashboard = res.data;
    return dashboard;
  } catch (err) {
    console.error(err);
    return null;
  }
};
