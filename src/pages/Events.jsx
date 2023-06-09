import { Card, Form, Col, Row, InputGroup } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import notifyNoEvents from "../assets/notify no events.svg";
import "../css/events.css";
import { Navbar } from "../components/Navbar";

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
    document.title = "Loading.."
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

      setTimeout(() => {
        setIsLoading(false);
        document.title = "Events"
      }, 2000)
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
    <>
      <Navbar />
      {isLoading ? (
          <Loading />
        ) : (
          <main id="events" className="container">
            <div className="d-flex justify-content-lg-between mx-3 justify-content-center flex-wrap">
              <section className="title__events">
                <h2>Event Terbaru, Yuk Ikutan!</h2>
                <p className="mb-3">
                  Daftarkan diri anda untuk mendapatkan pengalaman baru
                </p>
              </section>
              <section className="search__events mb-5 mb-lg-5">
                <InputGroup size="lg">
                  <Form.Control
                    className="mt-lg-4"
                    type="text"
                    name="search"
                    id="serach"
                    placeholder="Search"
                    aria-label="search events"
                    autoComplete="off"
                    value={search}
                    onChange={handleSearch}
                  />
                </InputGroup>
              </section>
            </div>
            <Row className="justify-content-center justify-content-lg-center mx-auto align-items-center ">
              {filteredEvents.length === 0 ? (
                <div className="notify d-flex justify-content-center align-items-center flex-column">
                  <img src={notifyNoEvents} alt="events tidak ditemukan" />
                  <p className="d-flex text-center">No events found</p>
                </div>
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
                      <Card.Img
                        className="img-fluid h-100"
                        variant="top"
                        src={data.gambar}
                      />
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
                            <Link to={`/events/${data.id}`} className="btn btn-primary">
                              Join Now
                            </Link>
                          {/* {isLogin ? (
                          ) : (
                            <Link to="/login" className="btn btn-primary">
                              Join Now
                            </Link>
                          )} */}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </main>
        )
      }
    </>
  );
}
