import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <span className="text-muted">
        {/* Icon links */}
        <a
          href="https://www.instagram.com/karatecakeman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light mx-2"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/GregGrevePhotography"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light mx-2"
        >
          <FaFacebook />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
