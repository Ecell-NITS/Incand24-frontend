import axios from "axios";

export const fetchProfile = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const profileData = res.data;
    return profileData;
  } catch (e) {
    console.error(e);
    return null;
  }
};
