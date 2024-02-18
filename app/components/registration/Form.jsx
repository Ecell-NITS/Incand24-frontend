"use client";

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Icon } from "@iconify/react";
import styles from "./Form.module.scss";

const Page = () => {
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
    {
      id: 4,
      name: "Mail Id",
      type: "email",
    },
    {
      id: 5,
      name: "Screenshot",
      type: "file",
    },
  ];

  const initialState = {};
  fields.forEach((field) => {
    initialState[field.name] = "";
  });

  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e) => {
    console.log(formData);
    const { name, value, type } = e.target;
    const fieldValue = type === "file" ? e.target.files[0] : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const validate = (values) => {
    const errors = {};

    // Check each field value
    fields.forEach((field) => {
      if (!values[field.name]) {
        errors[field.name] = `Please enter ${field.name}`;
      } else if (field.name === "contact") {
        const contactNumber = values[field.name];
        if (Number.isNaN(contactNumber) || contactNumber.length !== 10) {
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
      <div className={styles.main}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formdata}>
            <h1>Prom Night</h1>
            <div className={styles.fields}>
              {fields.map(
                (field) =>
                  field.id !== 5 && (
                    <div key={field.id} className={styles.inputBox}>
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
                  )
              )}
            </div>

            <div className={styles.qrWrapper}>
              <div className={styles.qr}></div>
              <div className={styles.details}>Payment Details</div>
            </div>

            <div className={styles.upload}>
              <input
                className={styles.field}
                type={fields[4].type}
                name={fields[4].name}
                onChange={changeHandler}
              />

              <div className={styles.fieldDetails}>
                <Icon icon="tdesign:cloud-upload" style={{ color: "white" }} />
                <div className={styles.details}>Payment Sceenshot</div>
              </div>
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
