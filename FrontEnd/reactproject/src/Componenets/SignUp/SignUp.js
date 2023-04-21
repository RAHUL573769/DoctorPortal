import React from "react";
import { useForm } from "react-hook-form";


import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  
const onSubmit=(data)=>{
console.log(data);
}
  return (
    <div className="  h-[800px] flex justify-center items-center">
    <div className="w-96">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is Required" })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-error">{errors.name?.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email is Required" })}
            type="email"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-error">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", { required: "Password is Required" })}
            type="password"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && (
            <p className="text-error">{errors.password?.message}</p>
          )}
        </div>

        <input className="btn btn-accent w-full" type="submit" />
      </form>
      <p>Already have an Account?<Link to='/login'>Login?</Link></p>
      <div className="divider">OR</div>
    </div>
     

    </div>
  );
};

export default SignUp;
