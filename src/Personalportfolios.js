import React, { useState } from "react";
import {
  Menu, X, Leaf , Mail, ArrowUpRight,
  Code2, Database, Palette, GraduationCap, BriefcaseBusiness,
  Send, Sparkles, Heart
} from "lucide-react";
import "./App.css";

const projects = [
  {
    title: "Notes App",
    category: "Frontend Development",
    description: "Create, edit, delete and manage daily notes with a simple interface.",
    tech:["React","css"],
    image: "notes.png",
    github: "https://github.com/Prithika-durai/Notesrs.git",
    demo: "https://notesrs-smde.vercel.app/"
  },
  {
    title: "Password Generator",
    category: "React Project",
    description: "Generate secure passwords with customizable length and character options.",
    tech:["React","css"],
    image: "paass.png",
    github: "https://github.com/Prithika-durai/Passwordrs.git",
    demo: "https://passwordrs.vercel.app/"
  },
  {
    title: "Quiz Game",
    category: "React Project",
    description: "An interactive multiple-choice quiz with score tracking and instant answer feedback.",
    tech:["React","css"],
    image: "quiz-game.png",
    github: "https://github.com/Prithika-durai/Quizr.git",
    demo: "https://quizr-pied.vercel.app/"
  },
  {
    title: "Expense Tracker",
    category: "Task Management",
    description: "Add income and expenses and watch your balance update instantly, built with React state.",
    tech:["React","css"],
    image: "expense-tracker.png",
    github: "https://github.com/Prithika-durai/expensesr.git",
    demo: "https://expensesr.vercel.app/"
  },
  {
    title: "FAQ Application",
    category: "Frontend Development",
    description: "An interactive FAQ application that displays answers when selected.",
    tech:["React","css"],
    image: "faq.png",
    github: "https://github.com/Prithika-durai/faqr.git",
    demo: "https://faqr-theta.vercel.app"
  },
  {
    title: "Color Theme Switcher",
    category: "React Project",
    description: "Switch between different color themes to improve user experience.",
    tech:["React","css"],
    image: "themech.png",
    github: "https://github.com/Prithika-durai/Themer.git",
    demo: "https://themer-rouge.vercel.app/"
  }
];

const skillGroups = [
  {
    icon: <Code2 />,
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
  },
  {
    icon: <Database />,
    title: "Backend Development",
    skills: ["Java", "Spring Boot", "REST API"]
  },
  {
    icon: <Database />,
    title: "Database",
    skills: ["SQL", "MySQL", "Database Design"]
  },
  {
    icon: <Palette />,
    title: "Tools & Technologies",
    skills: ["VS Code", "Git", "GitHub"]
  }
];

const navItems = [
  "Home", "About", "Skills", "Projects",
  "Education", "Experience", "Contact"
];

function Personalportfolios() {
    
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const sendMessage = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const mailto = `mailto:yourmail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
  
  
};

  return (
    <main className="portfolio">

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon"><Leaf size={22} /></span>
          Prithika D<span>.</span>
        </a>
        

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let's Talk <ArrowUpRight size={15} />
          </a>
            </nav>
      </header>

      {/* HOME */}
      <section className="hero section-bg" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="eyebrow">
            <Leaf size={15} /> HELLO, WELCOME TO MY WORLD
          </span>

          <h1>
            Creating digital
            <br />
            experiences with
            <br />
            <em>purpose & passion.</em>
          </h1>

          <p>
          <span className="hom">I' am <span className="names"> Prithika D</span>, an aspiring developer who loves turning
            creative ideas into beautiful, meaningful and user-friendly
            digital experiences.</span>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore My Work <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="secondary-btn">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Prithika-durai" aria-label="GitHub">
              <span className="github-symbol">GH</span>
            </a>
            <a href="https://www.linkedin.com/in/prithika-d-93473b42b" aria-label="LinkedIn">
              <span className="linkedin-symbol">in</span>
            </a>
            <a href="prithika635@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
              alt="A beautiful laptop workspace with plants"
            />
          </div>
          <div className="photo-caption">
            <Sparkles size={17} />
            <span>Growing with every line of code</span>
          </div>
          <div className="photo-flower">✿</div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-bg" id="about">
        <div className="section-overlay"></div>
        <div className="section-inner">
          <SectionTitle
            kicker="A LITTLE INTRODUCTION"
            title="About Me"
            quote="A curious mind, a creative heart, and a passion for building."
          />

          <div className="about-layout">
            <div className="about-photo">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900"
                alt="Calm creative workspace"
              />
              <div className="about-sticker">
                <Leaf size={28} />
                <strong>Always learning.</strong>
                <span>Always growing.</span>
              </div>
            </div>

            <div className="about-text">
              <span className="mini-label">WHO I AM</span>
              <h3>
                Turning thoughtful ideas into
                <em> meaningful digital solutions.</em>
              </h3>
              <p><span className="hom">
                I'm Prithika, an aspiring software developer interested
                in creating elegant and user-friendly web applications.
                I enjoy combining creativity with technology to build
                experiences that are both useful and delightful.</span>
              </p>
              <p><span className="hom">
                My learning journey includes frontend development,
                Java-based backend development and database management.
                I'm always excited to explore new technologies, solve
                problems and improve my skills.</span>
              </p>

              <div className="about-facts">
                <div><strong>Creative</strong><span className="spansr">Design mindset</span></div>
                <div><strong>Curious</strong><span>Continuous learner</span></div>
                <div><strong>Focused</strong><span>Problem solver</span></div>
              </div>

              <a href="#contact" className="simple-link">
                Let's connect <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills section-bg" id="skills">
        <div className="section-overlay"></div>
        <div className="section-inner">
          <SectionTitle
            kicker="MY CREATIVE TOOLKIT"
            title="Skills & Expertise"
            quote="Every new skill opens a door to a new possibility."
          />

          <div className="skills-grid">
            {skillGroups.map(group => (
              <div className="skill-card" key={group.title}>
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="soft-skills">
            <Sparkles size={22} />
            <div>
              <h3>Beyond the Code</h3>
              <p>
                Communication · Teamwork · Creativity · Adaptability ·
                Time Management · Problem Solving · Attention to Detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section-bg" id="projects">
        <div className="section-overlay"></div>
        <div className="section-inner">
          <SectionTitle
            kicker="A SELECTION OF MY WORK"
            title="Featured Projects"
            quote="Ideas become meaningful when we bring them to life."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className="project-count">
                    0{index + 1}
                  </span>
                </div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <span className="github-symbol">GH</span> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education section-bg" id="education">
        <div className="section-overlay"></div>
        <div className="section-inner">
          <SectionTitle
            kicker="MY LEARNING JOURNEY"
            title="Education"
            quote="Every lesson is a new seed for tomorrow's growth."
          />

          <div className="timeline">
            <TimelineItem
              date="2021 – 2025"
              title="B.E (CSE)"
              place="IFET College Of Engineering"
              description="8.5  CGPA  with  Distiction."
            />
            <TimelineItem
              date="2019 – 2021"
              title="Higher Secondary Education"
              place="John Dewey Matric.Hr.Sec School"
              description="Completed with good grades."
            />
            <TimelineItem
              date="2021 – 2022"
              title="HDCA(Honours Diploma in Computer Applications)"
              
              description="Completed with 'A' grade."
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience section-bg" id="experience">
        <div className="section-overlay"></div>
        <div className="section-inner">
          <SectionTitle
            kicker="WHERE I'VE GROWN"
            title="Experience"
            quote="Growth happens when learning meets opportunity."
          />

          <div className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={28} />
            </div>
            <div>
              <span className="mini-label">PROJECT EXPERIENCE</span>
              <h3>FULL STACK DEVELOPMENT PROJECTS</h3>
              
              <p><span className="hom">
                Developed practical projects using HTML, CSS, JavaScript, React, Java, Spring Boot and Sql to strengthen full stack development skills.
                Practiced version control using Git and GitHub.</span>
              </p>
              <div className="skill-tags">
                <span>Development</span>
                <span>Collaboration</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-bg" id="contact">
        <div className="section-overlay"></div>
        <div className="section-inner">
          <SectionTitle
            kicker="LET'S CREATE SOMETHING TOGETHER"
            title="Get In Touch"
            quote="Every great collaboration begins with a simple hello."
          />

          <div className="contact-layout">
            <div className="contact-info">
              <span className="mini-label">SAY HELLO</span>
              <h3>Have an idea?<br /><em>Let's make it happen.</em></h3>
              <p><span className="conctacts">
                Whether it's a project, an opportunity or simply a
                conversation, I'd love to hear from you.</span>
              </p>

              <a href="mailto:prithika635@gmail.com" className="contact-item">
                <span><Mail size={19} /></span>
                prithika635@gmail.com
              </a>
              <a href=" https://www.linkedin.com/in/prithika-d-93473b42b" className="contact-item">
                <span><span className="linkedin-symbol">in</span></span>
                Connect on LinkedIn
              </a>
              <a href="https://github.com/Prithika-durai" className="contact-item">
                <span><span className="github-symbol">GH</span></span>
                Explore my GitHub
              </a>
            </div>

            <form className="contact-form" onSubmit={sendMessage}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" placeholder="What would you like to discuss?" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required />
              </div>

              <button type="submit" className="primary-btn send-btn">
                Send Message <Send size={17} />
              </button>
              <p className="form-note">
                Your email app will open with your message ready to send.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <Leaf size={21} /> Prithika D.
        </a>
        <p>Made with <Heart size={14} /> creativity and code.</p>
        <span>© {new Date().getFullYear()} Prithika. All rights reserved.</span>
      </footer>
    </main>
  );
}

function SectionTitle({ kicker, title, quote }) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{quote}</p>
      <span className="heading-flower">✿</span>
    </div>
  );
}

function TimelineItem({ date, title, place, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon"><GraduationCap size={23} /></div>
      <div className="timeline-content">
        <span className="timeline-date">{date}</span>
        <h3>{title}</h3>
        <h4>{place}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default Personalportfolios;
