// import "./globals.css";
// import localFont from "next/font/local";
// import { ReactNode } from "react";
// import { LanguageProvider } from "./context/language-context";

// const myFont = localFont({
//   src: "./fonts/Compact.ttf",
//   variable: "--font-compact",
//   display: "swap",
// });

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//       <html lang="en" suppressHydrationWarning>
//         <head />
//         <body className={myFont.className}>
//             <LanguageProvider>{children}</LanguageProvider>
//         </body>
//       </html>
//   );
// }
import "./globals.css";
import { ReactNode } from "react";
import { LanguageProvider } from "./context/language-context";
import { Noto_Sans_Mongolian } from "next/font/google";

const notoMongolian = Noto_Sans_Mongolian({
  subsets: ["mongolian"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <body className={notoMongolian.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
