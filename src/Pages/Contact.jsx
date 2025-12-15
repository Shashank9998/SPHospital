// import React from "react";

// const Contact = () => {
//   const wrapper = {
//     padding: "80px 25px",
//     maxWidth: "1300px",
//     margin: "0 auto",
//     background: "linear-gradient(180deg, #f2f7ff, #ffffff)",
//   };

//   const heading = {
//     fontSize: "46px",
//     fontWeight: "900",
//     textAlign: "center",
//     color: "#1a2d4c",
//     marginBottom: "10px",
//   };

//   const subText = {
//     textAlign: "center",
//     fontSize: "18px",
//     color: "#555",
//     maxWidth: "800px",
//     margin: "0 auto 60px auto",
//     lineHeight: "1.7",
//   };

//   const contactGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
//     gap: "35px",
//     marginBottom: "60px",
//   };

//   const card = {
//     background: "rgba(255,255,255,0.85)",
//     padding: "35px",
//     borderRadius: "18px",
//     border: "1px solid rgba(210,210,210,0.4)",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
//     backdropFilter: "blur(8px)",
//     transition: "0.35s",
//     cursor: "pointer",
//   };

//   const hover = (e) => {
//     e.currentTarget.style.transform = "translateY(-12px)";
//     e.currentTarget.style.boxShadow = "0 15px 45px rgba(0,0,0,0.22)";
//     e.currentTarget.style.border = "1px solid #1e7cc1";
//   };

//   const leave = (e) => {
//     e.currentTarget.style.transform = "translateY(0px)";
//     e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
//     e.currentTarget.style.border = "1px solid rgba(210,210,210,0.4)";
//   };

//   const icon = {
//     fontSize: "45px",
//     marginBottom: "12px",
//     color: "#1e7cc1",
//   };

//   const title = {
//     fontSize: "24px",
//     fontWeight: "800",
//     marginBottom: "10px",
//     color: "#1a2d4c",
//   };

//   const desc = {
//     fontSize: "16px",
//     lineHeight: "1.7",
//     color: "#555",
//   };

//   // FORM FIELD STYLE
//   const formWrapper = {
//     background: "white",
//     padding: "45px",
//     borderRadius: "20px",
//     boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
//     marginBottom: "60px",
//   };

//   const formTitle = {
//     fontSize: "30px",
//     fontWeight: "800",
//     color: "#1a2d4c",
//     marginBottom: "20px",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "15px",
//     marginBottom: "20px",
//     borderRadius: "10px",
//     border: "1px solid #d2d6dc",
//     fontSize: "16px",
//     outline: "none",
//     transition: "0.3s",
//   };

//   const inputFocus = (e) => {
//     e.currentTarget.style.border = "1px solid #1e7cc1";
//     e.currentTarget.style.boxShadow = "0 0 8px rgba(30,124,193,0.4)";
//   };

//   const inputBlur = (e) => {
//     e.currentTarget.style.border = "1px solid #d2d6dc";
//     e.currentTarget.style.boxShadow = "none";
//   };

//   const button = {
//     padding: "15px 35px",
//     background: "#1e7cc1",
//     color: "white",
//     border: "none",
//     borderRadius: "10px",
//     fontSize: "18px",
//     cursor: "pointer",
//     fontWeight: "700",
//     marginTop: "10px",
//     transition: "0.3s",
//   };

//   const btnHover = (e) => {
//     e.currentTarget.style.background = "#145c92";
//     e.currentTarget.style.transform = "scale(1.05)";
//   };

//   const btnLeave = (e) => {
//     e.currentTarget.style.background = "#1e7cc1";
//     e.currentTarget.style.transform = "scale(1)";
//   };

//   const mapBox = {
//     marginTop: "50px",
//     borderRadius: "20px",
//     overflow: "hidden",
//     boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
//   };

//   return (
//     <div style={wrapper}>
//       {/* ---------- PAGE TITLE ---------- */}
//       <h1 style={heading}>Contact Us</h1>
//       <p style={subText}>
//         We're here to help 24×7. Reach out to us for appointments, emergency support,
//         or general inquiries. Our team will respond quickly and provide the best possible assistance.
//       </p>

//       {/* ---------- CONTACT CARDS ---------- */}
//       <div style={contactGrid}>

//         {/* CARD 1 */}
//         <div style={card} onMouseEnter={hover} onMouseLeave={leave}>
//           <div style={icon}>📍</div>
//           <h2 style={title}>Our Location</h2>
//           <p style={desc}>
//             123 Health Avenue,<br />
//             Sunrise Medical Road,<br />
//             Ahmedabad, Gujarat – 380001
//           </p>
//         </div>

//         {/* CARD 2 */}
//         <div style={card} onMouseEnter={hover} onMouseLeave={leave}>
//           <div style={icon}>📞</div>
//           <h2 style={title}>Phone Numbers</h2>
//           <p style={desc}>
//             General Inquiry: +91 98765 43210 <br />
//             Appointment: +91 90909 80808 <br />
//             Emergency 24×7: <strong style={{ color: "#e63946" }}>108</strong>
//           </p>
//         </div>

//         {/* CARD 3 */}
//         <div style={card} onMouseEnter={hover} onMouseLeave={leave}>
//           <div style={icon}>✉️</div>
//           <h2 style={title}>Email Support</h2>
//           <p style={desc}>
//             contact@hospital.com <br />
//             appointments@hospital.com <br />
//             support@hospital.com
//           </p>
//         </div>
//       </div>

//       {/* ---------- EMERGENCY BOX ---------- */}
//       <div
//         style={{
//           background: "#ffeded",
//           padding: "25px",
//           borderRadius: "15px",
//           borderLeft: "6px solid #e63946",
//           marginBottom: "60px",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//           fontSize: "18px",
//           color: "#444",
//         }}
//       >
//         <strong style={{ fontSize: "22px", color: "#e63946" }}>
//           🚨 Emergency Helpline:
//         </strong>{" "}
//         For life-threatening situations, call immediately:{" "}
//         <strong style={{ color: "#b60009" }}>+91 100 / 108</strong><br />
//         Our emergency team is available 24×7 with ambulance support and advanced care.
//       </div>

//       {/* ---------- CONTACT FORM ---------- */}
//       <div style={formWrapper}>
//         <h2 style={formTitle}>Send Us a Message</h2>

//         <input
//           type="text"
//           placeholder="Your Full Name"
//           style={inputStyle}
//           onFocus={inputFocus}
//           onBlur={inputBlur}
//         />

//         <input
//           type="email"
//           placeholder="Your Email Address"
//           style={inputStyle}
//           onFocus={inputFocus}
//           onBlur={inputBlur}
//         />

//         <input
//           type="text"
//           placeholder="Phone Number"
//           style={inputStyle}
//           onFocus={inputFocus}
//           onBlur={inputBlur}
//         />

//         <textarea
//           placeholder="Write your message here..."
//           rows="5"
//           style={{ ...inputStyle, height: "130px", resize: "none" }}
//           onFocus={inputFocus}
//           onBlur={inputBlur}
//         />

//         <button
//           style={button}
//           onMouseEnter={btnHover}
//           onMouseLeave={btnLeave}
//         >
//           Send Message
//         </button>
//       </div>

//       {/* ---------- GOOGLE MAP EMBED ---------- */}
//       <div style={mapBox}>

//         <iframe 
//         title="Hospital Location"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3001033591804!2d72.66775637555413!3d23.049456779154923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8780ccff9aef%3A0x51166b3994210c7b!2sCreative%20Design%20%26%20Multimedia%20Institute%20%7C%20Web%20Development%20Institute%20%7C%20Web%20Design%20Institute%7C%20Mobile%20App%20Development%20Institute!5e0!3m2!1sen!2sin!4v1765384072136!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  // ===================== STYLES =====================
  const pageWrapper = {
    padding: "0",
    background: "#f4f8ff",
    fontFamily: "Arial, sans-serif",
  };

  const hero = {
    padding: "90px 25px",
    background: "linear-gradient(135deg, #1e7cc1, #4bb2ff)",
    textAlign: "center",
    color: "white",
    borderBottomLeftRadius: "70px",
    borderBottomRightRadius: "70px",
  };

  const heroTitle = {
    fontSize: "50px",
    fontWeight: "900",
    marginBottom: "12px",
  };

  const heroSubtitle = {
    fontSize: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.8",
  };

  const mainWrapper = {
    maxWidth: "1350px",
    margin: "0 auto",
    padding: "60px 25px",
  };

  const sectionHeading = {
    fontSize: "38px",
    fontWeight: "900",
    color: "#1a2d4c",
    marginBottom: "10px",
  };

  const underline = {
    width: "80px",
    height: "6px",
    background: "#1e7cc1",
    borderRadius: "5px",
    marginBottom: "30px",
  };

  const twoColumn = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  };

  const infoBox = {
    background: "white",
    padding: "35px",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
  };

  const icon = {
    fontSize: "50px",
    marginBottom: "15px",
    color: "#1e7cc1",
  };

  const infoTitle = {
    fontSize: "25px",
    fontWeight: "800",
    marginBottom: "10px",
  };

  const infoText = {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#444",
  };

  const formBox = {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
  };

  const formInput = {
    width: "100%",
    padding: "16px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const formButton = {
    background: "#1e7cc1",
    color: "white",
    padding: "15px 35px",
    borderRadius: "10px",
    border: "none",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "10px",
  };

  const emergencyBox = {
    margin: "60px 0",
    background: "#ffe5e5",
    padding: "30px",
    borderLeft: "8px solid #ff3b3b",
    borderRadius: "12px",
    fontSize: "20px",
    color: "#444",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  };

  const mapBox = {
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
    marginBottom: "80px",
  };

  // ===================== HOVER EFFECTS =====================
  const hoverBox = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.20)";
  };

  const leaveBox = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  };

  const buttonHover = (e) => {
    e.currentTarget.style.background = "#145c92";
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const buttonLeave = (e) => {
    e.currentTarget.style.background = "#1e7cc1";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={pageWrapper}>

      {/* =============== RESPONSIVE MEDIA QUERIES =============== */}
      <style>
        {`
          @media (max-width: 1024px) {
            .two-col {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 36px !important;
            }
            .hero-sub {
              font-size: 16px !important;
              width: 100% !important;
            }
            .map-box iframe {
              height: 300px !important;
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 28px !important;
            }
            .form-box {
              padding: 25px !important;
            }
            .contact-info {
              padding: 25px !important;
            }
            .contact-info h3 {
              font-size: 20px !important;
            }
            .contact-info p {
              font-size: 15px !important;
            }
            .btn-submit {
              width: 100% !important;
            }
          }
        `}
      </style>

      {/* =============== HERO SECTION =============== */}
      <section style={hero} className="hero">
        <h1 style={heroTitle} className="hero-title">Contact Us</h1>
        <p style={heroSubtitle} className="hero-sub">
          We're available 24×7 to help with appointments, emergency support, and healthcare inquiries.
        </p>
      </section>

      {/* =============== MAIN SECTION =============== */}
      <section style={mainWrapper}>
        <h2 style={sectionHeading}>Get In Touch</h2>
        <div style={underline}></div>

        {/* ---------- TWO COLUMN RESPONSIVE GRID ---------- */}
        <div style={twoColumn} className="two-col">

          {/* LEFT COLUMN – CONTACT INFO */}
          <div>

            {/* LOCATION */}
            <div
              style={infoBox}
              className="contact-info"
              onMouseEnter={hoverBox}
              onMouseLeave={leaveBox}
            >
              <div style={icon}>📍</div>
              <h3 style={infoTitle}>Our Location</h3>
              <p style={infoText}>
                123 Health Avenue,<br />
                Sunrise Road,<br />
                Ahmedabad, Gujarat – 380001
              </p>
            </div>

            <br />

            {/* PHONE */}
            <div
              style={infoBox}
              className="contact-info"
              onMouseEnter={hoverBox}
              onMouseLeave={leaveBox}
            >
              <div style={icon}>📞</div>
              <h3 style={infoTitle}>Phone Numbers</h3>
              <p style={infoText}>
                General: +91 98765 43210 <br />
                Appointments: +91 90909 80808 <br />
                Emergency: <strong style={{ color: "red" }}>108</strong>
              </p>
            </div>

            <br />

            {/* EMAIL */}
            <div
              style={infoBox}
              className="contact-info"
              onMouseEnter={hoverBox}
              onMouseLeave={leaveBox}
            >
              <div style={icon}>✉️</div>
              <h3 style={infoTitle}>Email</h3>
              <p style={infoText}>
                support@hospital.com <br />
                doctors@hospital.com <br />
                contact@hospital.com
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN – CONTACT FORM */}
          <div style={formBox} className="form-box">
            <h3 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "18px" }}>
              Send Us a Message
            </h3>

            <input style={formInput} placeholder="Full Name" />
            <input style={formInput} placeholder="Email Address" />
            <input style={formInput} placeholder="Phone Number" />
            <textarea
              rows="6"
              placeholder="Your message..."
              style={{ ...formInput, height: "140px", resize: "none" }}
            ></textarea>

            <button
              style={formButton}
              className="btn-submit"
              onMouseEnter={buttonHover}
              onMouseLeave={buttonLeave}
            >
              Submit Message
            </button>
          </div>

        </div>

        {/* =============== EMERGENCY SECTION =============== */}
        <div style={emergencyBox}>
          🚨 <strong style={{ color: "#d30000" }}>Emergency Helpline:</strong>
          Call <strong style={{ color: "#b50000" }}>+91 108</strong> for immediate ambulance & medical support.
        </div>

        {/* =============== MAP SECTION =============== */}
        <div style={mapBox} className="map-box">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3001033591804!2d72.66775637555413!3d23.049456779154923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8780ccff9aef%3A0x51166b3994210c7b!2sCreative%20Design%20%26%20Multimedia%20Institute%20%7C%20Web%20Development%20Institute%20%7C%20Web%20Design%20Institute%7C%20Mobile%20App%20Development%20Institute!5e0!3m2!1sen!2sin!4v1765384072136!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>
    </div>
  );
};

export default Contact;
