'use client'

import { useState, useRef } from 'react'
import Container from './Container'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const navItems = [
    { label: 'Home', hasDropdown: true, active: true },
    { label: 'Shop', hasDropdown: true },
    { label: 'Pages', hasDropdown: true },
    { label: 'Blog', hasDropdown: true },
    { label: 'About Us' },
    { label: 'Contact Us' },
  ]

  const openMobileSearch = () => {
    setMobileSearchOpen(true)
    setTimeout(() => searchInputRef.current?.focus(), 50)
  }

  const closeMobileSearch = () => {
    setMobileSearchOpen(false)
    if (searchInputRef.current) searchInputRef.current.value = ''
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') closeMobileSearch()
  }

  return (
    <header className="w-full">

      {/* Top bar — faqat md+ */}
      <div className="hidden md:block bg-white border-b border-gray-100">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 shrink-0"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
              <circle cx="12" cy="8" r="2" />
            </svg>
            <span className="hidden lg:inline">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
            <span className="lg:hidden">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <button className="flex items-center gap-1 hover:text-gray-800 transition-colors cursor-pointer">
              Eng
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <span className="text-gray-200">|</span>
            <button className="flex items-center gap-1 hover:text-gray-800 transition-colors cursor-pointer">
              USD
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <span className="text-gray-200">|</span>
            <div className="flex items-center gap-1">
              <a href="#" className="hover:text-green-600 transition-colors cursor-pointer">Sign In</a>
              <span>/</span>
              <a href="#" className="hover:text-green-600 transition-colors cursor-pointer">Sign Up</a>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Main header ── */}
      <div className="bg-white py-3 md:py-4 border-b border-gray-100">
        <Container className="flex items-center justify-between gap-3 md:gap-6">

          {/* Logo — mobile searchda yashiriladi */}
          <a
            href="/"
            className={`flex items-center gap-2 shrink-0 cursor-pointer transition-all duration-300 ${
              mobileSearchOpen ? 'w-0 opacity-0 overflow-hidden' : 'opacity-100'
            } md:w-auto md:opacity-100 md:overflow-visible`}
          >
            <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 22C8 22 7 14 14 10C14 10 11 17 17 19" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 22C15 22 14 12 22 8C22 8 19 16 24 20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-xl md:text-2xl font-bold text-gray-800">Ecobazar</span>
          </a>

          {/* Desktop search (md+) */}
          <div className="hidden md:flex flex-1">
            <div className="flex w-full border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center pl-3 pr-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 py-3 px-2 text-sm text-gray-600 outline-none placeholder-gray-400 cursor-text"
              />
              <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 transition-colors text-white text-sm font-medium px-6 py-3 cursor-pointer shrink-0">
                Search
              </button>
            </div>
          </div>

          {/* Mobile search bar — search ochilganda kengayadi */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileSearchOpen ? 'flex flex-1' : 'w-0 flex-none'
          }`}>
            <div className="flex w-full border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center pl-3 pr-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                onKeyDown={handleSearchKeyDown}
                className="flex-1 py-2.5 px-2 text-sm text-gray-600 outline-none placeholder-gray-400 cursor-text"
              />
              <button
                onClick={closeMobileSearch}
                className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 px-3 cursor-pointer shrink-0 flex items-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── O'ng ikonalar ── */}
          <div className="flex items-center gap-4 shrink-0">

            {/* Search ikoni — sm da KO'RINADI, search yopiq bo'lganda */}
            {!mobileSearchOpen && (
              <button
                onClick={openMobileSearch}
                className="md:hidden text-gray-500 hover:text-green-600 transition-colors cursor-pointer"
                aria-label="Open search"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            )}

            {/* Wishlist — barcha ekranlarda, search yopiq bo'lganda */}
            {!mobileSearchOpen && (
              <button className="flex relative text-gray-500 hover:text-green-600 transition-colors cursor-pointer">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
              </button>
            )}

            {/* Separator — faqat md+ */}
            <span className="hidden md:block w-px h-6 bg-gray-200" />

            {/* Cart */}
            <button className={`flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer ${
              mobileSearchOpen ? 'hidden md:flex' : 'flex'
            }`}>
              <div className="relative">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
              <div className="text-left hidden md:block">
                <p className="text-[10px] text-gray-400 leading-none">Shopping cart:</p>
                <p className="text-sm font-semibold text-gray-800">$57.00</p>
              </div>
            </button>

            {/* Hamburger — faqat sm, search yopiq bo'lganda */}
            {!mobileSearchOpen && (
              <button
                className="md:hidden flex flex-col justify-center items-center gap-1.5 p-1 cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            )}

          </div>
        </Container>
      </div>

      {/* ── Desktop Navigation (md+) ── */}
      <nav className="hidden md:block bg-gray-800">
        <Container className="flex items-center justify-between">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`flex items-center gap-1 px-4 py-4 text-sm font-medium transition-colors cursor-pointer ${
                    item.active ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:+12195550114" className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(219) 555-0114</span>
          </a>
        </Container>
      </nav>

      {/* ── Mobile Navigation Drawer ── */}
      <div className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center justify-between px-5 py-3.5 text-sm font-medium border-b border-gray-700 transition-colors cursor-pointer ${
                  item.active ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            </li>
          ))}
          <li className="px-5 py-4 flex items-center justify-between border-t border-gray-700">
            <a href="tel:+12195550114" className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer hover:text-white transition-colors">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (219) 555-0114
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Sign In</a>
              <span>/</span>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Sign Up</a>
            </div>
          </li>
        </ul>
      </div>

    </header>
  )
}

export default Header