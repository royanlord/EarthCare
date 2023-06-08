// import { useState } from "react";
// import { Container, Row, Col, Nav, Navbar, NavbarBrand } from "react-bootstrap";
// import {
//   FaRegNewspaper,
//   FaBullhorn,
//   FaUserAlt,
//   FaRegCaretSquareLeft,
//   FaThLarge,
// } from "react-icons/fa";
// import "../css/dashboard-admin.css";

// export default function DashboardAdmin() {
//   const [sidebarOpen, setSideBarOpen] = useState(false);

//   const handleSideBar = () => {
//     setSideBarOpen(!sidebarOpen);
//   };
//   return (
//     <Container fluid>
//       <Row>
//         <Col
//           lg={3}
//           sm={12}
//           className={`bg-dark d-flex flex-column px-0 ${
//             sidebarOpen ? "sidebar-open" : ""
//           }`}
//           style={{ height: "100vh", width: "41vh" }}
//         >
//           <Nav
//             className="nav d-flex flex-column flex-grow-1 px-5"
//             style={{ textDecoration: "none" }}
//           >
//             <a
//               href=""
//               className="text-white mt-3"
//               style={{ textDecoration: "none", fontSize: "22px" }}
//             >
//               <FaThLarge className="mb-2" /> Admin EarthCare
//             </a>
//             <a
//               href=""
//               className="mb-3 mt-4"
//               style={{ textDecoration: "none", color: "white" }}
//             >
//               <FaRegNewspaper style={{ marginRight: "10px" }} /> Article
//             </a>
//             <a
//               href=""
//               className="mb-3"
//               style={{ textDecoration: "none", color: "white" }}
//             >
//               <FaBullhorn style={{ marginRight: "10px" }} /> Events
//             </a>
//             <a
//               href=""
//               className="mb-3"
//               style={{ textDecoration: "none", color: "white" }}
//             >
//               <FaUserAlt style={{ marginRight: "10px" }} /> Users
//             </a>
//             <a
//               href=""
//               className="mb-3"
//               style={{ textDecoration: "none", color: "white" }}
//             >
//               <FaRegCaretSquareLeft style={{ marginRight: "10px" }} /> Logout
//             </a>
//           </Nav>
//         </Col>
//         <Col lg={9} sm={12}>
//           <Container fluid>
//             <Row>
//               <Col>
//                 <h2>
//                   <FaUserAlt /> Good Morning, Nabil
//                 </h2>
//               </Col>
//             </Row>
//           </Container>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaRegNewspaper,
  FaBullhorn,
  FaUserAlt,
  FaRegCaretSquareLeft,
  FaThLarge,
} from "react-icons/fa";
import "../css/dashboard-admin.css";

export default function DashboardAdmin() {
  return (
    <Container fluid>
      <Row>
        <Col
          lg={3}
          md={6}
          sm={12}
          className="side__left bg-dark d-flex flex-column px-0"
        >
          <Nav className="nav d-flex flex-column px-5">
            <a href="" className="title__admin text-white mt-3">
              <FaThLarge className="mb-2" /> Admin EarthCare
            </a>
            <a href="" className="mb-3 mt-4">
              <FaRegNewspaper style={{ marginRight: "10px" }} /> Article
            </a>
            <a href="" className="mb-3">
              <FaBullhorn style={{ marginRight: "10px" }} /> Events
            </a>
            <a href="" className="mb-3">
              <FaUserAlt style={{ marginRight: "10px" }} /> Users
            </a>
            <a href="" className="mb-3">
              <FaRegCaretSquareLeft style={{ marginRight: "10px" }} /> Logout
            </a>
          </Nav>
        </Col>
        <Col lg={9} md={6} sm={12} className="mt-3 mt-sm-0">
          <Container fluid>
            <Row>
              <Col>
                <h2 className="mt-3">
                  <FaUserAlt /> Good Morning, Nabil
                </h2>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
