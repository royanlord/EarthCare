import { useEffect, useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarker,
  FaClock,
  FaTicketAlt,
  FaLink,
} from "react-icons/fa";

export default function DetailEvents() {
  const { id } = useParams();
  const [detailEvents, setDetailEvents] = useState(null);

  useEffect(() => {
    fetchDetailEvents();
  }, []);

  const fetchDetailEvents = async () => {
    try {
      const res = await fetch(
        `https://644dfece4e86e9a4d8ef004c.mockapi.io/detail-events/${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to access data detail events");
      }
      const data = await res.json();
      setDetailEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!detailEvents) {
    return <p className="text-center">Loading.....</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <main className="d-flex container mx-5">
        <div>
          <Row>
            <Col xs={12} lg={8}>
              <div>
                <img
                  className="img-fluid mt-5"
                  src={detailEvents.gambar}
                  alt="ilustrasi detail events"
                />
                <h3 className="mt-2">Detail Events</h3>
                <hr />
                <p style={{ textAlign: "justify" }}>{detailEvents.detail}</p>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              <div className="card card-detail-event mt-5">
                <div className="card-body">
                  <h4 className="card-title mb-2 fw-bold">
                    {detailEvents.judul}
                  </h4>
                  <Badge bg="success me-2 mb-3">Lingkungan</Badge>
                  <Badge bg="success">Events</Badge>
                  <div className="date-detail mb-3 mt-3">
                    <FaCalendarAlt />
                    <p className="d-inline text-muted ms-1">
                      {detailEvents.tanggal}
                    </p>
                  </div>
                  <div className="time-detail mb-3">
                    <FaClock />
                    <p className="d-inline text-muted ms-1">
                      {detailEvents.waktu}
                    </p>
                  </div>
                  <div className="ticket-detail mb-3">
                    <FaTicketAlt />
                    <p className="d-inline text-muted ms-1">
                      {detailEvents.tiket}
                    </p>
                  </div>
                  <div className="location-detail mb-3">
                    <FaMapMarker />
                    <p className="d-inline text-muted ms-1">
                      {detailEvents.lokasi}
                    </p>
                  </div>
                  <div className="registration-detail mb-3">
                    <FaLink />
                    <p className="d-inline text-muted ms-1">
                      {detailEvents.pendaftaran}
                    </p>
                  </div>
                  <div className="d-grid mt-2 mt-3 btn-detail-event">
                    <a href="" className="btn btn-primary">
                      Daftar Event
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}
