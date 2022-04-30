import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { account } from "../services/appwriteConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
useEffect(()=>{
  console.log(userDetails);
},[userDetails])
  const signupUser = async (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password && userDetails.name ){
      console.log(userDetails);
      try {
        await account.create(
         userDetails.email,
         userDetails.password,
         userDetails.name
       );
       await account.createSession(userDetails.email, userDetails.password);
 
      //  await account.createVerification("http://localhost:3000/home");
      console.log("Success")
       toast.success("Success");
        navigate('/dashboard')

       
     } catch (error) {
       console.log("here")
       toast.error(`${error.message}`);
     }
    } else {
      toast.error('Fill out the details first!')
    }
   
  };

  return (
    <div>
      <h2 className="mt-5 text-center">Super Auth</h2>
      <h3 className=" text-center">Signup</h3>

      <form className="container">
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                name: e.target.value,
              });
            }}
            type="text"
            className="form-control"
            id="name"
            required
            aria-describedby="name"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                email: e.target.value,
              });
            }}
            type="email"
            className="form-control"
            id="email"
            required
            aria-describedby="email"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              });
            }}
            required
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <span>Already have an account ? </span>{" "}
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>

        <button
          onClick={(e) => signupUser(e)}
          type="submit"
          className="btn btn-success"
        >
          Signup
        </button>
      </form>

   
    
    </div>
  );
};

export default Signup;
