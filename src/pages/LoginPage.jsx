import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../checkLogin/UserContext";
const LoginPage = () => {
  const navigate = useNavigate();
  // const {checkUser}= useContext(User);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userLogin, setUserLogin] = useState();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };

  const checkout = () => {
    setUserLogin({ email, pass });
    console.log("uesrLogin", userLogin);
    // if (checkUser(userLogin))
    //   {
    //     console.log("Yess");
    //   }
  };
  return (
    <div className="root square3">
      <h1
        style={{ textTransform: "capitalize", fontSize: "40px" }}
        className="display-1"
      >
        Sign In
      </h1>
      <form>
        {/* Email input */}
        <div
          data-mdb-input-init=""
          className="form-outline mb-4"
          onChange={onChangeEmail}
        >
          Email
          <input type="email" id="form2Example1" className="form-control" />
        </div>
        {/* Password input */}
        <div
          data-mdb-input-init=""
          className="form-outline mb-4"
          onChange={onChangePass}
        >
          Password
          <input type="password" id="form2Example2" className="form-control" />
        </div>
        <button
          type="button"
          data-mdb-button-init=""
          data-mdb-ripple-init=""
          className="btn btn-primary btn-block mb-4"
          // onClick={() => navigate("/", { replace: true })}
          onClick={() => {
            checkout();
          }}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Create an account ?{" "}
            <a onClick={() => navigate("/register", { replace: true })}>
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
