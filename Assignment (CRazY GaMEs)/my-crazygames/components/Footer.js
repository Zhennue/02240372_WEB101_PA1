// components/Footer.js
export default function Footer() {
    return (
      <footer className="footer">
        <p>&copy; 2025 My Crazy Games. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/about">About Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    );
  }  