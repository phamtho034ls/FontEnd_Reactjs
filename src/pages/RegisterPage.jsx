import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../checkLogin/UserContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(User);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target?.value);
  };
  const onChangePass = (e) => {
    setPass(e.target?.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target?.value);
  };
  const onClickSignIn = ({ product }) => {
    addUser(product);
  };
  return (
    <div>
      <section
        className="bg-image"
        style={
          {
            // backgroundImage: 'url("./Ro")'
          }
        }
      >
        <div className="mask d-flex align-items-center  gradient-custom-3">
          <div className="container h-80">
            <div className="row d-flex justify-content-center align-items-center h-50">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    <form>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={onChangeUserName}
                        />
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">
                          Phone
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={onChangePhone}
                        />
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={onChangeEmail}
                        />
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          onChange={onChangePass}
                        />
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          // onClick={() => navigate("/login", { replace: true })}
                          onClick={() => {
                            onClickSignIn({
                              id: Math.floor(Math.random() * 100),
                              name: userName,
                              pass: pass,
                              phone: phone,
                              email: email,
                            });
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u
                            onClick={() =>
                              navigate("/login", { replace: true })
                            }
                          >
                            Login here
                          </u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
