import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

/* ---------------------------------------------------------------------------
   SEO metadata
   REPLACE: swap in your real name, domain, and description before launch.
--------------------------------------------------------------------------- */
export const metadata: Metadata = {
  // REPLACE: set this to your deployed URL (e.g. https://yourname.dev)
  metadataBase: new URL("https://example.com"),
  title: "Bria Jackson | Java Web Developer",
  description:
    "Portfolio of Bria Jackson, a Java web developer building fast, reliable web applications with Spring Boot, REST APIs, and modern front-end tooling.",
  keywords: [
    "Java developer",
    "Spring Boot",
    "web developer",
    "portfolio",
    "REST API",
    "full stack",
  ],
  openGraph: {
    title: "Bria Jackson | Java Web Developer",
    description:
      "Java web developer building fast, reliable web applications with Spring Boot and modern front-end tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {/* Applies the saved/OS theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
