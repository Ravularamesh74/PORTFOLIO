import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Library Management System",
    category: "Full Stack Web Application",
    tools: "React.js, Node.js, MongoDB",
    image: "/images/librarymanagementsystem.png",
    link: "https://librarymanagementsystem-lms.netlify.app",
  },
  {
    title: "Mallikarjuna Travels",
    category: "Business Website",
    tools: "React.js, Responsive UI",
    image: "/images/mallikarjunatravels.png",
    link: "https://mallikarjunatravels.netlify.app",
  },
  {
    title: "Job Connect",
    category: "Job Portal Platform",
    tools: "React.js, Node.js",
    image: "/images/jobconnect.png",
    link: "https://jobconnect-cj.netlify.app",
  },
  {
    title: "Mastery Hub",
    category: "Learning Platform",
    tools: "React.js, UI Design",
    image: "/images/codemastery.png",
    link: "https://mastery-hub.netlify.app",
  },

  {
    title: "Show Shop",
    category: "E-Commerce Website",
    tools: "React.js, Product UI",
    image: "/images/shopp-kart.png",
    link: "https://show-shop.netlify.app",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">

                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Tools & Technologies
                          </span>
                          <p>{project.tools}</p>
                        </div>

                        {/* Live Project Button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-live-link"
                        >
                          View Live Project
                        </a>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;