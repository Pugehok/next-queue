import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface loginData {
  email: string;
  password: string;
}
interface registerData extends loginData {
  confirmPassword: string;
}
type token = string | null;
type dataMessage = string | null;

export const useAuth = () => {
  const [formData, setFormData] = useState<registerData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState<dataMessage>(null);
  const [errorMessage, setErrorMessage] = useState<dataMessage>(null);
  const [token, setToken] = useState<token>(null);

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
    login({ email: formData.email, password: formData.password });
  };

  const login = async ({ email, password }: loginData) => {
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

      if (response.ok) {
        const data = await response.json();
        setToken(data.access_token);
        toast.success("Login successful!");
        return;
      }
      throw new Error("Login failed");
      
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
  };
};
