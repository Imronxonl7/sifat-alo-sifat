
import Container from './Container'

const Footer = () => {
  const footerLinks = [
    {
      title: 'My Account',
      links: [
        { label: 'My Account', bold: false },
        { label: 'Order History', bold: false },
        { label: 'Shoping Cart', bold: false },
        { label: 'Wishlist', bold: false },
      ],
    },
    {
      title: 'Helps',
      links: [
        { label: 'Contact', bold: false },
        { label: 'Faqs', bold: false },
        { label: 'Terms & Condition', bold: false },
        { label: 'Privacy Policy', bold: false },
      ],
    },
    {
      title: 'Proxy',
      links: [
        { label: 'About', bold: false },
        { label: 'Shop', bold: false },
        { label: 'Product', bold: false },
        { label: 'Track Order', bold: false },
      ],
    },
    {
      title: 'Categories',
      links: [
        { label: 'Fruit & Vegetables', bold: false },
        { label: 'Meat & Fish', bold: false },
        { label: 'Bread & Bakery', bold: false },
        { label: 'Beauty & Health', bold: false },
      ],
    },
  ]

  return (
    <footer className="w-full">

      {/* ── Newsletter section ── */}
      <section className="bg-gray-100 border-b border-gray-200">
        <Container className="py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">

          {/* Chap: sarlavha + tavsif */}
          <div className="shrink-0 md:max-w-xs">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Subcribe our Newsletter</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>

          {/* O'rta: email input */}
          <div className="flex flex-1">
            <div className="flex w-full border border-gray-200 rounded-full overflow-hidden bg-white shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 py-3 px-5 text-sm text-gray-600 outline-none placeholder-gray-400 bg-transparent"
              />
              <button className="bg-green-500 hover:bg-green-600 transition-colors text-white text-sm font-semibold px-7 py-3 rounded-full m-1 cursor-pointer shrink-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* O'ng: ijtimoiy ikonalar */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.86-2.6 1.93-2.6.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.92 1.57 1.92 1.88 0 3.14-2.4 3.14-5.24 0-2.16-1.46-3.77-4.1-3.77-2.99 0-4.84 2.23-4.84 4.72 0 .86.25 1.46.64 1.93.18.21.21.3.14.54-.05.17-.15.59-.2.75-.07.24-.28.33-.51.24-1.41-.58-2.07-2.14-2.07-3.89 0-2.9 2.44-6.37 7.27-6.37 3.9 0 6.48 2.83 6.48 5.88 0 4.02-2.23 7.01-5.51 7.01-1.1 0-2.14-.59-2.49-1.26l-.68 2.6c-.25.95-.91 2.14-1.36 2.86.97.3 2 .46 3.06.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>

        </Container>
      </section>

      {/* ── Asosiy footer ── */}
      <section className="bg-gray-900">
        <Container className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

            {/* Logo + tavsif + kontakt */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <a href="/" className="flex items-center gap-2 mb-4 cursor-pointer w-fit">
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 22C8 22 7 14 14 10C14 10 11 17 17 19" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 22C15 22 14 12 22 8C22 8 19 16 24 20" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-xl font-bold text-white">Ecobazar</span>
              </a>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a href="tel:+12195550114" className="text-white font-semibold border-b-2 border-white pb-0.5 hover:text-green-400 hover:border-green-400 transition-colors cursor-pointer">
                  (219) 555-0114
                </a>
                <span className="text-gray-500">or</span>
                <a href="mailto:Proxy@gmail.com" className="text-white font-semibold border-b-2 border-white pb-0.5 hover:text-green-400 hover:border-green-400 transition-colors cursor-pointer">
                  Proxy@gmail.com
                </a>
              </div>
            </div>

            {/* Link ustunlar */}
            {footerLinks.map((col) => (
              <div key={col.title} className="col-span-1">
                <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(({ label, bold }) => (
                    <li key={label}>
                      <a
                        href="#"
                        className={`text-sm transition-colors cursor-pointer ${
                          bold
                            ? 'text-white font-semibold hover:text-green-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </Container>

        {/* ── Pastki bar ── */}
        <div className="border-t border-gray-800">
          <Container className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>

            {/* To'lov ikonalar */}
            <div className="flex items-center gap-2">
              {/* Apple Pay */}
              <div className="bg-white rounded px-2.5 py-1.5 flex items-center h-8">
                <span className="text-[11px] font-bold text-gray-900 whitespace-nowrap"> Pay</span>
              </div>
              {/* Visa */}
              <div className="bg-white rounded px-2.5 py-1.5 flex items-center h-8">
                <span className="text-[13px] font-extrabold text-blue-800 tracking-tight">VISA</span>
              </div>
              {/* Discover */}
              <div className="bg-white rounded px-2.5 py-1.5 flex items-center h-8">
                <span className="text-[10px] font-bold text-gray-800 tracking-tight">DISCOVER</span>
              </div>
              {/* Mastercard */}
              <div className="bg-white rounded px-2.5 py-1.5 flex items-center h-8">
                <div className="flex">
                  <div className="w-5 h-5 rounded-full bg-red-500" />
                  <div className="w-5 h-5 rounded-full bg-yellow-400 -ml-2.5" />
                </div>
              </div>
              {/* Secure Payment */}
              <div className="bg-white rounded px-2.5 py-1.5 flex items-center gap-1 h-8">
                <svg className="w-3 h-3 text-gray-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[9px] font-semibold text-gray-700 leading-tight">Secure<br />Payment</span>
              </div>
            </div>
          </Container>
        </div>
      </section>

    </footer>
  )
}

export default Footer
