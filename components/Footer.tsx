import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <Logo />
              DashPilot
            </Link>
            <p>Softwired Technologies Korlátolt Felelősségű Társaság</p>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="https://softwiredtech.com" target="_blank" rel="noopener noreferrer">
                  softwiredtech.com
                </a>
              </li>
              <li>
                <a href="mailto:info@softwiredtech.com">info@softwiredtech.com</a>
              </li>
              <li>
                <a href="tel:+36308838435">+36 30 883 8435</a>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li>Nagy Lajos király útja 14.</li>
              <li>fszt. 3.</li>
              <li>7622 Pécs, Hungary</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Softwired Technologies Kft.</span>
        </div>
      </div>
    </footer>
  );
}
