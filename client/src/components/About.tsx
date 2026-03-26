import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            Crafting Scalable Digital Experiences with Precision & Performance
          </p>
        </div>

        <div className="about-content">
          <p className="about-description">
            I'm a results-driven <span>Full Stack Developer</span> with a strong foundation in 
            building high-performance, scalable, and user-centric web applications. 
            I specialize in modern technologies including <span>JavaScript, React.js, Next.js, Node.js</span>, 
            along with backend expertise in <span>Java, Python, SQL</span> and database systems like <span>MongoDB</span>.
          </p>

          <p className="about-description">
            I focus on writing clean, maintainable code and designing systems that are not just functional 
            but optimized for performance and scalability. From crafting intuitive UI/UX interfaces to 
            engineering robust backend architectures, I ensure every product delivers real value.
          </p>

          <p className="about-description">
            Beyond development, I actively explore new technologies, frameworks, and best practices 
            to stay ahead in the evolving tech landscape. My goal is to build impactful solutions 
            that solve real-world problems and create meaningful user experiences.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h4>⚡ Expertise</h4>
            <p>Full Stack Development (MERN + Multi-language Backend)</p>
          </div>

          <div className="highlight-card">
            <h4>🚀 Focus</h4>
            <p>Performance, Scalability, Clean Architecture</p>
          </div>

          <div className="highlight-card">
            <h4>🎯 Goal</h4>
            <p>Building Real-World Impactful Applications</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;