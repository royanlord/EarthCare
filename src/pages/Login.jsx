import "../css/auth.css";
import authImg from "../assets/auth.gif";
import { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false)
  const navigation = useNavigate()

  const payload = {
    email,
    password
  }

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#115810";
  });

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      alert("tidak boleh kosong")
    }

    axios
    .get("https://6461981c185dd9877e3f45ca.mockapi.io/register", payload)
    .then((response) => {
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // localStorage.setItem("MyToken", user.token);
        sessionStorage.setItem("MyToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        alert("Login successful");
        sessionStorage.setItem("user", JSON.stringify(user))
        navigation(`/`)
        // console.log(user);
      } else {
        alert("Invalid email or password");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Login failed");
    });

  }

  const passwordToggle = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <>
      <div className="container auth mt-5 my-5">
        <div className="row mx-4">
          <div className="col-md-6">
            <img
              className="img-fluid mb-sm-3"
              src={authImg}
              alt="LottieFiles Register"
            />
          </div>
          <div className="col-md-6 col-lg-6">
            <h1 className="text-center mb-lg-5 mb-4 title-login">login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control form-control-lg"
                  name="passwordAddress"
                  id="passwordAddress"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-flex justify-content-end">
                  {passwordShown ? (
                    <FaEyeSlash className="passwordToggle text-muted" onClick={passwordToggle} />
                  ) : (
                    <FaEye className="passwordToggle text-muted" onClick={passwordToggle} />
                  )}
                </div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  id="btn_login"
                  className="btn btn-success btn-lg"
                >
                  Login
                </button>
                <span className="text-center mt-4">
                  Don't have an account yet?&nbsp;
                  <Link className="text-register" to="/register">
                    Let's register!
                  </Link>
                  {/* <a href="login.html" className="text-register">
                                        Login in here
                                    </a> */}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


// axios
    //   .get(
    //     "https://6461981c185dd9877e3f45ca.mockapi.io/register",
    //     payload
    //   )
    //   .then((response) => {
    //     const res = response
    //     localStorage.setItem("stringify", JSON.stringify(res))
    //     localStorage.setItem("MyToken", res.data.token)
    //     alert("login berhasil")
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("gagal")
    //   })