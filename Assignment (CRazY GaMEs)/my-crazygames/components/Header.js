// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <img src="/images/logo.png" alt="My Crazy Games Logo" width={100} height={100} />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/games">Games</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
