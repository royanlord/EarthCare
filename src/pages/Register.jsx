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
            <div class="container mt-5">
                <div class="row mx-4">
                    <div class="col-md-6">
                        <img class="img-fluid mb-sm-3" src={authImg} alt="LottieFiles Register" />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <h1 class="text-center mb-5 title-login">register</h1>
                        <form>
                            <div class="mb-4">
                                <input type="name" class="form-control form-control-lg" name="fullName" id="fullName"
                                    placeholder="Fullname" autocomplete="off" />
                            </div>
                            <div class="mb-4">
                                <input type="email" class="form-control form-control-lg" name="emailAddress" id="emailAddress"
                                    placeholder="Email" autocomplete="off" />
                            </div>
                            <div class="mb-4">
                                <input type="password" class="form-control form-control-lg" name="passwordAddress"
                                    id="passwordAddress" placeholder="Password" />
                            </div>
                            <div class="d-grid">
                                <button 
                                    id="btn_register" 
                                    class="btn btn-success btn-lg" 
                                    // onclick="dataAuthRegister()"
                                >
                                    Register
                                </button>
                                <span class="text-center mt-4">
                                    Do you have an account?&nbsp; 
                                    <Link class="text-register" to="/login">
                                        Login in here
                                    </Link>
                                    {/* <a href="login.html" class="text-register">
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