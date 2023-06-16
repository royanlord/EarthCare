import { useContext } from "react"
import { ContactForm } from "../components/ContactForm"
import { Navbar } from "../components/Navbar"
import "../css/contact.css"
import { LoginContext } from "../context/LoginProvider"
import Footer from "../components/Footer"

export const Contact = () => {
    const {isLogin, setIsLogin} = useContext(LoginContext)

    document.title = "EarthCare | Contact Us"

    if (isLogin) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "white";
    }

    return (
        <>
            <Navbar />
            <main>
                <section id="jumbotron-contact">
                    <div className="container-fluid bg-dark d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-7 mx-auto">
                                <h1 className="text-white text-center text-wrap fw-semibold display-5">Contact Us About EarthCare Website</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactForm />
                <Footer/>
            </main>
        </>
    )
}