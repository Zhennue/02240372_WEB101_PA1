// pages/explore.js
import Link from 'next/link';

export default function Explore() {
  return (
    <div className="container">
      <h1 className="text-4xl">Explore Games</h1>
      <p>Here you can explore various games.</p>
      <Link href="/profile">Go to Profile</Link>
    </div>
  );
}
