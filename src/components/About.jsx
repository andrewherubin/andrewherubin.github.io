function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        I’m a software engineer with experience building 
        full-stack applications and cloud-native services.
      </p>
      <div className="about-subsection">
        <h3>Education</h3>
        <ul>
          <li>B.Sc. in Computer Science, University of North Texas</li>
          <li>A.Sc. in Computer Programming, Dallas College</li>
        </ul>
      </div>
      <div className="about-subsection">
        <h3>Certifications</h3>
        <ul>
          <li>AWS Certified Solutions Architect</li>
          <li>AWS Certified AI Practitioner</li>
          <li>AWS CloudEndure Subject Matter Expert</li>
        </ul>
      </div>
      <a
        href="/resume-andrew-herubin.pdf"
        download
        className="resume-button"
      >
        Download Resume
      </a>
    </section>
  );
}

export default About;
