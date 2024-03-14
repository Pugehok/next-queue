"use client";
import { Button, CustomForm, CustomInput } from "@/app/Components/index";
import { useAuth } from "@/app/hooks/useAuth";

const SignPage = () => {
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
        title="Sign In"
        button={
          <Button type="submit" intent={"accept"}>
            Sign In
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
        {registrationSuccess && <span> вы успешно авторизовались </span>}
      </CustomForm>
    </>
  );
};

export default SignPage;
