import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h1>This is Login</h1>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className=" w-full label">
              <span className="label-text w-full">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "min length is 5"
                }
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {/* {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )} */}


                  {errors.password && <span role="alert">{errors.password.message}</span>}

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input className="btn btn-accent w-full" type="submit" />
        </form>
        <p>
          New to Doctor's Portal?<Link to="/signup">Creaste an Account?</Link>
        </p>
        <div className="divider">OR</div>
      </div>
    </div>
  );
};

export default Login;
