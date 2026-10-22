import React, { useEffect, useState } from 'react';

const skills = [
  {
    title: 'Data Analytics',
    description: 'Excel · Pandas · NumPy · Data Cleaning · EDA · Data Analysis',
  },
  {
    title: 'Business Intelligence',
    description:
      'Power BI · Tableau · Data Visualization · Dashboards · Business Insights',
  },
  {
    title: 'Programming & Databases',
    description: 'Python · SQL · MySQL · C++ · MongoDB',
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Scikit-learn · Regression · Recommendation Systems · Machine Learning · AI',
  },
];

const projects = [
  {
    number: '01',
    category: 'DATA ANALYTICS · POWER BI',
    title: 'Sales Data Analysis Dashboard',
    description:
      'An interactive Power BI dashboard designed to analyze sales performance, trends, products and key business metrics from a grocery-store dataset.',
    technologies: [
      'Power BI',
      'Excel',
      'Data Cleaning',
      'Data Visualization',
    ],
    links: [
      {
        label: 'GitHub ↗',
        href: 'https://github.com/hemand18/Sales-Data-Analysis-Dashboard.git',
      },
      {
        label: 'Live Dashboard ↗',
        href: 'YOUR_POWERBI_PROJECT_LINK',
      },
    ],
  },
  {
    number: '02',
    category: 'PYTHON · MACHINE LEARNING · AI',
    title: 'CineMatch — Movie Recommendation System',
    description:
      'A professional movie recommendation application built using Python and machine-learning techniques. The system analyzes movie information and recommends similar movies using content-based recommendation techniques.',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Cosine Similarity',
      'Streamlit',
    ],
    links: [
      {
        label: 'GitHub ↗',
        href: 'https://github.com/hemand18/CineMatch.git',
      },
      {
        label: 'Live Demo ↗',
        href: 'https://cinematch-3aptoelffqyntiwx7wpbga.streamlit.app/',
      },
    ],
  },
];

const education = [
  {
    period: '2024 — PRESENT',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Saveetha Institute / Saveetha University, Chennai',
    details:
      'Focus areas: programming, databases, data analytics, AI/ML, operating systems, and computer science fundamentals.',
  },
  {
    period: '2022 — 2024',
    title: 'Higher Secondary Education (12th)',
    institution: 'Shiksha Niketan, Jharkhand',
    details:
      'Focus areas: Commerce, Accountancy, Business Studies, Economics, Mathematics, and Computer Applications.',
  },
  {
    period: '2020 — 2022',
    title: 'Secondary School Education (10th)',
    institution: "Xavier's English High School, Jharkhand",
    details:
      'Focus areas: Mathematics, Science, Social Science, English, Computer Fundamentals, and analytical thinking.',
  },
];

const resumeHref = new URL('../Hemand_Resume.pdf', import.meta.url).href;

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem('theme') || 'dark',
  );
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
        setScrollProgress(progress);
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className="progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          RHK<span>.</span>
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav
          id="primary-navigation"
          className={menuOpen ? 'open' : ''}
          aria-label="Main navigation"
        >
          {[
            ['About', '#about'],
            ['Skills', '#skills'],
            ['Projects', '#projects'],
            ['Education', '#education'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="theme-btn"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          onClick={() =>
            setTheme((currentTheme) =>
              currentTheme === 'light' ? 'dark' : 'light',
            )
          }
        >
          {theme === 'light' ? '☀' : '☾'}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              BCA STUDENT · DATA ANALYST · DATA SCIENCE · AI/ML
            </p>
            <h1>
              Turning <span>data</span> into decisions.
            </h1>
            <p className="lead">
              Hi, I&apos;m <strong>R Hemand Kumar</strong>. I&apos;m an aspiring
              Data Analyst and Data Scientist who enjoys working with Python,
              SQL, Power BI, Machine Learning and turning data into meaningful
              insights.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">
                View My Work ↗
              </a>
              <a className="btn ghost" href="#contact">
                Let&apos;s Connect
              </a>
              <ExternalLink href={resumeHref}>
                <span className="btn ghost">Download Resume ↓</span>
              </ExternalLink>
            </div>
            <div className="quick-stats">
              <div>
                <strong>7.69</strong>
                <span>Current CGPA</span>
              </div>
              <div>
                <strong>Python</strong>
                <span>Core Skill</span>
              </div>
              <div>
                <strong>Power BI</strong>
                <span>Dashboarding</span>
              </div>
            </div>
          </div>

          <div className="hero-card reveal">
            <div className="orb" />
            <div className="terminal">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <p>
                <span className="muted"># my approach</span>
              </p>
              <p>
                <span className="purple">data</span> = collect()
              </p>
              <p>
                <span className="purple">data</span> = clean(data)
              </p>
              <p>
                <span className="purple">insights</span> = analyze(data)
              </p>
              <p>dashboard(insights)</p>
              <p>
                <span className="green">return</span> impact
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head reveal">
            <p className="eyebrow">01 · ABOUT</p>
            <h2>A curious learner with a data mindset.</h2>
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I&apos;m a BCA student focused on building a career in Data
                Analytics and Data Science. My interests sit at the
                intersection of Python, SQL, business intelligence,
                visualization, machine learning and AI.
              </p>
              <p>
                I learn best by building. I enjoy working with real-world
                datasets, cleaning and analyzing data, creating dashboards, and
                developing machine-learning projects to solve practical
                problems.
              </p>
              <p className="note">
                Currently looking for internships and entry-level opportunities
                where I can contribute, learn from real-world data and grow as a
                data professional.
              </p>
            </div>
            <div className="about-list reveal">
              <div>
                <span>01</span>
                <strong>Analyze</strong>
                <p>Explore patterns, trends and relationships in data.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Visualize</strong>
                <p>Build clear dashboards that communicate insights.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Build</strong>
                <p>
                  Create Python, ML and AI projects with practical use cases.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="section-head reveal">
            <p className="eyebrow">02 · SKILLS</p>
            <h2>Tools I use to solve problems.</h2>
          </div>
          <div className="skills-grid reveal">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head reveal">
            <p className="eyebrow">03 · PROJECTS</p>
            <h2>Featured work.</h2>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article
                className="project featured reveal"
                key={project.number}
              >
                <div className="project-number">{project.number}</div>
                <div>
                  <p className="tag">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <ExternalLink href={link.href} key={link.label}>
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section alt">
          <div className="section-head reveal">
            <p className="eyebrow">04 · EDUCATION</p>
            <h2>My academic foundation.</h2>
          </div>
          <div className="timeline reveal">
            {education.map((item) => (
              <article className="timeline-item" key={item.period}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section callout reveal">
          <p className="eyebrow">RESUME &amp; OPPORTUNITIES</p>
          <h2>Ready to turn skills into real impact.</h2>
          <p>
            I&apos;m interested in Data Analyst, Data Science, Python, Machine
            Learning and entry-level technology opportunities.
          </p>
          <div className="actions">
            <ExternalLink href={resumeHref}>
              <span className="btn primary">View Resume ↗</span>
            </ExternalLink>
            <a className="btn ghost" href="#contact">
              Contact Me
            </a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head reveal">
            <p className="eyebrow">05 · CONTACT</p>
            <h2>Let&apos;s build something useful.</h2>
          </div>
          <div className="contact-grid">
            <div className="reveal">
              <p className="contact-big">
                Have an opportunity, project, or idea?
              </p>
              <p>
                I&apos;m open to internships, entry-level opportunities,
                collaborations and interesting data projects.
              </p>
            </div>
            <div className="contact-links reveal">
              <a href="mailto:hemand8797@gmail.com">
                <span>Email</span>
                hemand8797@gmail.com ↗
              </a>
              <ExternalLink href="https://github.com/hemand18">
                <span>GitHub</span>
                github.com/hemand18 ↗
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/hemand-kumar-98b296325/">
                <span>LinkedIn</span>
                LinkedIn Profile ↗
              </ExternalLink>
              <ExternalLink href={resumeHref}>
                <span>Resume</span>
                View / Download ↗
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 R Hemand Kumar</span>
        <span>Data Analyst · Data Science · AI/ML</span>
      </footer>
    </>
  );
}

export default App;
