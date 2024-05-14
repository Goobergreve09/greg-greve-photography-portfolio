import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container text-center">
        <span className="text-muted">
          {/* Icon links */}
          <a
            href="https://github.com/Goobergreve09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gregory-greve-b48463300/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/greg.greve.79/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaFacebook />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
