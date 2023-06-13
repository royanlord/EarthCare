import { useEffect, useRef, useState } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaTicketAlt, FaInfoCircle, FaArrowLeft } from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "../css/detail-events.css";
// import { env } from "process";

export default function DaftarEvents() {
  const { id } = useParams();
  const [daftarEvents, setDaftarEvents] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [registerClose, setRegisterClose] = useState(false);
  const form = useRef();

  useEffect(() => {
    fetchDaftarEvents();
  }, []);

  const fetchDaftarEvents = async () => {
    try {
      const res = await axios.get(
        `https://644dfece4e86e9a4d8ef004c.mockapi.io/detail-events/${id}`
      );
      setDaftarEvents(res.data);
      setIsLoading(false);

      // Check register end
      const registerDate = new Date(res.data.tanggal);
      const currentDate = new Date();
      if (currentDate > registerDate) {
        setRegisterClose(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p className="loading">Loading....</p>;
  }

  // Validation fullname
  const validateFullname = () => {
    if (!fullname) {
      Swal.fire({
        icon: "error",
        title: "Nama lengkap harus diisi",
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

    if (address.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Alamat harus memiliki minimal 6 karakter",
      });
      return false;
    }
    return true;
  };

  // Check Validation
  const handleDaftarEvent = (e) => {
    e.preventDefault();
    if (
      validateFullname() &&
      validateEmail() &&
      validatePhone() &&
      validateAddress()
    ) {
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

      // Send data register event for api
      const data = {
        fullname,
        email,
        phone,
        address,
      };
      axios
        .post("https://6486fcc9beba6297278f9d83.mockapi.io/form-events", data)
        .then((res) => {
          console.log("Pendaftaran event berhasil dikirim ke server", res.data);
          window.location.href = `/notifikasi/${id}`;
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
  const sendEmailEvents = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0ds3ae",
        "template_u397uty",
        form.current,
        "XM4ogZzyYOFFnUQzU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // console.log(import.meta.env.VITE_APP_SERVICE_ID);

  return (
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
                <FaInfoCircle className="mb-1 me-2" /> Batas pendaftaran sampai
                tanggal {daftarEvents.tanggal}
              </p>
              <p className="mt-2">
                <FaTicketAlt className="ticket__detail" />
                Gratis
              </p>
              <Link
                className="btn btn-dark mb-4 mb-sm-4 fw-semibold"
                to={"http://127.0.0.1:5173/events/2"}
              >
                <FaArrowLeft /> Back to detail event
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
                    disabled={registerClose}
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
                    disabled={registerClose}
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
                    disabled={registerClose}
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
                    disabled={registerClose}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleDaftarEvent}
                    autoComplete="off"
                    disabled={registerClose}
                  >
                    {registerClose ? "Pendaftaran Ditutup" : "Pesan Sekarang"}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
}
