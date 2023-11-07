import React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@components/FormControl/FormControl";
import SubmitBox from "@components/SubmitBox/SubmitBox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./login.module.scss";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

const Login = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  });
  const navigate = useNavigate();
  const [showError, setShowError] = React.useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { onLogin } = useAuth();

  const onSubmit = async (values) => {
    const res = await axios.post("/admin", values);
    if (res.status === 200) {
      onLogin(res.data?.token, res.data?.firstName, res.data?.lastName);
      navigate("/");
    } else {
      setShowError(true);
    }
    reset();
  };

  return (
    <>
      {showError && (
        <div className="alert alert-danger" role="alert">
          Email or password is incorrect
        </div>
      )}

      <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          register={register}
          label="email"
          name="email"
          type="text"
          errors={errors}
        />
        <FormControl
          register={register}
          label="password"
          name="password"
          type="password"
          errors={errors}
        />

        <SubmitBox label="log in" />
      </form>
    </>
  );
};

export default Login;
