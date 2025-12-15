import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png";

function Footer() {
  const footerStyle = {
    backgroundColor: "#002147",
    color: "white",
    padding: "35px 15px",
    width: "100%",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const brandStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#FFD700",
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  };

  const boxStyle = {
    marginBottom: "20px",
    textAlign: "left",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <div class="row" style={{
          paddingRight: "10px",
          paddingLeft: "10px"
        }}
        >

          {/* BRAND */}
          <Col md={4} sm={12} style={boxStyle}>
            {/* <h4 style={brandStyle}>SP Hospital</h4> */}
            <img
              src={logo}
              alt="SP Hospital Logo"
              style={{ width: "140px", height: "auto"}}
            />

            <p>Providing high-quality and compassionate medical care.</p>
          </Col>

          {/* QUICK LINKS */}
          <Col md={4} sm={12} style={boxStyle}>
            <h5 style={titleStyle}>Quick Links</h5>

            <p><Link to="/" style={linkStyle}>Home</Link></p>
            <p><Link to="/About" style={linkStyle}>About</Link></p>
            <p><Link to="/Doctors" style={linkStyle}>Doctors</Link></p>
            <p><Link to="/Services" style={linkStyle}>Services</Link></p>
            <p><Link to="/Contact" style={linkStyle}>Contact</Link></p>
          </Col>

          {/* CONTACT INFO */}
          <Col md={4} sm={12} style={boxStyle}>
            <h5 style={titleStyle}>Contact Info</h5>
            <p>📞 +91 98765 43210</p>
            <p>📧 info@sphospital.com</p>
            <p>📍 Ahmedabad, Gujarat</p>
          </Col>

        </div>


        {/* COPYRIGHT */}
        <p
          style={{
            marginTop: "20px",
            borderTop: "1px solid #ffffff44",
            paddingTop: "12px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          © 2025 SP Hospital — All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
