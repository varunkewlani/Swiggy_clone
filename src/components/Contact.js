const Contact = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: "1.2rem" }}>
        If you have any questions or feedback, feel free to reach out to us.
      </p>
      <div style={{ margin: "20px 0" }}>
        <h2>Contact Details:</h2>
        <p><strong>Name:</strong> <span style={{ color: "blueviolet" }}>Varun Kewlani</span></p>
        <p><strong>Email:</strong> <span style={{ color: "blueviolet" }}>varunkewlani.004@gmail.com</span></p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>We look forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default Contact;
