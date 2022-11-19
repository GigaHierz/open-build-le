import { Inter } from "@next/font/google";
// import Sidebar from "/components/Sidebar.js";
import "../styles/globals.css";

const inter = Inter();

export default function RootLayout(props) {
  return (
    <html lang="de" className={inter.className}>
      <head></head>
      <body className="flex h-screen">
        {/* <Sidebar /> */}
        <main className="relative flex-1 min-h-screen overflow-y-auto scroll-smooth">
          {props.children}
        </main>
      </body>
    </html>
  );
}
