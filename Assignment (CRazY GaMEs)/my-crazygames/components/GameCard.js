// components/GameCard.js
export default function GameCard({ gameTitle, gameImage, gameLink }) {
    return (
      <div className="game-card">
        <Link href={gameLink}>
          <img src={gameImage} alt={gameTitle} className="game-image" />
          <h3>{gameTitle}</h3>
        </Link>
      </div>
    );
  }
  