import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import "../css/home.css";
import { ContactForm } from "../components/ContactForm";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginProvider";
import { ArticlesContext } from "../context/ArticlesProvider";
import Footer  from "../components/Footer";
import { EventsContext } from "../context/EventsProvider";
import {carouselImage1} from "../assets/carousel-image1.png";
import {carouselImage2} from "../assets/event-image2.svg";
import {carouselImage3} from "../assets/event-image1.svg";
import {imageAbout} from "../assets/about us.svg";

function Home() {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  // const [event, setEvent] = useState([]);
  // const [article, setArticle] = useState([]);
  const { articles, setArticles } = useContext(ArticlesContext);
  const { events, setEvents } = useContext(EventsContext);

  document.title = "EarthCare | Home";

  if (isLogin) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "white";
  }

  const fetchEvent = () => {
    fetch("https://644dfece4e86e9a4d8ef004c.mockapi.io/events")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data.slice(0, 3));
      });
  };

  const sortedEvents = events.sort((a, b) =>
    b.tanggal
      .split("/")
      .reverse()
      .join()
      .localeCompare(a.tanggal.split("/").reverse().join())
  );

  const fetchArticle = async () => {
    try {
      const url = "https://644e5c2c4e86e9a4d8f6d279.mockapi.io/article";
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.slice(0, 3));
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    fetchEvent();
    fetchArticle();
  }, []);

  let sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.datePost.split("/").reverse()) -
      new Date(a.datePost.split("/").reverse())
  );
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = "https://644e5c2c4e86e9a4d8f6d279.mockapi.io/article";
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setArticles(data.slice(0, 3));
  //     } catch (error) {
  //       console.log("error: " + error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <main>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage1}
              alt="First slide"
            />
            <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div className="text-center wrapper-carousel">
                <h1 className="fw-bold text-wrap">
                  Menanam Pohon Selamatkan Kehidupan
                </h1>
                <p className="text-wrap">
                  Gerakan menanam pohon sebagai upaya melakukan penghijauan dan
                  memperbaiki paru-paru kota
                </p>
                <Link
                  to={`/detailArticle/:${4}?id=${4}`}
                  className="btn-carousel"
                >
                  Baca Sekarang
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage2}
              alt="Second slide"
            />

            <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div className="text-center wrapper-carousel">
                <h1 className="fw-bold text-wrap">
                  Daur Ulang Sampah Selamatkan Lingkungan
                </h1>
                <p className="text-wrap">
                  Sedekahkan sampahmu baik berupa botol plastik, kardus bekas, gelas plastik, buku/kertas, sampah kaca ataupun sampah elektronik.
                </p>
                {isLogin ? (
                <Link
                  to={`/events/${2}`}
                  className="btn-carousel"
                >
                  Ikuti Event
                </Link>
                ) : (
                <Link
                  to={"/login"}
                  className="btn-carousel"
                >
                  Ikuti Event
                </Link>
                )}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage3}
              alt="Third slide"
            />

            <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div className="text-center wrapper-carousel">
                <h1 className="fw-bold text-wrap">
                  Pengelolaan Sungai Untuk Mencegah Kerusakan Sungai
                </h1>
                <p className="text-wrap">
                  Upaya dalam pengelolaan sungai untuk meminimalisir terjadinya kerusakan lingkungan sungai yang ada di indonesia.
                </p>
                {isLogin ? (

                <Link
                  to={`/events/${1}`}
                  className="btn-carousel"
                >
                  Ikuti Event
                </Link>
                ) : (
                <Link
                  to={"/login"}
                  className="btn-carousel"
                >
                  Ikuti Event
                </Link>
                )}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <section>
          <div className="container mt-5">
            <h2 className="text-center fw-bold">Beberapa Event Pilihan, Yuk Ikutan!</h2>
            <p className="text-center text-black-50">
              Daftarkan diri anda untuk mendapatkan pengalaman baru
            </p>
          </div>

          <hr />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            {sortedEvents.map((data, index) => (
              <Card
                style={{ width: "22rem" }}
                className="card-event"
                key={index}
              >
                <Card.Img variant="top" src={data.gambar} />
                <Card.Body>
                  <Card.Title className="title-card">{data.judul}</Card.Title>
                  <Card.Text as="div">
                    <p className="card-text-event">{data.pembuat}</p>
                    <div className="date mb-2">
                      <i className="mt-1 me-2">
                        <FaCalendarAlt />
                      </i>
                      <p className="d-inline ms-1">{data.tanggal}</p>
                    </div>
                    <div className="location">
                      <i className="mt-1 me-2">
                        <FaMapMarker />
                      </i>
                      <p className="d-inline ms-1">{data.lokasi}</p>
                    </div>
                  </Card.Text>
                  {isLogin ? (
                    <div className="d-grid">
                    <Link
                      to={`/events/${data.id}`}
                      className="btn btn-primary btn-event mt-3"
                    >
                      Ikuti Event
                    </Link>
                    </div>
                  ) : (
                    <div className="d-grid">
                    <Link to="/login" className="btn btn-primary btn-event mt-3">
                      Ikuti Event
                    </Link>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="wrapper-showall-event">
            <Link
              to="/event"
              className="btn my-5 fw-bold btn-showall-event"
            >
              Lihat Semua Event
            </Link>
          </div>
        </section>

        <section>
          <div className="fitur-article mt-3">
            <div className="wrapper-article">
              <div className="container-fluid">
                <h2 className="text-center text-white fw-bold">
                  Rekomendasi Artikel
                </h2>
                <p className="text-center text-white-50 mb-5">
                  Beberapa rekomendasi artikel dari kami yang mungkin anda suka
                </p>

                {sortedArticles.map((data, index) => (
                  <div className="row mx-3 mb-4 card-article" key={index}>
                    <div className="col-lg-6 d-flex align-items-center">
                      <img
                        src={data.image}
                        className="img-fluid me-4 rounded-3"
                        alt={data.titleArticle}
                      />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                      <div className="wrapper-text">
                        <h2 className="fw-bold">{data.titleArticle}</h2>
                        <p className="mt-2">{data.description}</p>
                        <div className="date-article mb-4">
                          <i className="fa-solid fa-calendar-days text-muted fa-lg"></i>
                          <p className="d-inline text-black-50 ms-1">
                            {data.datePost}
                          </p>
                        </div>
                        <div className="btn-article">
                          <Link
                            to={`/detailArticle/:${data.id}?id=${data.id}`}
                            className="btn btn-primary border-0 px-3 py-2"
                            id="btnSelengkapnya"
                          >
                            Selengkapnya
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center my-5">
                  <Link
                    to="/article"
                    className="fw-bold btn btn-showall-article"
                  >
                    Lihat Semua Artikel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={imageAbout}
                  className="img-fluid"
                  alt="ilustrasi peduli bumi"
                />
              </div>
              <div className="col-lg-6">
                <p className="fs-3 fw-bold title">About Us</p>
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
      <Footer />
    </>
  );
}

export default Home;
