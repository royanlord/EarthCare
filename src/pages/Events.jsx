import { Card, Form, Col, Row } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch("https://644dfece4e86e9a4d8ef004c.mockapi.io/events")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setEvents(result);
  //     });
  // }, []);

  useEffect(() => {
    fetchDataEvents();
  }, []);

  const fetchDataEvents = async () => {
    try {
      const res = await fetch(
        "https://644dfece4e86e9a4d8ef004c.mockapi.io/events"
      );
      if (!res.ok) {
        throw new Error("Failed to access data events");
      }
      const data = await res.json();
      setEvents(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Search events
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredEvents = events.filter((e) => {
    return e.judul.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="container mt-5">
      <div className="d-flex justify-content-lg-between mx-5 justify-content-center flex-wrap">
        <section className="title__events">
          <h2 className="fw-bold">Event Terbaru, Yuk Ikutan!</h2>
          <p className="mb-3">
            Daftarkan diri anda untuk mendapatkan pengalaman baru
          </p>
        </section>
        <section
          className="search__events mb-5 mb-lg-5"
          style={{ width: "24rem" }}
        >
          <Form.Control
            className="mt-lg-4"
            type="text"
            name="search"
            id="serach"
            placeholder="search events"
            aria-label="search events"
            autoComplete="off"
            value={search}
            onChange={handleSearch}
          />
        </section>
      </div>
      <Row className="justify-content-center justify-content-lg-center mx-auto align-items-center">
        {isLoading ? (
          <p className="text-center">Loading....</p>
        ) : filteredEvents.length === 0 ? (
          <p className="text-center fw-bold text-danger">No events found</p>
        ) : (
          filteredEvents.map((data, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-lg-center align-items-center align-items-lg-center flex-column"
            >
              <Card className="card__events shadow mx-md-5 mx-0">
                <Card.Img variant="top" src={data.gambar} />
                <Card.Body>
                  <h5 className="card-title">{data.judul}</h5>
                  <p className="card-text">{data.pembuat}</p>
                  <div className="date d-flex">
                    <i className="d-flex mt-1 me-2">
                      <FaCalendarAlt />
                    </i>
                    <p>{data.tanggal}</p>
                  </div>
                  <div className="location d-flex">
                    <i className="d-flex mt-1 me-2">
                      <FaMapMarker />
                    </i>
                    <p>{data.lokasi}</p>
                  </div>
                  <div className="d-grid btn__join">
                    {/* <a href="./pages/DetailEvents" className="btn btn-primary">
                      Join Now
                    </a> */}
                    <Link to={`/events/${data.id}`} className="btn btn-primary">
                      Join Now
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </main>
  );
}
