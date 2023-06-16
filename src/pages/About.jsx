import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import "../css/about.css";
import { LoginContext } from "../context/LoginProvider";
import Footer from "../components/Footer";
import ImageAbout1 from "../assets/image1.svg";
import ImageAbout2 from "../assets/image2.svg";

function About() {
  const {isLogin, setIsLogin} = useContext(LoginContext)

  document.title = "EarthCare | About"

  if (isLogin) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "white";
  }

  return (
    <>
      <Navbar />
      <section id="about">
        <div className="container about">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={ImageAbout1}
                alt="Menjaga Bumi"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6" style={{textAlign: "justify"}}>
              <p className="fs-3 fw-bold title">
                EarthCare, <br />
                <span className="fs-1">What is it?</span>
              </p>
              <p>
                &nbsp; &nbsp; &nbsp;EarthCare adalah suatu platform aplikasi berbasis website yang
                berfokus pada kepedulian dan kelestarian alam dimana pada
                mulanya terbentuk karena didasari atas rasa prihatin terhadap
                Bumi yang kian rapuh. Greenpeace sebagai wadah dan tempat untuk
                mengedukasi dan mengajak masyarakat banyak agar lebih peduli
                terhadap kelestarian alam dan juga turut serta untuk menjaganya.
              </p>
              <p>Memberi Solusi. Gerakkan Aksi. Ciptakan Perubahan.</p>
            </div>
          </div>

          <div id="goals" className="row my-5">
            <div className="col-lg-6">
              <p className="fs-3 fw-bold title">
                Goals, <br />
                <span className="fs-1">To Be Achieved</span>
              </p>
              <ol>
                <li>Mengajak masyarakat untuk menjaga kelestarian alam</li>
                <li>
                  Mengedukasi masyarakat tentang pentingnya kelestarian alam
                </li>
                <li>
                  Menumbuhkan rasa kepedulian masyarakat terhadap alam dan
                  ekosistemnya
                </li>
                <li>
                  Sebagai penggerak masyarakat untuk bersama memperbaiki
                  kerusakan alam yang sudah terjadi
                </li>
                <li>
                  Menjaga agar Bumi yang kian rapuh ini tetap mempunyai
                  kemampuan untuk menopang kehidupan seluruh makhluk hidup
                </li>
                <li>Menciptakan masa depan yang bebas bahan racun</li>
              </ol>
            </div>
            <div className="col-lg-6">
              <img
                src={ImageAbout2}
                alt="Menyiram tanaman"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <p className="fs-2 fw-bold text-center">Our Team</p>
          <div className="wrapper mx-auto p-5 d-flex justify-content-center gap-5 rounded-4 flex-wrap text-center text-white lh-1">
            <div>
              <img
                src="https://github.com/Anugerah20/assets/blob/main/Nabil%20Anugerah%20Pangestu.jpeg?raw=true"
                alt="Nabil Anugerah P"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team text-wrap">Nabil Anugerah P</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
            <div>
              <img
                src="https://github.com/Anugerah20/assets/blob/main/Royan%20Farid%20Fathurrahman.jpg?raw=true"
                alt="Royan Farid F"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team text-wrap">Royan Farid F</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
            <div>
              <img
                src="https://github.com/Anugerah20/assets/blob/main/Ghulsan%20Savana%20Ahasya.jpeg?raw=true"
                alt="Ghulsan Savana A"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Ghulsan Savana Ahasya</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
            <div>
              <img
                src="https://github.com/Anugerah20/assets/blob/main/user.png?raw=true"
                alt="Ghulsan Savana A"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Rio Aziz Ginaldi</p>
              <small className="text-white-50">Back-End Developer</small>
            </div>
            <div>
              <img
                src="https://github.com/Anugerah20/assets/blob/main/user.png?raw=true"
                alt="Ghulsan Savana A"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Farhatin Nikmah</p>
              <small className="text-white-50">Back-End Developer</small>
            </div>
          </div>
        </div>

        <Footer/>
      </section>
    </>
  );
}

export default About;
