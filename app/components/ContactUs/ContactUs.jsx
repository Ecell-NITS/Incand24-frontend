/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { Allura } from "next/font/google";
import styles from "./ContactUs.module.scss";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    instituteName: "",
    contact: "",
    email: "",
  });

  const [formError, setFormError] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const OnChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   const isValid = validateForm();
  //   if (isValid) {
  //     toast.success("Submittted", {
  //       position: "bottom-right",
  //     });
  //   } else {
  //     toast.error("Invalid form", {
  //       position: "bottom-right",
  //     });
  //   }
  // };

  // const validateForm = () => {
  //   const err = {};

  //   if (formData.name === "") {
  //     err.name = "Name required!";
  //   }
  //   if (formData.name?.length > 50) {
  //     err.name = "Name too long";
  //   }
  //   if (formData.email === "") {
  //     err.email = "Email required!";
  //   }
  //   if (formData.email.includes("@") === false) {
  //     err.email = "Invalid Email";
  //   }
  //   if (formData.email?.length > 50) {
  //     err.name = "Email too long";
  //   }
  //   if (formData.contact.length < 10) {
  //     err.contact = "Invalid Contact Number!";
  //   }
  //   if (formData.contact === "") {
  //     err.contact = "Contact Number required!";
  //   }
  //   if (formData.instituteName === "") {
  //     err.instituteName = "Institute Name required!";
  //   }
  //   if (formData.instituteName?.length > 100) {
  //     err.name = "Institute Name too long";
  //   }

  //   setFormError({ ...err });
  //   return Object.keys(err).length < 1;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name?.length > 50) {
      toast.error("Name too long", {
        position: "bottom-right",
      });
      return;
    }
    if (formData.email?.length > 50) {
      toast.error("Email too long", {
        position: "bottom-right",
      });
      return;
    }
    if (formData.instituteName?.length > 100) {
      toast.error("Institute Name too long", {
        position: "bottom-right",
      });
      return;
    }
    if (formData.contact?.length < 10) {
      toast.error("Invalid Contact Number!", {
        position: "bottom-right",
      });
      return;
    }
    setSubmitting(true);
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_MAIN}/CAregister`, {
          name: formData.name,
          college: formData.instituteName,
          email: formData.email,
          phone: formData.contact,
        })
        .then((res) => {
          if (res.data.message === "Registration successful") {
            toast.success("Registration successful", {
              position: "bottom-right",
            });
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "details missing":
            toast.error("Please fill all the details");
            break;
          case "details too long":
            toast.error("Details too long");
            break;
          case "Existing registartion with this email id":
            toast.error("Existing registartion with this email id");
            break;
          case "Invalid email":
            toast.error("Invalid email");
            break;
          case "Register went wrong":
            toast.error("Register went wrong, please try again later");
            break;
          default:
            toast.error("Something went wrong");
            console.error(err);
            break;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  const isButtonEnabled = useMemo(() => {
    return (
      formData.name.length > 0 &&
      formData.instituteName.length > 0 &&
      formData.contact.length > 0 &&
      formData.email.length > 0
    );
  }, [formData]);

  return (
    <div className={styles.bro} id="register">
      <div className={`${allura.className} ${styles.heading}`}>
        <h1>What are you waiting for? </h1>
      </div>

      <div className={` ${allura.className} ${styles.container}`}>
        <div className={styles.heading}>
          <h2 className={`${allura.className}`}>Register Yourself</h2>
        </div>
        <form>
          <div className={styles.box}>
            <label htmlFor="name">Name</label>
            <input name="name" autoComplete="off" onChange={OnChangeHandler} />
            <span>{formError.name}</span>
          </div>
          <div className={styles.box}>
            <label htmlFor="instituteName">Institute Name</label>
            <input name="instituteName" autoComplete="off" onChange={OnChangeHandler} />
            <span>{formError.instituteName}</span>
          </div>
          <div className={styles.box}>
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
            <button
              disabled={submitting || !isButtonEnabled}
              style={{
                cursor: submitting || !isButtonEnabled ? "not-allowed" : "pointer",
                opacity: submitting || !isButtonEnabled ? "0.5" : "1",
              }}
              onClick={handleSubmit}
              type="submit"
            >
              {submitting ? "Submitting..." : "Register"}
            </button>
          </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default ContactUs;
