import type { Metadata } from "next";
import './theme-config.css';
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Container } from "@radix-ui/themes";


const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Theme appearance="light" accentColor="violet">
        <NavBar />
        <main className="p-5">
          <Container>
          {children}

        </Container>
        </main>
        {/* <ThemePanel /> */}
        </Theme>
        
        </body>
    </html>
  )
}
