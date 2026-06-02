import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile} alt="Anusha" className="profile-img" />
      <div className="hero-content">
      <h1>Hi, I'm Anusha Balusupati</h1>

      <h2>Software Developer</h2>

      <p>Java | Python | SQL | Full Stack Development</p>

      <p>
        Passionate about building scalable applications and solving
        real-world problems through technology.
      </p>

      <a href="/resume.pdf" download>
        <button>Download Resume</button>
      </a>
      <div className="social-links">
  <a
    href="https://github.com/Anusha59682"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/anusha-balusupati-4782872ba"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
</div>
    </div>
  </div>
  );
}

export default Hero;