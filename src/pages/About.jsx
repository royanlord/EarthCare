import "../css/about.css";

function About() {
  return (
    <>
      <section>
        <div className="container about">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="../src/assets/image1.svg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <p className="fs-3 fw-bold title">
                EarthCare, <br />
                <span className="fs-1">What is it?</span>
              </p>
              <p>
                EarthCare adalah suatu platform aplikasi berbasis website yang
                berfokus pada kepedulian dan kelestarian alam dimana pada
                mulanya terbentuk karena didasari atas rasa prihatin terhadap
                Bumi yang kian rapuh. Greenpeace sebagai wadah dan tempat untuk
                mengedukasi dan mengajak masyarakat banyak agar lebih peduli
                terhadap kelestarian alam dan juga turut serta untuk menjaganya.
              </p>
              <p>Memberi Solusi. Gerakkan Aksi. Ciptakan Perubahan.</p>
            </div>
          </div>

          <div className="row my-5">
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
                src="../src/assets/image2.svg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <p className="fs-2 fw-bold text-center">Our Team</p>
          <div className="wrapper p-5 d-flex justify-content-center gap-5 rounded-4 flex-wrap text-center text-white lh-1">
            <div>
              <img
                src="../src/assets/nabil.svg"
                alt="Nabil Anugerah P"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Nabil Anugerah P</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
            <div>
              <img
                src="../src/assets/royan.svg"
                alt="Royan Farid F"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Royan Farid F</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
            <div>
              <img
                src="../src/assets/ghulsan.svg"
                alt="Ghulsan Savana A"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Ghulsan Savana A</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
            <div>
              <img
                src="../src/assets/ghulsan.svg"
                alt="Ghulsan Savana A"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Ghulsan Savana A</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
            <div>
              <img
                src="../src/assets/ghulsan.svg"
                alt="Ghulsan Savana A"
                className="bg-primary rounded-circle"
              />
              <p className="fs-4 fw-bold team">Ghulsan Savana A</p>
              <small className="text-white-50">Front-End Developer</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
