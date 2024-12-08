import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const SignIn = () => {
  const {signInUser,signInWithGoogle } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;


    signInUser (email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      Swal.fire({
        icon: "Success",
        title: "yAy..",
        text: 'User Logged In Successully. welcome!',
      })
      navigate("/");
      
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Sign In Failed : ${error.message}`,
      })
    });
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "Success",
          title: "yAy..",
          text: 'User Logged In Successully with Gmail Account!',
        })
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Sign In Failed : ${error.message}`,
        })
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-8 mb-8">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-3xl text-center font-bold">Sign In Now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered outline-none"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-[50px] top-[227px] transform -translate-y-1/2"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
            {/* Show eye or eye-slash icon */}
          </button>
          <label className="label">
            <Link
              to="/login/reset-password"
              className="label-text-alt link link-hover font-bold"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control ">
          <button className="btn btn-success">Sign In</button>
        </div>
        <p>
          New to this website ? Click here to{" "}
          <Link className="font-bold text-blue-700" to="/signup">
            Sign Up{" "}
          </Link>
          now.
        </p>
        <div className="divider">OR</div>
      </form>
      <div className="btn mb-2 mx-6 flex items-center btn-outline">
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
