import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image5 from "../assets/PatientRoom1.png";
import image6 from "../assets/ICU1.png";

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage: `url(${image6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "390px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About SP Hospital</h1>
          <p className="lead">Excellence | Care | Trust</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-md-6">
            <h2 className="fw-bold text-primary">Who We Are</h2>
            <p className="mt-3">
              SP Hospital is a leading multi-specialty healthcare provider
              offering advanced medical services with a patient-first approach.
            </p>
            <p>
              Our team includes experienced doctors, specialized nurses, and
              trained professionals who work together to deliver exceptional
              care.
            </p>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <img
              src={image5}
              alt="Hospital"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <h3 className="text-primary fw-bold">Our Mission</h3>
              <p className="mt-2">
                To deliver compassionate, affordable, and high-quality medical
                services using advanced technology and skilled professionals.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <h3 className="text-primary fw-bold">Our Vision</h3>
              <p className="mt-2">
                To be the most trusted healthcare institution known for
                innovation, care, and medical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-5">
        <h2 className="text-center fw-bold text-primary mb-4">
          Why Choose SP Hospital?
        </h2>

        <div className="row g-4">
          {[
            { title: "Expert Doctors", text: "Experienced specialists." },
            { title: "24/7 Emergency", text: "Always available for care." },
            { title: "Modern Facilities", text: "State-of-the-art technology." },
            { title: "Patient-First Care", text: "Your comfort comes first." },
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="p-4 text-center bg-white rounded shadow-sm h-100">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
