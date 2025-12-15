import React from "react";
import image1 from "../assets/DRG.jpg";
import image6 from "../assets/Hospital.png";
import DRG from "../assets/DRG1.jpg";
import DRG1 from "../assets/DRG2.jpg";
import DRM from "../assets/DRM.jpg";
import DRM1 from "../assets/DRM1.jpg";
import DRM2 from "../assets/DRM2.jpg";


const doctors = [
  {
    name: "Dr. Kiran Patel",
    specialty: "Cardiologist",
    image: image1,
    experience: "15+ Years",
    education: "MD (Cardiology), AIIMS Delhi",
    description:
      "Dr. Patel is a senior cardiologist known for his expertise in heart surgeries, angioplasty, and cardiac care. He has treated over 10,000+ patients with compassion and precision.",
  },
  {
    name: "Dr. Rakesh Sharma",
    specialty: "Neurologist",
    image: DRM,
    experience: "12+ Years",
    education: "DM (Neurology), PGI Chandigarh",
    description:
      "Expert in brain & nerve disorders, stroke treatment, and migraine management. Dr. Sharma is well-known for accurate diagnosis and modern neurologic treatments.",
  },
  {
    name: "Dr. Aryan Mehta",
    specialty: "Orthopedic Surgeon",
    image: DRM1,
    experience: "10+ Years",
    education: "MS (Orthopedics), Mumbai",
    description:
      "Specialist in joint replacement, fractures, sports injuries, and spine care. Dr. Mehta is trusted for his surgical precision and patient-friendly nature.",
  },
  {
    name: "Dr. Kavya Rao",
    specialty: "Pediatrician",
    image: DRG,
    experience: "8+ Years",
    education: "MD (Pediatrics), Bangalore Medical College",
    description:
      "A caring pediatrician known for treating newborns, children, and adolescents with a warm and friendly approach.",
  },
  {
    name: "Dr. Sneha Patel",
    specialty: "Gynecologist",
    image: DRG1,
    experience: "11+ Years",
    education: "MD (Gynecology), AIIMS Delhi",
    description:
      "Specializes in women's health, pregnancy care, and reproductive medicine.",
  },
  {
    name: "Dr. Anil Kumar",
    specialty: "General Surgeon",
    image: DRM2,
    experience: "14+ Years",
    education: "MS (General Surgery), CMC Vellore",
    description:
      "Experienced in laparoscopic surgeries, hernia repair, and emergency surgical care.",
  },
];

const Doctors = () => {
  // BANNER STYLES
  const bannerStyle = {
    width: "100%",
    height: "390px",
    backgroundImage: `url(${image6})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    flexDirection: "column",
  };

  const titleStyle = {
    fontSize: "40px",
    fontWeight: "bold",
  };

  const subTitleStyle = {
    fontSize: "18px",
    opacity: 0.9,
  };

  // GRID
  const containerStyle = {
    padding: "40px 25px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  };

  // CARD
  const cardStyle = {
    width: "350px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "white",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
  };

  const imgStyle = {
    width: "100%",
    height: "260px",
    borderRadius: "12px",
    objectFit: "cover",
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1e3d58",
    marginTop: "15px",
  };

  const specStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#4e6e8e",
    marginBottom: "5px",
  };

  const detailStyle = {
    fontSize: "14px",
    color: "#444",
    marginTop: "10px",
    lineHeight: "1.6",
  };

  const highlightStyle = {
    backgroundColor: "#eef5fa",
    padding: "8px 12px",
    borderRadius: "8px",
    display: "inline-block",
    marginTop: "8px",
    fontWeight: "600",
  };

  const btnStyle = {
    marginTop: "15px",
    padding: "10px 18px",
    backgroundColor: "#1e3d58",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  };

  return (
    <>
      {/* === BANNER === */}
      <div style={bannerStyle}>
        <h1 style={titleStyle}>Meet Our Expert Doctors</h1>
        <p style={subTitleStyle}>Experienced • Skilled • Caring</p>
      </div>

      {/* === DOCTOR LIST === */}
      <div style={containerStyle}>
        <div style={gridStyle}>
          {doctors.map((doc, i) => (
            <div
              key={i}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img src={doc.image} alt={doc.name} style={imgStyle} />

              <div style={nameStyle}>{doc.name}</div>
              <div style={specStyle}>{doc.specialty}</div>

              <div style={highlightStyle}>Experience: {doc.experience}</div>
              <div style={highlightStyle}>Education: {doc.education}</div>

              <p style={detailStyle}>{doc.description}</p>

              <button style={btnStyle}>Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
