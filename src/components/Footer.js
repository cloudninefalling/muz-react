import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__list">
          <h2 className="footer__title">products</h2>
          <li>
            <Link to="/catalog/acoustic" className="footer__list-item">
              Acoustic
            </Link>
          </li>
          <li>
            <Link to="/catalog/electric" className="footer__list-item">
              Electric
            </Link>
          </li>
          <li>
            <Link to="/catalog/bass" className="footer__list-item">
              Bass
            </Link>
          </li>
          <li>
            <Link to="/catalog/ukulele" className="footer__list-item">
              Ukulele
            </Link>
          </li>
          <li>
            <Link to="/catalog/accessories" className="footer__list-item">
              Accessories
            </Link>
          </li>
        </ul>

        <ul className="footer__list">
          <h2 className="footer__title">about us</h2>
          <li>
            <Link to="/" className="footer__list-item">
              Newsroom
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              Support
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              Manuals
            </Link>
          </li>
        </ul>

        <ul className="footer__list">
          <h2 className="footer__title">regions</h2>
          <li>
            <Link to="/" className="footer__list-item">
              North America
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              South America
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              South-East Asia
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              Europe
            </Link>
          </li>
          <li>
            <Link to="/" className="footer__list-item">
              Australia
            </Link>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">© Дмитрий Шалыгин, 2024</p>
    </footer>
  );
}
