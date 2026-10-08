import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Palette,
  QrCode,
  Server,
  Smartphone,
  UserRound,
  X,
  ChevronDown
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Classroom Availability Monitoring System",
    type: "Web System / Thesis Project",
    description:
      "A web-based classroom monitoring concept using QR codes to help students quickly check whether classrooms in the ITE and GS Buildings are available.",
    icon: <QrCode size={25} />,
    tags: ["React", "Web", "QR Code", "Database"]
  },
  {
    title: "Programmer Portfolio",
    type: "Personal Website",
    description:
      "A responsive personal profile website designed to showcase programming skills, projects, education, and current work.",
    icon: <Globe size={25} />,
    tags: ["HTML", "CSS", "React.js"]
  },
  {
    title: "Java Programming Activities",
    type: "Academic Projects",
    description:
      "Practice projects involving object-oriented programming, linked lists, stacks, queues, and other programming fundamentals.",
    icon: <Code2 size={25} />,
    tags: ["Java", "OOP", "Data Structures"]
  }
];

const skills = [
  ["HTML5", "Web Structure"],
  ["CSS3", "Responsive Design"],
  ["JavaScript", "Web Programming"],
  ["React.js", "UI Development"],
  ["Java", "OOP & Programming"],
  ["SQL", "Database Basics"],
  ["GitHub", "Version Control"],
  ["VS Code", "Development"]
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <nav className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Joven<span className="accent">.</span></span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "works", "skills", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's Talk</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="eyebrow"><span></span> AVAILABLE FOR PROJECTS</div>
            <h1>
              Programmer <br />
              <span className="gradient-text">Profile.</span>
            </h1>
            <p className="hero-subtitle">
              Hi, I'm <strong>Joven M. Balacano</strong> — a BSIT student and aspiring
              programmer who enjoys building useful, modern, and responsive digital experiences.
            </p>

            <div className="hero-buttons">
              <a className="button primary" href="#works">View My Work <ArrowUpRight size={18} /></a>
              <a className="button secondary" href="#about">About Me <ChevronDown size={18} /></a>
            </div>

            <div className="quick-stats">
              <div><strong>BSIT</strong><span>Student</span></div>
              <div><strong>Web</strong><span>Development</span></div>
              <div><strong>Java</strong><span>Programming</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-orbit orbit-one"></div>
            <div className="code-orbit orbit-two"></div>
            <div className="profile-card">
              <div className="profile-glow"></div>
              <img src="/profile.jpg" alt="Joven M. Balacano" />
              <div className="profile-label">
                <span className="status-dot"></span>
                <div>
                  <strong>Joven M. Balacano</strong>
                  <small>Programmer Portfolio</small>
                </div>
              </div>
            </div>
            <div className="floating-code code-one">&lt;code /&gt;</div>
            <div className="floating-code code-two">01</div>
            <div className="floating-code code-three">{`{ }`}</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div><p>GET TO KNOW ME</p><h2>About Me</h2></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="large-text">
                I'm <span className="accent">Joven M. Balacano</span>, a Bachelor of Science
                in Information Technology student interested in programming, web development,
                and building practical software solutions.
              </p>
              <p>
                I enjoy learning by creating projects. My current work combines programming
                fundamentals with web technologies, database concepts, and system development.
                I am continuously improving my skills and exploring better ways to turn ideas
                into working applications.
              </p>
              <div className="info-grid">
                <div><UserRound size={18}/><span>Role<strong>Programmer / BSIT Student</strong></span></div>
                <div><Monitor size={18}/><span>Focus<strong>Web Development</strong></span></div>
                <div><Database size={18}/><span>Learning<strong>Systems & Databases</strong></span></div>
                <div><Code2 size={18}/><span>Interest<strong>Programming</strong></span></div>
              </div>
            </div>

            <div className="terminal-card">
              <div className="terminal-top"><span></span><span></span><span></span><small>joven-profile.js</small></div>
              <pre>{`const developer = {
  name: "Joven M. Balacano",
  role: "Programmer",
  education: "BSIT Student",

  interests: [
    "Web Development",
    "Programming",
    "System Development"
  ],

  goal: "Keep learning. Keep building."
};`}</pre>
            </div>
          </div>
        </section>

        <section id="works" className="section works">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div><p>WHAT I'M BUILDING</p><h2>Current Works</h2></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>
                  <span>0{index + 1}</span>
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div><p>TOOLS & TECHNOLOGIES</p><h2>Skills</h2></div>
          </div>

          <div className="skills-layout">
            <div className="skills-intro">
              <div className="big-icon"><Code2 size={38}/></div>
              <h3>Always learning.</h3>
              <p>
                These are the technologies and tools I currently use or study while developing
                my programming and IT skills.
              </p>
            </div>
            <div className="skills-list">
              {skills.map(([name, desc]) => (
                <div className="skill-item" key={name}>
                  <div className="skill-icon">{name === "SQL" ? <Database/> : name === "GitHub" ? <Github/> : <Code2/>}</div>
                  <div><strong>{name}</strong><span>{desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section mindset">
          <div className="quote-box">
            <span className="quote-mark">“</span>
            <h2>Build. Learn. Improve.</h2>
            <p>I believe every project is an opportunity to learn something new and become a better programmer.</p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">LET'S CONNECT</p>
              <h2>Have a project<br/><span className="gradient-text">in mind?</span></h2>
              <p>I'm always open to learning, collaborating, and working on interesting projects.</p>
            </div>
            <a className="button primary" href="mailto:your-email@example.com">Contact Me  Email: plukjovenbalacano@gmail.com<Mail size={18}/></a>
          </div>
          

          <div className="footer-links">
            <span>© 2026 Joven M. Balacano</span>
            <div>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19}/></a>
            </div>
          </div>
        </section>
      </main>

      <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
