import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "./Components/TheHeader";


export const metadata: Metadata = {
  title: "Next Queue",
  description: "v 0.0.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        </body>
    </html> 
  );
}
