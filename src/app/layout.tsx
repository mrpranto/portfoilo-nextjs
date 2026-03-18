import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mazedur Rahman Pranto — Full Stack Engineer",
  description:
    "Product-Focused Full Stack Engineer with 6+ years delivering scalable SaaS platforms, microservices architectures, and subscription billing systems.",
  keywords: [
    "Full Stack Engineer",
    "Laravel",
    "Next.js",
    "Node.js",
    "Vue.js",
    "SaaS",
    "API Architecture",
  ],
  authors: [{ name: "Mazedur Rahman Pranto" }],
  icons: {
    icon: "/images/Mazedur_Rahman.jpg",
    apple: "/images/Mazedur_Rahman.jpg",
  },
  openGraph: {
    title: "Mazedur Rahman Pranto — Full Stack Engineer",
    description:
      "Product-Focused Full Stack Engineer specializing in SaaS & API Architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
