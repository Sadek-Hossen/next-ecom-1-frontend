import BASE_URL from "@/constant/url";
import axios from "axios";
import toast from "react-hot-toast";

export const userCreate = async (userData, router) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/userCreate`, userData ,{withCredentials:true});
    console.log("Backend response:", res.data);

    if (res.status === 200) {
      alert("User created successfully!");
      router.push("/login");
    }

    return res.data;

  } catch (error) {
    console.error("User create failed:", error.response?.data || error.message);
    alert(error.response?.data?.message || "User create failed!");
  }
};

export const loginUser = async (userData, router) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/loginUser`, userData,{withCredentials:true});
    console.log("Backend response:", res.data);

    if (res.status === 200) {
      toast.success("User login successful!");
      router.push("/");
    }

    return res.data;

  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Login failed!");
  }
};


export const getUser= async (userData, router) => {
  try {
   const res = await axios.get(`http://localhost:5000/api/user/get`, {
  withCredentials: true,
});

    console.log("Backend response:", res.data);

    if (res.status === 200) {
      alert("User get successful!");
      router.push("/");
    }

    return res.data;

  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    alert(error.response?.data?.message || "user get  failed!");
  }
};
