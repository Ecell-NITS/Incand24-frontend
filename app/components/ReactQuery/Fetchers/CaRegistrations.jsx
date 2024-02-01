/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchCARegistrations = async () => {
  try {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_MAIN}/fetchcaregs`,
      tokenConfig
    );
    const caregs = res.data;
    return caregs;
  } catch (err) {
    console.error(err);
    return null;
  }
};
