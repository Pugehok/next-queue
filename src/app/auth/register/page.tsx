"use client";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@/app/Components/Button";
import { CustomInput } from "@/app/Components/Input";
import { CustomForm } from "@/app/Components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignPage: React.FC = () => {
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
          <Button
            type="submit"
            intent={"accept"}
            className="rounded-full w-32"
          >
            Register
          </Button>
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
export default SignPage;
