import React from "react";
import FormControl from "@components/FormControl/FormControl";
import SubmitBox from "@components/SubmitBox/SubmitBox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./signUp.module.scss";
import { useForm } from "react-hook-form";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

const SignUp = () => {
  const signUpSchema = z
    .object({
      firstName: z.string().min(2),
      lastName: z.string().min(2),
      username: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(6).max(20),
      repeatPassword: z.string().min(6).max(20),
      phone: z.string().min(11).max(20),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: "Passwords don't match",
      path: ["repeatPassword"], // path of error
    });
  const [messageType, setMessageType] = React.useState("");
  const [message, setMessage] = React.useState("");
  // const [showError, setShowError] = React.useState(false);
  // const [messageError, setMessageError] = React.useState("");
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    navigate("/");
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (values) => {
    setMessageType("");
    const res = await axios.post("/admin/new", {
      username: values.username,
      email: values.email,
      telephone: values.phone,
      password: values.password,
      gender: "Male",
      firstName: values.firstName,
      lastName: values.lastName,
      role: "admin",
    });
    if (res.data?.message === "Sign up is successfully") {
      setMessageType("success");
      setMessage(
        <>
          Signed up successfully. Now you can <Link to="/login">Login </Link>
        </>
      );
    } else {
      setMessageType("error");
      setMessage(res.data?.message);
    }
  };

  return (
    <>
      {messageType === "error" && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
      {messageType === "success" && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form className={styles["sign-up"]} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <FormControl
            label="first name"
            name="firstName"
            type="text"
            register={register}
            errors={errors}
          />
          <FormControl
            label="last name"
            name="lastName"
            type="text"
            register={register}
            errors={errors}
          />
        </div>

        <FormControl
          label="username"
          name="username"
          type="text"
          register={register}
          errors={errors}
        />
        <FormControl
          label="email"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <FormControl
          label="password"
          name="password"
          type="password"
          register={register}
          errors={errors}
        />
        <FormControl
          label="repeat password"
          name="repeatPassword"
          type="password"
          register={register}
          errors={errors}
        />
        <FormControl
          label="phone"
          name="phone"
          type="text"
          register={register}
          errors={errors}
        />
        <SubmitBox label="sign up" />
      </form>
    </>
  );
};

export default SignUp;
