import { useState } from "react";

interface SignData {
  email: string;
  password: string;
  repeatPassword: string; // Add repeatPassword field
}

export const useAuth = () => {
  const [formData, setFormData] = useState<SignData>({
    email: "",
    password: "",
    repeatPassword: "", // Initialize repeatPassword field
  });

  const [passwordError, setPasswordError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.password !== formData.repeatPassword){
      setPasswordError("Passwords do not match");
      return false;
    }
    else{
      setPasswordError('')
      setRegistrationSuccess(true);
    }
  };

  // const handleValidation = () => {
    // if (formData.password !== formData.repeatPassword) {
      // setPasswordError("Passwords do not match");
      // return false;
    // } else {
      // setPasswordError("");
      // return true;
    // }
  // };

  return {
    formData,
    handleChange,
    handleSubmit,
    passwordError,
    registrationSuccess,
  };
};
