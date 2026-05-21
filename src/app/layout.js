import { Jost } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/Footer";

const jostFont = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doc Appoint | Book Doctor Appointments Easily",
  description:
    "Book doctor appointments online, manage schedules, and track your medical visits easily with Doc Appoint."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jostFont.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>
          <Navbar />
          {/* <div className="max-w-7xl mx-auto px-2 xl:px-0"> */}
            {children}
          {/* </div> */}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
