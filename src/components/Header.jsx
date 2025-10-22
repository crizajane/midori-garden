import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const { totalQty } = useSelector((s) => s.cart)

  return (
    // 🌿 Fixed header that stays at top when scrolling
    <header className="bg-[#B5CBA4] shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-8 py-6">
        
        {/* 🌿 LEFT SIDE: Title */} 
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-4xl font-extrabold tracking-[4px] text-green-900 hover:text-green-700 transition-all"
          >
            Midori Garden
          </Link>
        </div>

        {/* 🌿 RIGHT SIDE: Nav */}
        <nav className="flex items-center gap-8">
          {/* ✅ Products button (with emoji icon for now) */}
          <Link
            to="/products"
            className="relative inline-flex items-center px-4 py-2 border-2 border-green-900 rounded-lg hover:bg-green-100 transition-all"
          >
            <span className="text-white rounded-md px-2 py-1 mr-2 text-sm font-bold bg-green-800">🪴</span>
            <span className="text-green-900 font-semibold text-lg">Products</span>
          </Link>

          {/* ✅ Cart button (with quantity badge) */}
          <Link
            to="/cart"
            className="relative inline-flex items-center px-4 py-2 border-2 border-green-900 rounded-lg hover:bg-green-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
              <circle cx="7" cy="20" r="1" />
              <circle cx="20" cy="20" r="1" />
            </svg>

            <span className="ml-2 text-green-900 font-semibold text-lg">Cart</span>

            <span className="absolute -top-2 -right-2 bg-green-800 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
              {totalQty}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
