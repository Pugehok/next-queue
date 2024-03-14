"use client";
import Image from "next/image";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@/app/Components/Button";
import { CustomInput } from "@/app/Components/Input";
import { CustomForm } from "@/app/Components/Form";
const SignPage: React.FC = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    passwordError,
    registrationSuccess,
  } = useAuth();

  return (
    <>
      <CustomForm
        title="Register"
        button={
          <Button type="submit" intent={"accept"}>
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
          name="repeatPassword"
          type="password"
          currentValue={formData.repeatPassword}
          placeholder="Repeat your password"
          changeHandler={handleChange}
        />

        {registrationSuccess&& <span> вы успешно зарегались </span>}
      </CustomForm>
    </>
  );
};

export default SignPage;
