import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate()
  const { createUser,updateProfileInfo } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const photo = e.target.profile.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const checkUpperCase = /[A-Z]/;
    const checkLowerCase = /[a-z]/;
    const minPasswordLength = 6;

    if (!checkUpperCase.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least one uppercase letter.",
      })
    }

    // if (!checkLowerCase.test(password)) {
    //   return toast("Password must have at least one lowercase letter.");
    // }

    // if (password.length < minPasswordLength) {
    //   toast("Password must be at least 6 characters long.");
    // }

    createUser(email, password)
      .then((userCredentails) => {
        // console.log(userCredentails.user);
        updateProfileInfo({
          displayName: name,
          photoURL: photo,
        })
          .then(() => alert("updated!"))
          .catch((error) => alert(error.message));

        alert(`User Registered Successfully! WelCome!`);
        navigate("/");
      })
      .catch((error) => alert("ERROR ", error.message));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-8 mb-8">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-2xl text-center font-bold py-4">
          Sign up Your account!
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo_Url</span>
          </label>
          <input
            type="text"
            name="profile"
            placeholder="your profile"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
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
            className="input input-bordered"
            required
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-[50px] top-[440px] transform -translate-y-1/2"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="form-control">
          <button className="btn btn-success mt-2">Register</button>
        </div>
        <p>
          Already have an account? Click here to <br />
          <Link className="font-bold text-blue-700" to="/signin">
            Sign In{" "}
          </Link>
          now.
        </p>
        <div className="divider">OR</div>
      </form>
      <div className="btn mb-2 mx-6 flex items-center btn-outline">
        <FaGoogle />
        {/* <button onClick={handleGoogleRegistration}>Register with Google</button> */}
      </div>
    </div>
  );
};

export default SignUp;
