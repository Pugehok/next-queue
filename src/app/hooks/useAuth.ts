import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface SignData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuth = () => {
  const [formData, setFormData] = useState<SignData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    login(formData.email, formData.password);
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setToken(data.access_token);
      toast.success("Login successful!");
      console.log(token);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [errorMessage, successMessage]);

  return {
    formData,
    handleChange,
    handleSubmit,
    successMessage,
    errorMessage,
    token,
  };
};
