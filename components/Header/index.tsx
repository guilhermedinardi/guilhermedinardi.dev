'use client'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const jetBrains = JetBrains_Mono({ subsets: ['latin'] })

const Header = () => {
  const pages = ['Sobre', 'Contato']
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        jetBrains.className,
        'bg-dark-grey max-w-screen-xl flex-row h-24 w-full z-50 text-white-default mx-auto p-8'
      )}
    >
      <div className="items-center flex justify-between h-full">
        <Link href="/" className="md:text-xl font-normal">
          Guilherme <span className="font-bold">Dinardi</span>
        </Link>
        <div className="md:hidden" onClick={toggleMenuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </div>
        <div className="hidden md:flex">
          {pages.map((page) => (
            <Link
              key={page}
              href={page.toLowerCase()}
              className="md:text-lg p-4 lowercase opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out"
            >
              {page}
            </Link>
          ))}
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center pr-4 justify-center absolute left-0 w-full z-100 bg-dark-grey">
          <ul className="flex flex-col items-center justify-center md:justify-between h-screen gap-4">
            {pages.map((page) => {
              const pagePath = page.toLowerCase()
              return (
                <li key={page} onClick={handleMenuItemClick}>
                  <Link
                    href={pagePath}
                    className="text-xl p-4 text-white-default opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out"
                  >
                    {page}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
