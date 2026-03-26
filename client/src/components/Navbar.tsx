import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother;

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth Scroll
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    // Scroll to sections
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = (e.currentTarget as HTMLElement).dataset.href;
        if (target) {
          smoother.scrollTo(target, true, "top top");
        }
      });
    });

    // Active section highlight
    document.querySelectorAll("section").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(section.id),
        onEnterBack: () => setActive(section.id),
      });
    });

    const setActive = (id: string) => {
      document.querySelectorAll(".nav-link").forEach((el) => {
        el.classList.remove("active");
        if ((el as HTMLElement).dataset.href === `#${id}`) {
          el.classList.add("active");
        }
      });
    };

    // Hide/Show Navbar on Scroll
    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const current = self.scroll();

        if (current > lastScroll && current > 100) {
          gsap.to(navRef.current, { y: -100, duration: 0.4 });
        } else {
          gsap.to(navRef.current, { y: 0, duration: 0.4 });
        }

        lastScroll = current;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="header" ref={navRef}>

        {/* LOGO */}
        <a href="/#" className="navbar-title" data-cursor="link">
          RR
        </a>

        {/* EMAIL */}
        <a
          href="mailto:ravularamesh74@gmail.com"
          className="navbar-connect"
          data-cursor="link"
        >
          ravularamesh74@gmail.com
        </a>

        {/* NAV */}
        <ul>
          <li>
            <a className="nav-link" data-href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a className="nav-link" data-href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a className="nav-link" data-href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

      </div>

      {/* BACKGROUND ELEMENTS */}
      <div className="nav-glow"></div>
    </>
  );
};

export default Navbar;
