"use client";
import { CustomButton, CustomForm, CustomInput } from "@/app/Components/index";
import { useAuth } from "@/app/hooks/useAuth";
import { ToastContainer } from "react-toastify";
const SignPage = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
  } = useAuth();

  return (
    <>
      <CustomForm
        title="Sign In"
        button={
          <CustomButton
            type="submit"
            intent={"accept"}
            className="rounded-full w-32"
          >
            Sign In
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
        <ToastContainer />
      </CustomForm>
    </>
  );
};

export default SignPage;
