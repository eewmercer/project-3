import "./globals.css";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navigation/>
        </div>
        <div className="body-container">
          {children}
        </div>
      </body>
    </html>
  );
}
