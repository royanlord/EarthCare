import { useEffect, useState } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarker,
  FaClock,
  FaTicketAlt,
  FaInfoCircle,
  FaLink,
} from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function DaftarEvents() {
  const { id } = useParams();
  const [daftarEvents, setDaftarEvents] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchDaftarEvents();
  }, []);

  const fetchDaftarEvents = async () => {
    try {
      const res = await fetch(
        `https://644dfece4e86e9a4d8ef004c.mockapi.io/events/${id}`
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

  // Test sweet alert
  const MySwal = withReactContent(Swal);
  const handleDaftarEvent = () => {
    MySwal.fire({
      icon: "success",
      title: "Anda Berhasil Terdaftar ke Acara",
      text: "Silahkan tunggu konfirmasi email dari kami dan kami akan menginformasikan secepat mungkin!",
    });
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="detail__events d-flex justify-content-center align-items-center">
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
              <h4 className="mt-4 fw-bold">{daftarEvents.judul}</h4>
              <p className="mt-2" style={{ color: "#ce3b01" }}>
                <FaInfoCircle className="mb-1" /> Batas pendaftaran sampai
                tanggal {daftarEvents.tanggal}
              </p>
              <p className="mt-2">
                <FaTicketAlt
                  style={{ color: "#ce3b01", marginRight: "10px" }}
                />
                Gratis
              </p>
            </div>
          </Col>

          <Col xs={12} lg={5}>
            <Card className="p-4 mt-5" style={{ background: "#F0F0F0" }}>
              <h4 className="text-lg-center text-right mb-4">
                Formulir Daftar Event
              </h4>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupFullName">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control type="text" placeholder="Fullname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" placeholder="My Number Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Address"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button className="btn btn-primary" type="submit">
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
