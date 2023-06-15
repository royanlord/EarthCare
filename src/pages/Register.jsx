import "../css/auth.css";
import authImg from "../assets/auth.gif";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import Swal from "sweetalert2";

export const Register = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#115810";
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false)

  const handleRegister = () => {
    // if (!fullName || !email || !password) {
    //   alert("Maaf Fullname, email, dan password wajib diisi");
    //   return;
    // }

    if (fullName === "" && email === "" && password === "") {
      Swal.fire({
        title: "Error",
        text: "Semua input tidak boleh kosong!",
        icon: "error",
      });
    } else if (fullName === "") {
      Swal.fire({
        title: "Error",
        text: "Nama lengkap tidak boleh kosong!",
        icon: "error",
      });
    } else if (email === "") {
      Swal.fire({
        title: "Error",
        text: "Email tidak boleh kosong!",
        icon: "error",
      });
    } else if (password === "") {
      Swal.fire({
        title: "Error",
        text: "Password tidak boleh kosong!",
        icon: "error",
      });
    } else {
      axios
      .post("https://6461981c185dd9877e3f45ca.mockapi.io/register", {
          fullName, 
          email, 
          password
      })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Success",
            text: "Registrasi anda berhasil",
            icon: "success",
          })
          setFullName("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            title: "Error",
            text: "Registrasi gagal!",
            icon: "error",
          });
        });
    }

  };

  const passwordToggle = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <>
      <div className="container auth mt-5 mx-auto">
        <div className="row mx-4">
          <div className="col-md-6">
            <img className="img-fluid mb-sm-3" src={authImg} alt="LottieFiles Register" />
          </div>
          <div className="col-md-6 col-lg-6">
            <h1 className="text-center mb-lg-5 mb-4 title-login">register</h1>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="fullName"
                  id="fullName"
                  placeholder="Fullname"
                  autoComplete="off"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
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
                  id="btn_register"
                  className="btn btn-success btn-lg"
                  type="button"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <span className="text-center mt-4">
                  Do you have an account?&nbsp;
                  <Link className="text-register" to="/login">
                    Login in here
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

