import React from "react";
import NewTodoForm from "./NewTodoForm/NewTodoForm";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

const Test = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input className="input" placeholder="email" {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        className="input"
        placeholder="password"
        {...register("password")}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">submit!</button>
    </form>
  );
};

export default Test;
