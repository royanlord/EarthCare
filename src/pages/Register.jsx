import "../css/auth.css"
import authImg from "../assets/auth.gif"
import { useLayoutEffect } from "react"
import { Link } from "react-router-dom"

export const Register = () => {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = "#115810"
    })

    return (
        <>
            <div className="container mt-5">
                <div className="row mx-4">
                    <div className="col-md-6">
                        <img className="img-fluid mb-sm-3" src={authImg} alt="LottieFiles Register" />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <h1 className="text-center mb-5 title-login">register</h1>
                        <form>
                            <div className="mb-4">
                                <input type="name" className="form-control form-control-lg" name="fullName" id="fullName"
                                    placeholder="Fullname" autoComplete="off" />
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control form-control-lg" name="emailAddress" id="emailAddress"
                                    placeholder="Email" autoComplete="off" />
                            </div>
                            <div className="mb-4">
                                <input type="password" className="form-control form-control-lg" name="passwordAddress"
                                    id="passwordAddress" placeholder="Password" />
                            </div>
                            <div className="d-grid">
                                <button 
                                    id="btn_register" 
                                    className="btn btn-success btn-lg" 
                                    // onclick="dataAuthRegister()"
                                >
                                    Register
                                </button>
                                <span className="text-center mt-4">
                                    Do you have an account?&nbsp; 
                                    <Link className="text-register" to="/login">
                                        Login in here
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
    )
}