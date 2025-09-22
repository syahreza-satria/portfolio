import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

// Gunakan nama variabel dengan huruf kecil untuk membedakannya
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const inter_tight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syahreza Satria",
  description: "Syahreza Satria Alfath",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Gunakan nama variabel yang baru di sini */}
      <body
        className={`${inter.variable} ${inter_tight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}