import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Trispace } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const trispace = Trispace({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Galaxy Express",
  description: "Fast and safe delivery from Earth to Mars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn(inter.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col">
              <header className="relative flex w-full items-center justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 pr-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <Link
                  href="/"
                  className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xl"
                >
                  <Image
                    src="/logo.png"
                    alt="Galaxy express logo"
                    width={30}
                    height={30}
                  />
                  <h1 className={trispace.className}>Galaxy Express</h1>
                </Link>
                <ModeToggle />
              </header>
              <main className="flex flex-1 flex-col items-center justify-center px-4">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
