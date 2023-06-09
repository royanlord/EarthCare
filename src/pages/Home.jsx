import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import "../css/home.css";
import { ContactForm } from "../components/ContactForm"
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner position-relative">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="assets/images/carousel-image1.png"
                class="d-block w-100"
                alt="menanam pohon"
              />
              <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
                <div class="text-center wrapper-carousel">
                  <h1 class="fw-bold text-wrap">
                    Menanam Pohon Selamatkan Kehidupan
                  </h1>
                  <p class="text-wrap">
                    Gerakan menanam pohon sebagai upaya melakukan penghijauan
                    dan memperbaiki paru-paru kota
                  </p>
                  <button
                    class="btn btn-carousel"
                    onclick="window.location.href='event.html'"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="assets/images/carousel-image2.png"
                class="d-block w-100"
                alt="menanam pohon"
              />
              <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
                <div class="text-center wrapper-carousel">
                  <h1 class="fw-bold">
                    Menanam Pohon <br />
                    Selamatkan Kehidupan
                  </h1>
                  <p class="text-wrap">
                    Gerakan menanam pohon sebagai upaya melakukan penghijauandan
                    memperbaiki paru-paru kota
                  </p>
                  <button
                    class="btn btn-carousel"
                    onclick="window.location.href='event.html'"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="assets/images/carousel-image3.png"
                class="d-block w-100"
                alt="menanam pohon"
              />
              <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
                <div class="text-center wrapper-carousel">
                  <h1 class="fw-bold">
                    Menanam Pohon <br />
                    Selamatkan Kehidupan
                  </h1>
                  <p class="text-wrap">
                    Gerakan menanam pohon sebagai upaya melakukan penghijauan
                    dan memperbaiki paru-paru kota
                  </p>
                  <button
                    class="btn btn-carousel"
                    onclick="window.location.href='event.html'"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev d-md-block"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next d-md-block"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/assets/carousel-image1.png"
              alt="First slide"
            />
            <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div class="text-center wrapper-carousel">
                <h1 class="fw-bold text-wrap">
                  Menanam Pohon Selamatkan Kehidupan
                </h1>
                <p class="text-wrap">
                  Gerakan menanam pohon sebagai upaya melakukan penghijauan dan
                  memperbaiki paru-paru kota
                </p>
                <button
                  class="btn-carousel"
                  onclick="window.location.href='event.html'"
                >
                  Join Now
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/assets/carousel-image2.png"
              alt="Second slide"
            />

            <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div class="text-center wrapper-carousel">
                <h1 class="fw-bold text-wrap">
                  Menanam Pohon Selamatkan Kehidupan
                </h1>
                <p class="text-wrap">
                  Gerakan menanam pohon sebagai upaya melakukan penghijauan dan
                  memperbaiki paru-paru kota
                </p>
                <button
                  class="btn-carousel"
                  onclick="window.location.href='event.html'"
                >
                  Join Now
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/assets/carousel-image3.png"
              alt="Third slide"
            />

            <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div class="text-center wrapper-carousel">
                <h1 class="fw-bold text-wrap">
                  Menanam Pohon Selamatkan Kehidupan
                </h1>
                <p class="text-wrap">
                  Gerakan menanam pohon sebagai upaya melakukan penghijauan dan
                  memperbaiki paru-paru kota
                </p>
                <button
                  class="btn-carousel"
                  onclick="window.location.href='event.html'"
                >
                  Join Now
                </button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <section>
          <div class="container mt-5">
            <h2 class="text-center fw-bold">Event Terbaru, Yuk Ikutan!</h2>
            <p class="text-center text-black-50">
              Daftarkan diri anda untuk mendapatkan pengalaman baru
            </p>
          </div>

          <hr />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="../src/assets/event-image1.svg" />
              <Card.Body>
                <Card.Title>Strategi Pengelolaan Sungai</Card.Title>
                <Card.Text>
                  <p className="text-black-50">ecoedu</p>
                  <div class="date mb-2">
                    <i class="mt-1 me-2">
                      <FaCalendarAlt />
                    </i>
                    <p class="d-inline text-muted ms-1">14 Mei 2023</p>
                  </div>
                  <div class="location">
                    <i class="mt-1 me-2">
                      <FaMapMarker />
                    </i>
                    <p class="d-inline text-muted ms-1">Online, zoom</p>
                  </div>
                </Card.Text>
                <Button variant="primary" className="btn-event w-100">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="../src/assets/event-image2.svg" />
              <Card.Body>
                <Card.Title>Gerakan Sedekah Sampah</Card.Title>
                <Card.Text>
                  <p className="text-black-50">tkn_psl</p>
                  <div class="date mb-2">
                    <i class="mt-1 me-2">
                      <FaCalendarAlt />
                    </i>
                    <p class="d-inline text-muted ms-1">8 April 2023</p>
                  </div>
                  <div class="location">
                    <i class="mt-1 me-2">
                      <FaMapMarker />
                    </i>
                    <p class="d-inline text-muted ms-1">
                      Halaman Masjid Raya Bintaro Jaya
                    </p>
                  </div>
                </Card.Text>
                <Button variant="primary" className="btn-event w-100">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="../src/assets/event-image3.svg" />
              <Card.Body>
                <Card.Title>Perhitungan Gas Rumah Kaca</Card.Title>
                <Card.Text>
                  <p className="text-black-50">ecoedu</p>
                  <div class="date mb-2">
                    <i class="mt-1 me-2">
                      <FaCalendarAlt />
                    </i>
                    <p class="d-inline text-muted ms-1">16 Maret 2023</p>
                  </div>
                  <div class="location">
                    <i class="mt-1 me-2">
                      <FaMapMarker />
                    </i>
                    <p class="d-inline text-muted ms-1">Online, zoom</p>
                  </div>
                </Card.Text>
                <Button variant="primary" className="btn-event w-100">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="wrapper-showall-event">
            <Link
              to="/event"
              type="button"
              class="btn my-5 btn-showall-event"
              onclick="window.location.href='event.html'"
            >
                Show All Events
            </Link>
          </div>
        </section>

        <section>
          <div class="fitur-article mt-3">
            <div class="wrapper-article">
              <div class="container">
                <h2 class="text-center text-white fw-bold">
                  Rekomendasi Artikel
                </h2>
                <p class="text-center text-white-50 mb-5">
                  Beberapa rekomendasi artikel dari kami yang mungkin anda suka
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card mb-3 left-article border-0">
                      <img
                        src="../src/assets/article-image1.svg"
                        class="card-img-top"
                        alt="kebakaran hutan"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Penyebab Terjadinya Kebakaran Hutan dan Cara
                          Mencegahnya
                        </h5>
                        <p class="card-text">
                          Kebakaran hutan seringkali terjadi secara alami di
                          daerah vegetasi kering. Kebakaran hutan disebut
                          sebagai kebakaran semak atau kebakaran gurun
                          tergantung pada area di mana hal ini terjadi.
                          Kebakaran hutan ialah terbakarnya sesuatu yang
                          menimbulkan bahaya atau mendatangkan bencana...
                        </p>
                        <div class="text-center btn-article">
                          <a href="" class="btn w-50">
                            Read
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg">
                    <div class="row">
                      <div class="col mid-article">
                        <div class="card mb-3 right-article border-0">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                src="../src/assets/article-image2.svg"
                                class="img-fluid rounded-start"
                                alt="sampah menyebabkan banjir"
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">
                                  Menumpuknya Sampah di Sungai Menjadi Penyebab
                                  Utama Banjir
                                </h5>
                                <p class="card-text">
                                  Bencana banjir yang terjadi disebabkan oleh
                                  curah hujan yang tinggi dan ulah warga
                                  setempat yang membuang sampah ke sungai
                                  sehingga menyebabkan airnya sungai meluap ke
                                  pemukiman warga. Membuang sampah sembarangan
                                  di sungai memberikan dampak...
                                </p>
                                <div class="text-center btn-article">
                                  <a href="" class="btn w-50">
                                    Read
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg">
                        <div class="card mb-3 right-article border-0">
                          <div class="row g-0">
                            <div class="col-md-4">
                              <img
                                src="../src/assets/article-image3.svg"
                                class="img-fluid rounded-start"
                                alt="polusi udara dari pabrik"
                              />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">
                                  Polusi Udara Serta Dampaknya Bagi Manusia dan
                                  Lingkungan
                                </h5>
                                <p class="card-text">
                                  Polusi udara menjadi bahaya yang mengancam
                                  kesehatan manusia. Kita bisa dengan mudah
                                  mengetahui adanya polusi dengan udara yang
                                  berwarna atau berbau. Polusi udara banyak
                                  ditemukan di daerah perkotaan. Menurut data...
                                </p>
                                <div class="text-center btn-article">
                                  <a href="" class="btn w-50">
                                    Read
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center my-5">
                  <Link
                    to="/article"
                    type="button"
                    className="btn btn-showall-article"
                    onclick="window.location.href='event.html'"
                  >
                    Show All Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container mt-5">
            <div class="row">
              <div class="col-lg-6">
                <img
                  src="../src/assets/about us.svg"
                  class="img-fluid"
                  alt="ilustrasi peduli bumi"
                />
              </div>
              <div class="col-lg-6">
                <p class="fs-3 fw-bold title">About Us</p>
                <p>
                  EarthCare adalah suatu platform aplikasi berbasis website yang
                  berfokus pada kepedulian dan kelestarian alam dimana pada
                  mulanya terbentuk karena didasari atas rasa prihatin terhadap
                  Bumi yang kian rapuh. Greenpeace sebagai wadah dan tempat
                  untuk mengedukasi dan mengajak masyarakat banyak agar lebih
                  peduli terhadap kelestarian alam dan juga turut serta untuk
                  menjaganya.
                </p>
                <p>Memberi Solusi. Gerakkan Aksi. Ciptakan Perubahan.</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
    </>
  );
}

export default Home;
