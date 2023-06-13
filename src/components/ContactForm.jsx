import { useState } from "react"
import Swal from "sweetalert2"
// import withReactContent from "sweetalert2-react-content"
import {BsFillExclamationCircleFill} from "react-icons/bs"

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

    const handleSubmitContact = (e) => {
        e.preventDefault()
        if (inputEmail !== "" && inputFullname !== "" && inputMessage !== "") {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Message sent successfully',
                showConfirmButton: false,
                timer: 1500,
            })
            setInputEmail("")
            setInputFullname("")
            setInputMessage("")

            setInvalidEmail("")
            setInvalidFullname("")
            setInvalidMessage("")

            setIconInvalidEmail("")
            setIconInvalidFullname("")
            setIconInvalidMessage("")
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
    
    // console.log(inputEmail);

    return (
        <>
            <section id="content-form">
                <div class="container-fluid mx-auto mt-5 pt-5 pb-5 rounded-5">
                    <div class="row my-5">
                        <div class="col-lg-6 col-md-12 px-5 text-center text-lg-start">
                            <h5 class="text-white fw-medium">Questions, Comments, Concerns?</h5>
                            <h1 class="text-white fw-medium display-3">We&rsquo;d love to <span id="hear">hear</span> from you!</h1>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <form 
                                name="contact-form" 
                                class="contact-form text-white pe-lg-5"
                                onSubmit={handleSubmitContact}
                            >
                                <div class="mb-2">
                                    <label htmlFor="email" class="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        class="form-control form-control-lg shadow-none" 
                                        id="emailContact" 
                                        placeholder="Masukkan email" 
                                        value={inputEmail}
                                        onChange={e => {
                                            setInputEmail(e.target.value)
                                        }}
                                    />
                                    <div class="mt-1 text-warning d-flex align-items-center gap-1" id="invalid-email">{iconInvalidEmail} {invalidEmail}</div>
                                </div>
                                <div class="mb-2">
                                    <label htmlFor="fullname" class="form-label">Full Name</label>
                                    <input 
                                        type="text" 
                                        class="form-control form-control-lg shadow-none" 
                                        id="fullnameContact"
                                        placeholder="Masukkan nama lengkap" 
                                        value={inputFullname}
                                        onChange={e => {
                                            setInputFullname(e.target.value)
                                        }}
                                    />
                                    <div class="mt-1 text-warning d-flex align-items-center gap-1" id="invalid-fullname">{iconInvalidFullname} {invalidFullname}</div>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="message" class="form-label">Message</label>
                                    <textarea 
                                        class="form-control form-control-lg shadow-none" 
                                        id="messageContact"   
                                        rows="6" 
                                        style={{resize: "none"}}
                                        placeholder="Tulis pertanyaan"
                                        value={inputMessage}
                                        onChange={e => {
                                            setInputMessage(e.target.value)
                                        }}
                                    ></textarea>
                                    <div class="mt-1 text-warning d-flex align-items-center gap-1" id="invalid-message">{iconInvalidMessage} {invalidMessage}</div>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" id="btnSend" class="btn btn-lg w-100 btn-primary border-0">Send Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 