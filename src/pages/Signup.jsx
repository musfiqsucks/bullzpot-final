import { Link } from "react-router-dom";
import Navbar from "../sheared/Navbar";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
    } else {
      console.log(data);
      Swal.fire("Good job!", "You have successfully sing up!", "success");
      reset();
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-primary">
        <div className="max-w-screen-xl mx-auto h-screen w-10/12 ">
          <section className="bg-primary py-12">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md"
              >
                <div className="flex justify-center mx-auto">
                  {/* <img
                      className="w-auto h-7 sm:h-8"
                      src="https://merakiui.com/images/logo.svg"
                      alt=""
                    /> */}
                  <p className="text-xl font-semibold text-center color-primary">
                    Company Logo
                  </p>
                </div>

                <div className="flex items-center justify-center mt-6">
                  <Link
                    to="/signin"
                    className="w-1/3 pb-4 font-medium text-center  capitalize border-b-2 border-solid border-gray-200"
                  >
                    sign in
                  </Link>

                  <Link
                    to="/signup"
                    className="w-1/3 pb-4 font-medium text-center capitalize border-b-2 border-solid border-[#f1a244]"
                  >
                    sign up
                  </Link>
                </div>

                <div className="relative flex items-center mt-8">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="block w-full py-3 text-gray-700 bg-white border border-solid border-gray-300  rounded-lg px-11   focus:border-[#f1a244]  focus:ring-[#f1a244] focus:outline-none focus:ring focus:ring-opacity-60"
                    placeholder="Username"
                    {...register("userName", { required: true })}
                  />{" "}
                  <br />
                </div>
                <div className="relative flex items-center mt-6">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="email"
                    className="block w-full py-3 text-gray-700 bg-white border border-solid border-gray-300  rounded-lg px-11   focus:border-[#f1a244]  focus:ring-[#f1a244] focus:outline-none focus:ring focus:ring-opacity-60"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    className="block w-full py-3 text-gray-700 bg-white border border-solid border-gray-300  rounded-lg px-10   focus:border-[#f1a244]  focus:ring-[#f1a244] focus:outline-none focus:ring focus:ring-opacity-60"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    className="block w-full py-3 text-gray-700 bg-white border border-solid border-gray-300  rounded-lg px-11   focus:border-[#f1a244]  focus:ring-[#f1a244] focus:outline-none focus:ring focus:ring-opacity-60"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", { required: true })}
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f1a244] rounded-lg hover:bg-orange-400"
                  >
                    Sign Up
                  </button>

                  <p className="mt-4 text-center text-gray-600">
                    or sign up with
                  </p>

                  <button className="flex w-full items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-solid border-gray-300 rounded-lg  hover:bg-gray-50">
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>

                    <span className="mx-2">Sign up with Google</span>
                  </button>

                  <div className="mt-6 text-center ">
                    <Link to="/signin" className="text-sm hover:underline">
                      Already have an account? Sing In
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignUp;
