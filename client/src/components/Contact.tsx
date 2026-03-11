import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ravularamesh74@gmail.com" data-cursor="disable">
                ravularamesh74@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>Master of Computer Applications (MCA)</p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Ravularamesh74"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/ravula-ramesh-88561736a"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ravula Ramesh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;