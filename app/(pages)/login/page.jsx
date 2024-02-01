"use client";

import React, { useState, useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast, Toaster } from "sonner";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const OnChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_MAIN}/login`, {
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          if (res.data.message === "Login successful") {
            Cookies.set("authToken", res.data.token, { path: "/" });
            window.location.href = "/dashboard";
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "Too many requests, please try again later.":
            toast.error("Too many requests, please try again later.");
            break;
          case "Please fill all required fields":
            toast.error("Please fill all required fields");
            break;
          case "No account found":
            toast.error("No account found");
            break;
          case "Invalid email or password":
            toast.error("Invalid email or password");
            break;
          case "Failed to log in":
            toast.error("Failed to log in");
            break;
          default:
            toast.error("login failed");
            console.error(err);
            break;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  const isButtonEnabled = useMemo(() => {
    return formData.email.length > 0 && formData.password.length > 0;
  }, [formData]);

  return (
    <main>
      Login form
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" onChange={OnChangeHandler} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={OnChangeHandler} />
      </div>
      <div>
        <button
          disabled={submitting || !isButtonEnabled}
          style={{
            cursor: submitting || !isButtonEnabled ? "not-allowed" : "pointer",
            opacity: submitting || !isButtonEnabled ? "0.5" : "1",
          }}
          onClick={handleSubmit}
        >
          {submitting ? "Submitting..." : "Login"}
        </button>
      </div>
      <Toaster richColors />
    </main>
  );
};

export default Login;
