import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
// import withReactContent from "sweetalert2-react-content"
import {BsFillExclamationCircleFill} from "react-icons/bs"
import axios from "axios"
import { LoginContext } from "../context/LoginProvider"
import { UserContext } from "../context/UserProvider"

export const ContactForm = () => {
    // const MySwal = withReactContent(Swal)
    const [inputEmail, setInputEmail] = useState("")
    const [inputFullname, setInputFullname] = useState("")
    const [inputMessage, setInputMessage] = useState("")
    const [invalidEmail, setInvalidEmail] = useState("")
    const [invalidFullname, setInvalidFullname] = useState("")
    const [invalidMessage, setInvalidMessage] = useState("")
    const [iconInvalidEmail, setIconInvalidEmail] = useState("")
    const [iconInvalidFullname, setIconInvalidFullname] = useState("")
    const [iconInvalidMessage, setIconInvalidMessage] = useState("")
    const icon = <BsFillExclamationCircleFill />

    const {isLogin, setIsLogin} = useContext(LoginContext)
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        setIsLogin(sessionStorage.getItem("MyToken") !== null);
        setUser(JSON.parse(sessionStorage.getItem("user") || '{"fullname":"","email":"","id":""}'));
    },[])

    const handleSubmitContact = (e) => {
        e.preventDefault()
        if (isLogin) {
            if (inputEmail !== "" && inputMessage !== "") {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Message sent successfully',
                    showConfirmButton: false,
                    timer: 1500,
                })
    
                axios
                .post("https://6461981c185dd9877e3f45ca.mockapi.io/contact", {
                    fullName: user.fullName,
                    email: inputEmail,
                    message: inputMessage
                })
                .then((res) => {
                    console.log(res.data);
                    setInputEmail("")
                    setInputFullname("")
                    setInputMessage("")
        
                    setInvalidEmail("")
                    setInvalidFullname("")
                    setInvalidMessage("")
        
                    setIconInvalidEmail("")
                    setIconInvalidFullname("")
                    setIconInvalidMessage("")
                })
                .catch((error) => {
                    console.log(error);
                })
    
            } else {
                if (inputEmail === "") {
                    setIconInvalidEmail(icon)
                    setInvalidEmail("Email can't be empty")
                } else if (inputEmail !== "") {
                    setIconInvalidEmail("")
                    setInvalidEmail("")
                }
                if (inputMessage === "") {
                    setIconInvalidMessage(icon)
                    setInvalidMessage("Message can't be empty")
                } else if (inputMessage !== "") {
                    setIconInvalidMessage("")
                    setInvalidMessage("")
                }
            }
        } else {
            if (inputEmail !== "" && inputFullname !== "" && inputMessage !== "") {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Message sent successfully',
                    showConfirmButton: false,
                    timer: 1500,
                })
    
                axios
                .post("https://6461981c185dd9877e3f45ca.mockapi.io/contact", {
                    fullName: inputFullname,
                    email: inputEmail,
                    message: inputMessage
                })
                .then((res) => {
                    console.log(res.data);
                    setInputEmail("")
                    setInputFullname("")
                    setInputMessage("")
        
                    setInvalidEmail("")
                    setInvalidFullname("")
                    setInvalidMessage("")
        
                    setIconInvalidEmail("")
                    setIconInvalidFullname("")
                    setIconInvalidMessage("")
                })
                .catch((error) => {
                    console.log(error);
                })
    
            } else {
                if (inputEmail === "") {
                    setIconInvalidEmail(icon)
                    setInvalidEmail("Email can't be empty")
                } else if (inputEmail !== "") {
                    setIconInvalidEmail("")
                    setInvalidEmail("")
                }
                if (inputFullname === "") {
                    setIconInvalidFullname(icon)
                    setInvalidFullname("Fullname can't be empty")
                } else if (inputFullname !== "") {
                    setIconInvalidFullname("")
                    setInvalidFullname("")
                }
                if (inputMessage === "") {
                    setIconInvalidMessage(icon)
                    setInvalidMessage("Message can't be empty")
                } else if (inputMessage !== "") {
                    setIconInvalidMessage("")
                    setInvalidMessage("")
                }
            }
        }
    }
    
    // console.log(inputEmail);

    return (
        <>
            <section id="content-form">
                <div className="container-fluid mx-auto mt-5 py-3 rounded-5">
                    <div className="row my-5">
                        <div className="col-lg-6 col-md-12 px-5 text-center text-lg-start">
                            <h5 className="text-white fw-medium">Questions, Comments, Concerns?</h5>
                            <h1 className="text-white fw-medium display-3">We&rsquo;d love to <span id="hear">hear</span> from you!</h1>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <form 
                                name="contact-form" 
                                className="contact-form text-white pe-lg-5"
                                onSubmit={handleSubmitContact}
                            >
                                <div className="mb-2">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control form-control-lg shadow-none" 
                                        id="emailContact" 
                                        placeholder="Masukkan email" 
                                        value={inputEmail}
                                        onChange={e => {
                                            setInputEmail(e.target.value)
                                        }}
                                    />
                                    <div className="mt-1 text-warning d-flex align-items-center gap-1" id="invalid-email">{iconInvalidEmail} {invalidEmail}</div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="fullname" className="form-label">Full Name</label>
                                    {isLogin ? (
                                        <input 
                                            type="text" 
                                            className="form-control text-muted form-control-lg shadow-none" 
                                            id="fullnameContact"
                                            placeholder="Masukkan nama lengkap" 
                                            value={user.fullName}
                                            disabled
                                        />
                                    ) : (
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg shadow-none" 
                                            id="fullnameContact"
                                            placeholder="Masukkan nama lengkap" 
                                            value={inputFullname}
                                            onChange={e => {
                                                setInputFullname(e.target.value)
                                            }}
                                        />

                                    )}
                                    <div className="mt-1 text-warning d-flex align-items-center gap-1" id="invalid-fullname">{iconInvalidFullname} {invalidFullname}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea 
                                        className="form-control form-control-lg shadow-none" 
                                        id="messageContact"   
                                        rows="6" 
                                        style={{resize: "none"}}
                                        placeholder="Tulis pertanyaan"
                                        value={inputMessage}
                                        onChange={e => {
                                            setInputMessage(e.target.value)
                                        }}
                                    ></textarea>
                                    <div className="mt-1 text-warning d-flex align-items-center gap-1" id="invalid-message">{iconInvalidMessage} {invalidMessage}</div>
                                </div>
                                <div className="mb-3">
                                    <button 
                                        type="submit" 
                                        id="btnSend" 
                                        className="btn btn-lg w-100 btn-primary border-0"
                                    >
                                        Send Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 