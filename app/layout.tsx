import { Metadata } from "next"
import { Manrope } from "next/font/google"
import Header from "@/components/Header"
import { cn } from "@/lib/utils"
import './globals.css'

export const metadata: Metadata = {
  title: 'Guilherme Dinardi Front End',
  description: 'My personal website'
}

const manrope = Manrope({ weight: ['300', '400', '600', '800'], subsets: ['latin'] })
export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {
  return (
    <html lang={locale}>
        <body className={cn(manrope.className, "max-w-full min-h-screen flex flex-col bg-dark-grey")}>
          <Header />
          <main className="flex-grow bg-dark-grey max-w-screen-xl p-8">{children}</main>
        </body>
    </html>
  )
}
