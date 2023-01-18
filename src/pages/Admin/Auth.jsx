import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import './Admin.css'
import Navbar from "../../components/Navbar/Navbar";


const initialState = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

const Auth = () => {
  const [user, setUser] = useState(null);
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealPassword2, setRevealPassword2] = useState(false);

  const toggleBtn = (e) => {
    e.preventDefault();
    setRevealPassword((prevState) => !prevState);
  };

  const toggleBtn2 = (e) => {
    e.preventDefault();
    setRevealPassword2((prevState) => !prevState);
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const { email, password, userName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(user);
        // setActive("adminhome");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (userName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${userName}` });
        // setActive("adminhome");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    }
    navigate("/admin");
  };

  return (
    <>
      <Navbar />
      <div className="auth__container">
        <h2>{signUp ? "Register" : "Login"} </h2>

        <form className="auth__form" onSubmit={handleAuth}>
          {signUp && (
            <div className="auth__divide">
              <div className="auth__input">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="User Name"
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="auth__input">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </div> */}
            </div>
          )}
          <div className="auth__input--big">
            <input
              type="email"
              className="form-control input-text-box"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="auth__input--big admin__password">
            <input
              type={revealPassword ? "text" : "password"}
              className="form-control input-text-box"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button className="icon__container" onClick={toggleBtn}>
              {revealPassword ? (
                <AiOutlineEyeInvisible className="profile__icon" />
              ) : (
                <AiOutlineEye className="profile__icon" />
              )}
            </button>
          </div>
          {signUp && (
            <div className="auth__input--big admin__password">
              <input
                type={revealPassword2 ? "text" : "password"}
                className="form-control input-text-box"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
              <button className="icon__container" onClick={toggleBtn}>
                {revealPassword ? (
                  <AiOutlineEyeInvisible className="profile__icon" />
                ) : (
                  <AiOutlineEye className="profile__icon" />
                )}
              </button>
            </div>
          )}

          <div className="auth__btn--container text-center">
            <button
              className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
              type="submit"
            >
              {!signUp ? "Login" : "Register"}
            </button>
          </div>
        </form>
        <div>
          {/* {!signUp ? (
            <>
              <div>
                <p>
                  Are you an Admin?&nbsp;
                  <span
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#298af2",
                    }}
                    onClick={() => setSignUp(true)}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <p>
                  Already an admin ?&nbsp;
                  <span
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#298af2",
                    }}
                    onClick={() => setSignUp(false)}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Auth;
