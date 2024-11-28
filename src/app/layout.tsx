import type { Metadata } from "next";
import "./globals.css";
import TabBar from "./components/TabBar";

import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

export const metadata: Metadata = {
  title: "Yuka MORI",
  description: "Personal website for Yuka MORI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <TabBar tabs={[
          { text: "mori.yuka.org", linkUrl: "https://www.mori.yuka.org/", selected: true },
          { text: "真空.org", linkUrl: "https://xn--w1yo5e.org/" },
        ]} />
        {children}
        <footer id="footer">
          <p><a href="https://www.yuka.org/">Yuka.org</a></p>
          <p>© 2024 Yuka MORI / License: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a> or <a href="https://www.gnu.org/licenses/">GNU GPL version 3 or later</a>.</p>
        </footer>
      </body>
    </html>
  );
}
