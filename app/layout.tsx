import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { LanguageProvider } from "./context/language-context";

const myFont = localFont({
  src: "./fonts/Compact.ttf",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={myFont.className}>
            <LanguageProvider>{children}</LanguageProvider>
        </body>
      </html>
  );
}
