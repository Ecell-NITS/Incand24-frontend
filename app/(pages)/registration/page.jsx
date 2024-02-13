"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Form.module.scss";
import promBg from "../../../public/events/registration/promBg.png";
import Navbar from "@/app/components/Navbar/Navbar";
import { Toaster, toast } from "sonner";

const Page = () => {
  const navlink = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Sponsors",
      href: "/sponsors",
    },
    {
      name: "Team",
      href: "/team",
    },
  ];

  const fields = [
    {
      id: 1,
      name: "name",
      type: "text",
    },
    {
      id: 2,
      name: "partner's name",
      type: "text",
    },
    {
      id: 3,
      name: "contact",
      type: "number",
    },
  ];

  const [formError, setFormError] = useState({});

  const initialState = {};
  fields.forEach((field) => {
    initialState[field.name] = "";
  });

  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    // Check each field value
    fields.forEach((field) => {
      if (!values[field.name]) {
        errors[field.name] = `Please enter ${field.name}`;
      } else if (field.name === "contact") {
        const contactNumber = values[field.name];
        if (isNaN(contactNumber) || contactNumber.length !== 10) {
          errors[field.name] = "Please enter a valid 10-digit contact number";
        }
      }
    });

    // Check if any errors found
    if (Object.keys(errors).length > 0) {
      // If errors exist, display them
      Object.entries(errors).forEach(([fieldName, errorMessage]) => {
        toast(errorMessage);
      });
      return false;
    }

    return true; // All fields are valid
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const valid = validate(formData);

    if (valid) {
      console.log(formData);
      toast("success");
    }
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <Navbar navlink={navlink} navVisible={true} />
      <Image src={promBg} alt="image" fill layout="" />
      <div className={styles.main}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formdata}>
            <h1>Prom Night</h1>
            <div className={styles.fields}>
              {fields.map((field) => (
                <div className={styles.inputBox}>
                  <input
                    className={styles.field}
                    key={field.id}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={changeHandler}
                  />
                  <label className={styles.labels}>{field.name}</label>
                </div>
              ))}
            </div>

            <button className={styles.button}>
              <div className={styles.layertext}>SUBMIT</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
