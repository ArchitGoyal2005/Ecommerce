import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/apiUsers";

function LoginPage() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const {
    mutate,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      navigate("/");
    },
  });

  function onLogin(data) {
    if (isLoading) return;
    mutate(data);
  }

  return (
    <form
      className="h-[500px] w-[400px] mx-auto my-auto border-indigo-800 border-2  rounded-md py-8 px-6 flex flex-col justify-around font-semibold"
      onSubmit={handleSubmit(onLogin)}
    >
      <div className="gap-2 flex flex-col">
        <h1 className="self-center uppercase font-bold text-2xl text-indigo-900">
          Login
        </h1>
        <h5 className="self-center text-indigo-800">
          Get access to your Orders, Cart and Products
        </h5>
      </div>

      <div className="flex flex-col justify-between gap-2">
        <label htmlFor="email" className="text-base text-neutral-600">
          Enter Your E-Mail
        </label>
        <input
          type="text"
          className="border-b-2 outline-none text-lg  border-indigo-700"
          {...register("email", { required: "Please enter your email" })}
        />
        {errors?.email?.message && (
          <p className="text-red-900 font-semibold">{errors.email.message}</p>
        )}

        <label htmlFor="email" className="text-base  text-neutral-600">
          Enter Your Password
        </label>
        <input
          type="password"
          className="border-b-2 outline-none text-lg border-indigo-700"
          {...register("password", { required: "Please enter your password" })}
        />
        {errors?.password?.message && (
          <p className="text-red-900 font-semibold">
            {errors.password.message}
          </p>
        )}
        <button
          className="w-full bg-indigo-900 text-lg rounded-sm text-white mt-4 pt-1"
          disabled={isLoading}
        >
          Login
        </button>
        {error !== null && (
          <p className="text-red-900 font-semibold">
            {error.response.data.message}
          </p>
        )}
      </div>

      <Link className=" self-center text-indigo-600">
        Don't have an account? Create an account.
      </Link>
    </form>
  );
}

export default LoginPage;
