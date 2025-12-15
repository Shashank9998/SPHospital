import React from "react";

const Services = () => {
  const wrapper = {
    padding: "70px 25px",
    maxWidth: "1300px",
    margin: "0 auto",
    backgroundColor: "#f7f9fc",
  };

  const heading = {
    fontSize: "42px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "15px",
    color: "#1e3557",
  };

  const subText = {
    textAlign: "center",
    fontSize: "18px",
    maxWidth: "780px",
    margin: "0 auto 50px auto",
    color: "#555",
    lineHeight: "1.8",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
    gap: "35px",
  };

  const card = {
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
    padding: "30px",
    transition: "0.35s",
    cursor: "pointer",
    border: "1px solid #e4e7eb",
  };

  const iconStyle = {
    fontSize: "45px",
    marginBottom: "15px",
    color: "#1e7cc1",
  };

  const title = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#1e3557",
  };

  const desc = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#555",
  };

  const onHover = (e) => {
    e.currentTarget.style.transform = "translateY(-12px)";
    e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.25)";
    e.currentTarget.style.border = "1px solid #1e7cc1";
  };

  const onLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
    e.currentTarget.style.border = "1px solid #e4e7eb";
  };

  return (
    <div style={wrapper}>
      
      {/* -------- HEADER -------- */}
      <h1 style={heading}>Our Medical Services</h1>
      <p style={subText}>
        Our hospital provides advanced, reliable, and patient-centered healthcare. 
        Every department is equipped with modern technology, experienced doctors, 
        and a commitment to delivering the best medical support.
      </p>

      {/* -------- GRID -------- */}
      <div style={grid}>

        {/* CARD 1 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>❤️</div>
          <h2 style={title}>Cardiology</h2>
          <p style={desc}>
            Advanced heart care including ECG, stress tests, angiography, angioplasty, 
            cardiac surgery, and long-term heart health management. Our expert team 
            ensures accurate diagnosis and safe treatment.
          </p>
        </div>

        {/* CARD 2 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>🦴</div>
          <h2 style={title}>Orthopedics</h2>
          <p style={desc}>
            Comprehensive bone & joint care including fracture treatment, joint replacement, 
            spine care, sports injury treatment, and physiotherapy for faster recovery.
          </p>
        </div>

        {/* CARD 3 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>🧠</div>
          <h2 style={title}>Neurology</h2>
          <p style={desc}>
            Diagnosis and treatment for migraines, epilepsy, stroke, neuropathy, Parkinson’s 
            disease, and spinal disorders with advanced neurological testing.
          </p>
        </div>

        {/* CARD 4 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>🩺</div>
          <h2 style={title}>General Surgery</h2>
          <p style={desc}>
            Safe and effective surgeries including laparoscopic procedures, hernia repair, 
            gallbladder removal, appendix surgery, and emergency trauma operations.
          </p>
        </div>

        {/* CARD 5 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>👶</div>
          <h2 style={title}>Maternity & Child Care</h2>
          <p style={desc}>
            Complete maternal care with safe deliveries, newborn care, pediatric consultation, 
            vaccinations, and neonatal ICU support for a healthy start to life.
          </p>
        </div>

        {/* CARD 6 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>🔬</div>
          <h2 style={title}>Diagnostic & Laboratory</h2>
          <p style={desc}>
            Advanced laboratory testing including blood tests, imaging (X-ray, MRI, CT Scan), 
            ultrasound, ECG, hormone tests, and pathology for accurate diagnosis.
          </p>
        </div>

        {/* CARD 7 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>🚑</div>
          <h2 style={title}>Emergency & Trauma Care</h2>
          <p style={desc}>
            24×7 emergency support with ambulance service, ICU care, trauma response, 
            emergency surgery, and rapid life-saving intervention.
          </p>
        </div>

        {/* CARD 8 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>🤸</div>
          <h2 style={title}>Physiotherapy & Rehabilitation</h2>
          <p style={desc}>
            Expert physiotherapists provide rehab for injuries, post-surgery recovery, 
            neurological issues, joint pain, and muscle strengthening programs.
          </p>
        </div>

        {/* CARD 9 */}
        <div style={card} onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div style={iconStyle}>✨</div>
          <h2 style={title}>Dermatology & Skin Care</h2>
          <p style={desc}>
            Skin care treatments including acne removal, pigmentation correction, 
            laser hair removal, anti-aging therapies, and cosmetic dermatology.
          </p>
        </div>

      </div>

      {/* -------- WHY CHOOSE US -------- */}
      <div style={{ marginTop: "70px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "20px",
            color: "#1e3557",
          }}
        >
          Why Choose Our Hospital?
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            maxWidth: "900px",
            margin: "0 auto",
            color: "#444",
            lineHeight: "1.8",
          }}
        >
          We provide world-class healthcare with modern medical technology,
          highly qualified doctors, 24×7 emergency support, advanced diagnostic 
          systems, and a patient-first approach that ensures comfort, safety, 
          and complete care at every step.
        </p>
      </div>

    </div>
  );
};

export default Services;

