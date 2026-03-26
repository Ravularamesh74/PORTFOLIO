import { useState, useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { gsap } from "gsap";

const projects = [
  {
    title: "Ecom Builder",
    role: "E-commerce Platform",
    year: "2025",
    desc: "Developed a full-scale e-commerce builder with dynamic product management, optimized UI, and scalable architecture.",
    image: "/images/shopp-kart.png",
    link: "https://ecom-builder-topaz.vercel.app",
  },
  {
    title: "Library Management System",
    role: "Full Stack Application",
    year: "2024",
    desc: "Engineered a robust system for managing books, users, and transactions with efficient CRUD operations and clean UI.",
    image: "/images/librarymanagementsystem.png",
    link: "https://librarymanagementsystem-lms.netlify.app",
  },
  {
    title: "Mallikarjuna Travels",
    role: "Business Website",
    year: "2024",
    desc: "Designed a responsive travel service platform with route listings, booking details, and optimized UX for customers.",
    image: "/images/mallikarjunatravels.png",
    link: "https://mallikarjunatravels.netlify.app",
  },
  {
    title: "DriveConnectBy",
    role: "Transport & Booking Platform",
    year: "2025",
    desc: "Developed a transport connectivity platform enabling users to explore routes, connect with drivers, and streamline booking interactions with a user-friendly interface.",
    image: "/images/placeholder.webp",
    link: "https://driveconnectby.netlify.app",
  },
  {
    title: "Job Connect",
    role: "Job Portal Platform",
    year: "2024",
    desc: "Built a job discovery platform enabling users to explore opportunities with clean navigation and scalable frontend architecture.",
    image: "/images/jobconnect.png",
    link: "https://jobconnect-cj.netlify.app",
  },
  {
    title: "Mastery Hub",
    role: "EdTech Platform",
    year: "2025",
    desc: "Created a structured learning platform focused on skill development with modular content and user-friendly interface.",
    image: "/images/codemastery.png",
    link: "https://mastery-hub.netlify.app",
  },
  {
    title: "Bhashyam Developer",
    role: "Corporate Website",
    year: "2025",
    desc: "Developed a modern corporate site with premium UI/UX, responsive layouts, and performance-focused design.",
    image: "/images/placeholder.webp",
    link: "https://bhashyam-developer.netlify.app",
  },
  {
    title: "Dark Cafe",
    role: "Modern Restaurant Website",
    year: "2025",
    desc: "Designed a visually immersive dark-themed cafe website with premium UI, smooth navigation, and responsive layout focused on user experience.",
    image: "/images/placeholder.webp",
    link: "https://dark-cafe.netlify.app",
  },
  {
    title: "Weather App",
    role: "API-Based Application",
    year: "2024",
    desc: "Built a real-time weather application using external APIs with dynamic data rendering and responsive UI.",
    image: "/images/placeholder.webp",
    link: "https://weather-rj.netlify.app",
  },
  {
    title: "Chess Pro Online",
    role: "Interactive Web App",
    year: "2025",
    desc: "Developed an online chess platform with interactive gameplay logic and real-time user interactions.",
    image: "/images/placeholder.webp",
    link: "https://chess-pro-online.vercel.app",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔥 GSAP SLIDE ANIMATION
  const animateSlide = (index: number) => {
    gsap.to(slidesRef.current, {
      xPercent: -100 * index,
      duration: 1,
      ease: "power3.inOut",
    });

    // ✨ IMAGE SCALE EFFECT
    gsap.fromTo(
      slidesRef.current[index],
      { scale: 0.9, opacity: 0.6 },
      { scale: 1, opacity: 1, duration: 0.8 }
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    animateSlide(index);
  };

  const goToNext = () => {
    const next = (currentIndex + 1) % projects.length;
    goToSlide(next);
  };

  const goToPrev = () => {
    const prev =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(prev);
  };

  // 🚀 AUTOPLAY (INSANE FEEL)
  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper" ref={containerRef}>

          {/* ARROWS */}
          <button className="carousel-arrow left" onClick={goToPrev}>
            <MdArrowBack />
          </button>

          <button className="carousel-arrow right" onClick={goToNext}>
            <MdArrowForward />
          </button>

          {/* TRACK */}
          <div className="carousel-track">
            {projects.map((project, index) => (
              <div
                className="carousel-slide"
                key={index}
                ref={(el) => (slidesRef.current[index] = el!)}
              >
                <div className="carousel-content">

                  {/* TEXT */}
                  <div className="carousel-info">
                    <h3>0{index + 1}</h3>
                    <h4>{project.title}</h4>
                    <p>{project.role}</p>
                    <p>{project.year}</p>
                    <p>{project.desc}</p>

                    <a href={project.link} target="_blank">
                      View Project →
                    </a>
                  </div>

                  {/* IMAGE */}
                  <div className="carousel-image-wrapper">
                    <WorkImage
                      image={project.image}
                      alt={project.title}
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;