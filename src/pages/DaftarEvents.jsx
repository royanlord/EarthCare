import { useEffect, useState } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaTicketAlt, FaInfoCircle } from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import "../css/detail-events.css";

export default function DaftarEvents() {
  const { id } = useParams();
  const [daftarEvents, setDaftarEvents] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchDaftarEvents();
  }, []);

  const fetchDaftarEvents = async () => {
    try {
      const res = await fetch(
        `https://644dfece4e86e9a4d8ef004c.mockapi.io/detail-events/${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to access data detail events");
      }
      const data = await res.json();
      setDaftarEvents(data);
      setIsLoading(false);
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

    if (address < 6) {
      Swal.fire({
        icon: "error",
        title: "Alamat harus memiliki minimal 6 karakter",
      });
      return false;
    }
    return true;
  };

  // Check Validation
  const handleDaftarEvent = () => {
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
    }
  };

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
              {/* Sementara */}
              <h4 className="mt-4">{daftarEvents.judul}</h4>
              <p className="text__date mt-2">
                <FaInfoCircle className="mb-1" /> Batas pendaftaran sampai
                tanggal {daftarEvents.tanggal}
              </p>
              <p className="mt-2">
                <FaTicketAlt className="ticket__detail" />
                Gratis
              </p>
            </div>
          </Col>

          <Col xs={12} lg={5}>
            <Card className="card__detail p-4 mt-lg-5 mt-sm-2 mb-lg-0 mb-sm-4">
              <h3 className="text-lg-center text-right mb-4">
                Lengkapi Data Anda
              </h3>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupFullName">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Nama Lengkap"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Alamat Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukkan Alamat Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleDaftarEvent}
                  >
                    Pesan Sekarang
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
