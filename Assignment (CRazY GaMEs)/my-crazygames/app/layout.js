// app/layout.js
import '../styles/globals.css'; // Correct path based on where the CSS file is located

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

