import React, { useState } from "react";

import { Toaster, toast } from "sonner";
import styles from "./ContactUs.module.scss";
import { Allura , Expletus_Sans} from "next/font/google";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const sans = Expletus_Sans({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--sans-font",
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    instituteName: "",
    contact: "",
    email: "",
  });

  const [formError, setFormError] = useState({});

  const OnChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      toast.success("Submittted", {
        position: "bottom-right",
      });
    } else {
      toast.error("Invalid form", {
        position: "bottom-right",
      });
    }
  };
  const validateForm = () => {
    const err = {};

    if (formData.name === "") {
      err.name = "Name required!";
    }
    if (formData.email === "") {
      err.email = "Email required!";
    }
    if (formData.contact.length < 10) {
      err.contact = "Invalid Contact Number!";
    }
    if (formData.contact === "") {
      err.contact = "Contact Number required!";
    }
    if (formData.instituteName === "") {
      err.instituteName = "Institute Name required!";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };
  return (
    <div className={styles.bro} id="join">
      <div className={`${allura.className} ${styles.heading}`}>
          <h1>What are you waiting for? </h1>
        </div>

      <div className={`${allura.className} ${styles.container}`}>
        <div className={styles.heading}>
          <h2>Register Yourself</h2>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className={`${sans.className} ${styles.box}`}>
            <label htmlFor="name">Name</label>
            <input name="name" autoComplete="off" onChange={OnChangeHandler} />
            <span>{formError.name}</span>
          </div>
          <div className={`${sans.className} ${styles.box}`}>
            <label htmlFor="instituteName">Institute Name</label>
            <input name="instituteName" autoComplete="off" onChange={OnChangeHandler} />
            <span>{formError.instituteName}</span>
          </div>
          <div className={`${sans.className} ${styles.box}`}>
            <label htmlFor="contact">Contact Number</label>
            <input
              name="contact"
              autoComplete="off"
              maxLength="10"
              type="number"
              onChange={OnChangeHandler}
            />
            <span>{formError.contact}</span>
          </div>
          <div className={styles.box}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              autoComplete="off"
              type="email"
              onChange={OnChangeHandler}
            />
            <span>{formError.email}</span>
          </div>
          <div className={styles.sub}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default ContactUs;
