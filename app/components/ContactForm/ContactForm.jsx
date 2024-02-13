/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { Allura } from "next/font/google";
import styles from "./ContactForm.module.scss";

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contact: "",
  });

  const [formError, setFormError] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const OnChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name?.length > 49) {
      toast.error("Name too long", {
        position: "bottom-right",
      });
      return;
    }
    if (formData.email?.length > 49) {
      toast.error("Email too long", {
        position: "bottom-right",
      });
      return;
    }
    if (formData?.contact && formData?.contact.length < 10) {
      toast.error("Invalid phone number");
      return;
    }

    setSubmitting(true);
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_MAIN}/contact`, {
          name: formData.name,
          message: formData.message,
          email: formData.email,
          contact: formData.contact,
        })
        .then((res) => {
          if (res.data.message === "Message Sent Successfully") {
            setFormData({
              name: "",
              email: "",
              message: "",
              contact: "",
            });
            toast.success("Message received. We will contact you as soon as possible", {
              position: "bottom-right",
              duration: 7500,
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
          case "Invalid email":
            toast.error("Invalid email");
            break;
          case "Something went wrong":
            toast.error("Something went wrong, please try again later");
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
      formData.name.length > 0 && formData.message.length > 0 && formData.email.length > 0
    );
  }, [formData]);

  return (
    <div className={styles.bro} id="register">
      <div className={` ${allura.className} ${styles.container}`}>
        <div className={styles.heading}>
          <h2 className={`${allura.className}`}>Contact Us</h2>
        </div>
        <form>
          <div className={styles.box}>
            <label htmlFor="name">Name</label>
            <input name="name" autoComplete="off" onChange={OnChangeHandler} />
            <span>{formError.name}</span>
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
          <div className={styles.box}>
            <label htmlFor="contact">Phone (Optional)</label>
            <input
              name="contact"
              autoComplete="off"
              type="text"
              onChange={OnChangeHandler}
            />
            <span>{formError.conatact}</span>
          </div>
          <div className={styles.box}>
            <label htmlFor="message">Your Message</label>
            <input name="message" autoComplete="off" onChange={OnChangeHandler} />
            <span>{formError.message}</span>
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
              {submitting ? "Submitting..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default ContactForm;
