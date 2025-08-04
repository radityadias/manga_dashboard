import "./globals.css";
import {fredoka} from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
