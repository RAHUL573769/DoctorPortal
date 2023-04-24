import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const [loginError,setLoginError]=useState("");
  const { userLogin } = useContext(AuthContext);
  const handleLogin = (data) => {
   
    userLogin(data.email,data.password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
      // ...
    })
    .catch((error) => {
  setLoginError(error.message);
    });;
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

            {errors.password && (
              <span role="alert">{errors.password.message}</span>
            )}

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input className="btn btn-accent w-full" type="submit" />
        </form>
        {loginError&&<p className="text-red-800">{loginError}</p>}
        <p>
          New to Doctor's Portal?<Link to="/signup">Creaste an Account?</Link>
        </p>
        <div className="divider">OR</div>
      </div>
    </div>
  );
};

export default Login;
