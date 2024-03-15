"use client";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { CustomButton, CustomInput, CustomForm } from "@/app/Components/index";
import { ToastContainer } from "react-toastify";

const RegisterPage: React.FC = () => {

  const {
    formData,
    handleChange,
    handleSubmit,
  } = useAuth();

  return (
    <>
      <CustomForm
        title="Register"
        button={
          <CustomButton
            type="submit"
            intent={"accept"}
            className="rounded-full w-32"
          >
            Register
          </CustomButton>
        }
        handler={handleSubmit}
      >
        <CustomInput
          name="email"
          type="email"
          currentValue={formData.email}
          placeholder="Enter your email"
          changeHandler={handleChange}
        />
        <CustomInput
          name="password"
          type="password"
          currentValue={formData.password}
          placeholder="Enter your password"
          changeHandler={handleChange}
        />
        <CustomInput
          name="confirmPassword"
          type="password"
          currentValue={formData.confirmPassword}
          placeholder="Repeat your password"
          changeHandler={handleChange}
        />
        <ToastContainer />
      </CustomForm>
    </>
  );
};

export default RegisterPage;
