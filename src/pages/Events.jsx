import { Card, Button, Form } from "react-bootstrap";

export default function Events() {
  return (
    <main className="container mt-5">
      <div className="d-flex justify-content-lg-between justify-content-center align-content-lg-center flex-wrap">
        <section className="title__events text-center text-lg-center">
          <h2>Event Terbaru, Yuk Ikutan!</h2>
          <p>Daftarkan diri anda untuk mendapatkan pengalaman baru</p>
        </section>
        <section
          className="search__events mb-5 mb-lg-5"
          style={{ width: "28rem" }}
        >
          <Form.Control
            className="mt-lg-4"
            type="text"
            name="search"
            id="serach"
            placeholder="search events"
            aria-label="search events"
          />
        </section>
      </div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/royanlord/RWD-EarthCare/c9e081385ee2feab4d0be819d8d5fdcc5b2276c5/assets/images/mencegah%20banjir.svg"
        />
        <Card.Body>
          <Card.Title>Strategi Pengelolaan Sungai</Card.Title>
          <Card.Text>ecoedu</Card.Text>
          <Card.Text>14 Mei 2023</Card.Text>
          <Card.Text>Online, zoom</Card.Text>

          <Button variant="primary">Join Now</Button>
        </Card.Body>
      </Card>
    </main>
  );
}
