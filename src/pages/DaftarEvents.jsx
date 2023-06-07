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

  // Test sweet alert
  const MySwal = withReactContent(Swal);
  const handleDaftarEvent = () => {
    MySwal.fire({
      icon: "success",
      title: "Anda Berhasil Terdaftar ke Acara",
      text: "Silahkan tunggu konfirmasi email dari kami dan kami akan menginformasikan secepat mungkin!",
    });
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
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Alamat Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukkan Alamat Email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                  <Form.Label>Nomor Ponsel</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Masukkan Nomor Ponsel"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAddress">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Masukkan Alamat"
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    className="btn btn-primary"
                    type="submit"
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
