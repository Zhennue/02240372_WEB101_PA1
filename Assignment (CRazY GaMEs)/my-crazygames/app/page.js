// app/home/page.js
import Link from 'next/link';
import styles from './page.module.css';


export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/cg.png" alt="My Crazy Games" className={styles.logo} />
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search games..." />
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/explore">Explore</Link></li>
            <li><Link href="/upload">Upload</Link></li>
            <li><Link href="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>

      {/* Game Categories */}
      <main className={styles.main}>
        <section className={styles.categorySection}>
          <h2>Popular Games</h2>
          <div className={styles.gameList}>
            <div className={styles.gameCard}>
              <img src="/game1.png" alt="Game 1" className={styles.gameImage} />
              <h3>Game 1</h3>
            </div>
            <div className={styles.gameCard}>
              <img src="/game2.png" alt="Game 2" className={styles.gameImage} />
              <h3>Game 2</h3>
            </div>
            <div className={styles.gameCard}>
              <img src="/game3.png" alt="Game 3" className={styles.gameImage} />
              <h3>Game 3</h3>
            </div>
            {/* Add more games as needed */}
          </div>
        </section>

        {/* Additional Sections */}
        <section className={styles.exploreSection}>
          <h2>Explore More</h2>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/profile">Your Profile</Link></li>
            <li><Link href="/games">Browse Games</Link></li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 My Crazy Games. All rights reserved.</p>
      </footer>
    </div>
  );
}
