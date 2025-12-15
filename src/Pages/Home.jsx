// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import image from "../assets/Image.png";
// import image1 from "../assets/Image1.png";
// import image3 from "../assets/ICU.png";
// import image4 from "../assets/Lab.png";
// import image5 from "../assets/PatientRoom.png";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // ================= SIMPLE SLIDER STYLE =================
// const slideImageStyle = {
//   width: "100%",
//   height: "670px",
//   objectFit: "cover"
// };

// const captionContainer = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   textAlign: "center",
//   color: "#fff",
//   width: "100%",
//   padding: "0 20px"
// };

// const captionTitle = {
//   fontSize: "40px",
//   fontWeight: "700",
//   textShadow: "0px 3px 10px rgba(0,0,0,0.8)"
// };

// const captionText = {
//   fontSize: "20px",
//   textShadow: "0px 3px 8px rgba(0,0,0,0.7)"
// };

// const boxedSection = {
//   maxWidth: "1100px",
//   margin: "auto",
//   padding: "50px 20px",
//   textAlign: "center"
// };

// // ================= HOME PAGE =================
// function Home() {
//   return (
//     <div>

//       {/* ================= SLIDER ================= */}
//       <Carousel interval={3000} fade controls indicators>

//         {/* Slide 1 */}
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image}
//             alt="Hospital Front"
//             style={slideImageStyle}
//           />
//           <div style={captionContainer}>
//             <h3 style={captionTitle}>Modern Healthcare Facility</h3>
//             <p style={captionText}>Delivering compassionate and advanced medical care.</p>
//           </div>
//         </Carousel.Item>

//         {/* Slide 2 */}
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image1}
//             alt="Emergency Care"
//             style={slideImageStyle}
//           />
//           <div style={captionContainer}>
//             <h3 style={captionTitle}>24/7 Emergency Services</h3>
//             <p style={captionText}>Immediate care by experienced doctors.</p>
//           </div>
//         </Carousel.Item>

//         {/* Slide 3 */}
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image3}
//             alt="ICU Facility"
//             style={slideImageStyle}
//           />
//           <div style={captionContainer}>
//             <h3 style={captionTitle}>Advanced ICU & Critical Care</h3>
//             <p style={captionText}>Top-class life-support systems & trained specialists.</p>
//           </div>
//         </Carousel.Item>

//         {/* Slide 4 */}
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image4}
//             alt="Diagnostics Center"
//             style={slideImageStyle}
//           />
//           <div style={captionContainer}>
//             <h3 style={captionTitle}>Precision Diagnostics</h3>
//             <p style={captionText}>Accurate test results with modern equipment.</p>
//           </div>
//         </Carousel.Item>

//         {/* Slide 5 */}
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={image5}
//             alt="Patient Room"
//             style={slideImageStyle}
//           />
//           <div style={captionContainer}>
//             <h3 style={captionTitle}>Comfortable Patient Rooms</h3>
//             <p style={captionText}>A peaceful and hygienic recovery environment.</p>
//           </div>
//         </Carousel.Item>

//       </Carousel>

//       {/* ================= ABOUT SECTION ================= */}
//       <section style={boxedSection}>
//         <h2 style={{ fontSize: "32px", fontWeight: "700" }}>About Our Hospital</h2>
//         <p style={{ maxWidth: "750px", margin: "auto", fontSize: "17px" }}>
//           We provide world-class medical services with highly experienced doctors and advanced medical
//           equipment to ensure the best care for every patient.
//         </p>
//       </section>

//       {/* ================= SERVICES SECTION ================= */}
//       <section style={boxedSection}>
//         <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Our Services</h2>

//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "20px",
//             marginTop: "25px",
//           }}
//         >
//           {[
//             ["Emergency Care", "24/7 emergency support from trained medical teams."],
//             ["ICU & Critical Care", "Advanced ICU units with life-saving facilities."],
//             ["Diagnostics", "High-accuracy imaging and lab testing services."],
//           ].map(([title, text]) => (
//             <div
//               key={title}
//               style={{
//                 width: "300px",
//                 backgroundColor: "#f8f8f8",
//                 padding: "20px",
//                 borderRadius: "10px",
//                 boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//               }}
//             >
//               <h3>{title}</h3>
//               <p>{text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= DOCTORS SECTION ================= */}
//       <section style={boxedSection}>
//         <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Our Doctors</h2>

//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "25px",
//             marginTop: "25px",
//           }}
//         >
//           {[image, image1, image3].map((img, i) => (
//             <div
//               key={i}
//               style={{
//                 width: "260px",
//                 backgroundColor: "white",
//                 padding: "18px",
//                 borderRadius: "10px",
//                 boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//                 textAlign: "center",
//               }}
//             >
//               <img src={img} alt="Doctor" style={{ width: "100%", borderRadius: "10px" }} />
//               <h4 style={{ marginTop: "10px" }}>Dr. Specialist</h4>
//               <p>Expert Department</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CONTACT FORM ================= */}
//       <section
//         style={{
//           ...boxedSection,
//           backgroundColor: "#eef6ff",
//           borderRadius: "10px",
//         }}
//       >
//         <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Contact Us</h2>

//         <form
//           style={{
//             maxWidth: "550px",
//             margin: "auto",
//             backgroundColor: "white",
//             padding: "30px",
//             borderRadius: "10px",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//           }}
//         >
//           {["Full Name", "Email", "Phone Number"].map((label) => (
//             <div key={label} style={{ marginBottom: "15px" }}>
//               <label style={{ fontWeight: "600" }}>{label}</label>
//               <input
//                 type="text"
//                 placeholder={`Enter ${label}`}
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   marginTop: "5px",
//                 }}
//               />
//             </div>
//           ))}

//           <label style={{ fontWeight: "600" }}>Message</label>
//           <textarea
//             placeholder="Write your message..."
//             rows="4"
//             style={{
//               width: "100%",
//               padding: "12px",
//               borderRadius: "6px",
//               border: "1px solid #ccc",
//               marginTop: "5px",
//             }}
//           ></textarea>

//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "12px",
//               backgroundColor: "#002147",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               fontSize: "17px",
//               marginTop: "20px",
//             }}
//           >
//             Send Message
//           </button>
//         </form>
//       </section>

//     </div>
//   );
// }

// export default Home;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/Image.png";
import image1 from "../assets/Image1.png";
import image3 from "../assets/ICU.png";
import image4 from "../assets/Lab.png";
import DRG3 from "../assets/DRG3.jpg";
import DRG4 from "../assets/DRG4.jpg";
import DRM3 from "../assets/DRM3.jpg";
import image5 from "../assets/PatientRoom.png";
import 'bootstrap/dist/css/bootstrap.min.css';

// ================= SIMPLE SLIDER STYLE =================
const slideImageStyle = {
  width: "100%",
  height: "670px",
  objectFit: "cover",
};

const captionContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#fff",
  width: "100%",
  padding: "0 20px",
};

const captionTitle = {
  fontSize: "40px",
  fontWeight: "700",
  textShadow: "0px 3px 10px rgba(0,0,0,0.8)",
};

const captionText = {
  fontSize: "20px",
  textShadow: "0px 3px 8px rgba(0,0,0,0.7)",
};

const boxedSection = {
  maxWidth: "1100px",
  margin: "auto",
  padding: "50px 20px",
  textAlign: "center",
};

// ================= HOME PAGE =================
function Home() {
  return (
    <div>

      {/* ================= SLIDER ================= */}
      <Carousel interval={3000} fade controls indicators>

        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="Hospital Front" style={slideImageStyle} />
          <div style={captionContainer}>
            <h3 style={captionTitle}>Modern Healthcare Facility</h3>
            <p style={captionText}>Delivering compassionate and advanced medical care.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Emergency Care" style={slideImageStyle} />
          <div style={captionContainer}>
            <h3 style={captionTitle}>24/7 Emergency Services</h3>
            <p style={captionText}>Immediate care by experienced doctors.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="ICU Facility" style={slideImageStyle} />
          <div style={captionContainer}>
            <h3 style={captionTitle}>Advanced ICU & Critical Care</h3>
            <p style={captionText}>Top-class life-support systems & trained specialists.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Diagnostics" style={slideImageStyle} />
          <div style={captionContainer}>
            <h3 style={captionTitle}>Precision Diagnostics</h3>
            <p style={captionText}>Accurate test results with modern equipment.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Patient Room" style={slideImageStyle} />
          <div style={captionContainer}>
            <h3 style={captionTitle}>Comfortable Patient Rooms</h3>
            <p style={captionText}>A peaceful and hygienic recovery environment.</p>
          </div>
        </Carousel.Item>

      </Carousel>

      {/* ================= ABOUT SECTION ================= */}
      <section style={boxedSection}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
          About SP Hospital
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "auto",
            fontSize: "17px",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          SP Hospital is committed to delivering advanced, compassionate, and affordable
          healthcare. With modern medical technology, experienced doctors, and a
          patient-first approach, we ensure that every individual receives the highest
          quality medical care.
          <br /><br />
          Our hospital provides world-class treatment facilities including emergency care,
          ICU services, diagnostic imaging, pathology, and specialized departments to
          serve patients with dedication and excellence.
        </p>

        {/* Mission & Vision Box */}
        {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
            marginTop: "20px",
          }}
        > */}
        {/* Mission */}
        {/* <div
            style={{
              width: "300px",
              backgroundColor: "#f8f8f8",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Our Mission</h3>
            <p style={{ fontSize: "16px" }}>
              To provide accessible and high-quality medical care with compassion,
              modern technology, and expert doctors.
            </p>
          </div> */}

        {/* Vision */}
        {/* <div
            style={{
              width: "300px",
              backgroundColor: "#f8f8f8",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>Our Vision</h3>
            <p style={{ fontSize: "16px" }}>
              To become a leading healthcare institution known for excellence, trust,
              service, and advanced medical innovations.
            </p>
          </div>
        </div> */}

        {/* Highlights */}
        {/* <div style={{ marginTop: "35px" }}>
          <h3 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "15px" }}>
            Why Patients Trust Us
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "17px",
              lineHeight: "1.8",
              maxWidth: "500px",
              margin: "auto",
            }}
          >
            <li>✔ Experienced specialist doctors</li>
            <li>✔ Modern diagnostic and ICU facility</li>
            <li>✔ 24/7 emergency care</li>
            <li>✔ Hygienic and comfortable environment</li>
            <li>✔ Patient-centered medical services</li>
          </ul>
        </div> */}
      </section>


      {/* ================= SERVICES SECTION ================= */}
      <section style={boxedSection}>
        <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Our Services</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {[
            ["Emergency Care", "24/7 emergency support from trained medical teams."],
            ["ICU & Critical Care", "Advanced ICU units with life-saving facilities."],
            ["Diagnostics", "High-accuracy imaging and lab testing services."],
          ].map(([title, text], index) => (
            <div
              key={index}
              style={{
                width: "300px",
                backgroundColor: "#f8f8f8",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
              }}
            >
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= DOCTORS SECTION ================= */}
      <section style={boxedSection}>
        <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Our Doctors</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          {[
            {
              img: DRG3,
              name: "Dr. Mani Patel",
              dept: "Cardiology Specialist",
            },
            {
              img: DRG4,
              name: "Dr. Anjali Mehta",
              dept: "Neurology Expert",
            },
            {
              img: DRM3,
              name: "Dr. Rohan Sharma",
              dept: "Orthopedic Surgeon",
            },
          ].map((doctor, i) => (
            <div
              key={i}
              style={{
                width: "300px",
                height: "350px",
                backgroundColor: "white",
                padding: "0",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h4 style={{ margin: "8px 0", fontSize: "20px" }}>
                  {doctor.name}
                </h4>
                <p style={{ margin: 0, fontSize: "15px" }}>
                  {doctor.dept}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ================= CONTACT FORM ================= */}
      <section
        style={{
          ...boxedSection,
          backgroundColor: "#eef6ff",
          borderRadius: "10px",
          paddingBottom: "20px",
          marginBottom: "25px",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Contact Us</h2>

        <form
          style={{
            maxWidth: "550px",
            margin: "auto",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          {["Full Name", "Email", "Phone Number"].map((label, idx) => (
            <div key={idx} style={{ marginBottom: "15px" }}>
              <label style={{ fontWeight: "600" }}>{label}</label>
              <input
                type="text"
                placeholder={`Enter ${label}`}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
            </div>
          ))}

          <label style={{ fontWeight: "600" }}>Message</label>
          <textarea
            placeholder="Write your message..."
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#002147",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "17px",
              marginTop: "20px",
            }}
          >
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}

export default Home;

