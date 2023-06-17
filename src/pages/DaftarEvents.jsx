import { useContext, useEffect, useState, useRef } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaTicketAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "../css/detail-events.css";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";
import { LoginContext } from "../context/LoginProvider";
import Footer from "../components/Footer";
// import { env } from "process";

export default function DaftarEvents() {
  const { id } = useParams();
  const [daftarEvents, setDaftarEvents] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // useState event end
  // const [registerClose, setRegisterClose] = useState(false);
  const form = useRef();
  const navigation = useNavigate();

  const { isLogin, setIsLogin } = useContext(LoginContext);

  if (isLogin) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "white";
  }

  useEffect(() => {
    document.title = "Loading..";
    fetchDaftarEvents();
  }, []);

  const fetchDaftarEvents = async () => {
    try {
      const res = await axios.get(
        `https://644dfece4e86e9a4d8ef004c.mockapi.io/detail-events/${id}`
      );
      setDaftarEvents(res.data);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Check register end
      // const registerDate = new Date(res.data.tanggal);
      // const currentDate = new Date();
      // if (currentDate > registerDate) {
      //   setRegisterClose(true);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  // if (isLoading) {
  //   return <p className="loading">Loading....</p>;
  // }

  // Validation fullname
  const validateFullname = () => {
    if (!fullname) {
      Swal.fire({
        icon: "error",
        title: "Nama lengkap harus diisi",
      });
      return false;
    }

    if (fullname.length < 5) {
      Swal.fire({
        icon: "error",
        title: "Nama lengkap harus 5 karakter",
      });
      return false;
    }
    return true;
  };

  // Validation Email
  const validateEmail = () => {
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Email harus diisi",
      });
      return false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Alamat Email tidak valid",
      });
      return false;
    }
    return true;
  };

  // Validation Phone
  const validatePhone = () => {
    if (!phone) {
      Swal.fire({
        icon: "error",
        title: "Nomor ponsel harus diisi",
      });
      return false;
    }

    if (phone.length < 11) {
      Swal.fire({
        icon: "error",
        title: "Nomor ponsel harus 11 angka",
      });
      return false;
    }
    return true;
  };

  // Validation Address
  const validateAddress = () => {
    if (!address) {
      Swal.fire({
        icon: "error",
        title: "Alamat harus diisi",
      });
      return false;
    }

    if (address.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Alamat harus memiliki minimal 6 karakter",
      });
      return false;
    }
    return true;
  };

  // Check Validation
  const handleDaftarEvent = async (e) => {
    e.preventDefault();
    if (
      validateFullname() &&
      validateEmail() &&
      validatePhone() &&
      validateAddress()
    ) {
      // Send data register event for api
      const data = {
        fullname,
        email,
        phone,
        address,
      };

      await emailjs
        .send(
          "service_a0ds3ae",
          "template_u397uty",
          {
            from_name: "EarthCare",
            user_name: fullname,
            judul: daftarEvents.judul,
            user_email: email,
            reply_to: "-",
          },
          "XM4ogZzyYOFFnUQzU"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("emailjs", result);
            // Success Validation Register Events
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              icon: "success",
              title: "Anda Berhasil Terdaftar Ke Acara",
            });
            setFullname("");
            setEmail("");
            setPhone("");
            setAddress("");
          },
          (error) => {
            console.log(error.text);
            console.log("emailjs", error);
          }
        );

      await axios
        .post("https://6486fcc9beba6297278f9d83.mockapi.io/form-events", data)
        .then((res) => {
          console.log("Pendaftaran event berhasil dikirim ke server", res.data);
          // window.location.href = "/notifikasi";
          navigation(`/notifikasi`);
        })
        .catch((error) => {
          console.error(
            "Gagal melakukan pengiriman pendaftaran event ke server",
            error
          );
        });
    }
  };

  // Send email notification events
  const sendEmailEvents = async (e) => {
    e.preventDefault();

    const data = {
      from_name: "EarthCare",
      user_name: fullname,
      judul: daftarEvents.judul,
      user_email: email,
      reply_to: "-",
    };

    // emailjs.send("service_a0ds3ae","template_u397uty",{
    //   from_name: "EarthCare",
    //   user_name: "Royan",
    //   judul: "hai",
    //   user_email: "rikowizard123@gmail.com",
    //   reply_to: "-",
    //   });

    // await emailjs
    //   .send(
    //     "service_a0ds3ae",
    //     "template_u397uty",
    //     {
    //       from_name: "EarthCare",
    //       user_name: "royan",
    //       judul: "hai",
    //       user_email: "rikowizard123@gmail",
    //       reply_to: "-",
    //     },
    //     "XM4ogZzyYOFFnUQzU"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("emailjs", result.toString())
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       console.log("emailjs", error.toString())
    //     }
    //   );
  };
  // console.log(form.current);
  // console.log(import.meta.env.VITE_APP_SERVICE_ID);

  return (
    <>
      {(document.title = "Registrasi Event")}
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
        <div className="daftar__events d-flex justify-content-center align-items-center">
          <main className="d-flex container mx-5">
            <Row>
              <Col xs={12} lg={7}>
                <div className="card__image">
                  <img
                    className="img-fluid mt-5"
                    src={daftarEvents.gambar}
                    alt="ilustrasi detail events"
                  />
                  <h4 className="mt-4">{daftarEvents.judul}</h4>
                  <p className="text__date mt-2">
                    <FaClock className="mb-1 me-2" /> Batas pendaftaran
                    sampai tanggal {daftarEvents.tanggal}
                  </p>
                  <p className="mt-2">
                    <FaTicketAlt className="ticket__detail" />
                    Gratis
                  </p>
                  <Link
                    className="btn btn-dark mb-4 mb-sm-4 fw-semibold"
                    to={`/events/${id}`}
                  >
                    <FaArrowLeft /> Kembali ke detail event
                  </Link>
                </div>
              </Col>

              <Col xs={12} lg={5}>
                <Card className="card__detail p-4 mt-lg-5 mt-sm-5 mb-sm-5 mb-5">
                  <h3 className="text-lg-center text-right mb-lg-2">
                    Lengkapi Data Anda
                  </h3>
                  <div className="border__bottom"></div>
                  <Form ref={form} onSubmit={sendEmailEvents}>
                    <Form.Group className="mb-3" controlId="formGroupFullName">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Lengkap"
                        name="user_name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Alamat Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Masukkan Alamat Email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPhone">
                      <Form.Label>Nomor Ponsel</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Masukkan Nomor Ponsel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupAddress">
                      <Form.Label>Alamat</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Masukkan Alamat"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        autoComplete="off"
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleDaftarEvent}
                      >
                        Daftar Sekarang
                      </Button>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </main>
        </div>
        <Footer/>
      </div>
      )}
    </>
  );
}
