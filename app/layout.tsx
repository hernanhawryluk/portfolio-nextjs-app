import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import LanguageSwitch from "@/components/language-switch";
import { I18nProvider } from "@/context/i18n-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hernan Hawryluk | Portfolio",
  description:
    "Hernan Hawryluk is a Front-end Developer skilled in React and React Native, dedicated to delivering high-quality digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors`}
      >
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] transition-colors duration-300"
        ></div>
        <div
          style={{ transform: "translate3d(0,0,0)" }}
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] transition-colors duration-300"
        ></div>
        <ThemeContextProvider>
          <I18nProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Toaster position="top-right" />
              <ThemeSwitch />
              <LanguageSwitch />
              <Footer />
            </ActiveSectionContextProvider>
          </I18nProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
