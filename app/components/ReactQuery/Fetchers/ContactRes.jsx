/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchContactUsRes = async () => {
  try {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_MAIN}/fetchcontact`,
      tokenConfig
    );
    const contactRes = res.data;
    return contactRes;
  } catch (err) {
    console.error(err);
    return null;
  }
};
