import { Inter } from "next/font/google";
import "./styles/globals.css";
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GS-LSAMP Content Management System",
  description: "Manage content for pages on Rutgers Newark GS-LSAMP website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
