import { ContactForm } from "../components/ContactForm";
import "../css/contact.css";

export const Contact = () => {
  return (
    <>
      <main>
        <section id="jumbotron-contact">
          <div className="container-fluid bg-dark d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-7 mx-auto">
                <h1 className="text-white text-center text-wrap fw-semibold display-5">
                  Contact Us About EarthCare Website
                </h1>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
    </>
  );
};
