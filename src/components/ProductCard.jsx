import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

export default function ProductCard({ plant }) {
  const dispatch = useDispatch()
  const [showIndicator, setShowIndicator] = useState(false)

  const handleAdd = () => {
    dispatch(addToCart(plant))
    setShowIndicator(true)
    setTimeout(() => setShowIndicator(false), 700)
  }

  return (
    <div
      className="
        bg-white rounded-lg shadow p-4 flex flex-col 
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 
        relative overflow-hidden cursor-pointer
      "
    >
      {/* 🌿 Plant Image */}
      <img
        src={plant.img}
        alt={plant.name}
        className="h-48 w-full object-cover rounded-md mb-3 transform transition-transform duration-300 hover:scale-105"
      />

      {/* 🌿 Plant Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-green-900">{plant.name}</h3>
        <p className="text-sm text-gray-500">{plant.category}</p>
        <p className="text-sm text-gray-600 mt-1 italic">{plant.description}</p>
      </div>

      {/* 🌿 Price + Button */}
      <div className="mt-3 flex items-center justify-between relative">
        <div className="text-xl font-bold text-green-800">
          ₱{plant.price.toLocaleString()}
        </div>

        <button
          onClick={handleAdd}
          className="px-3 py-1 rounded bg-green-700 hover:bg-green-800 text-white transition-all relative"
        >
          Add to Cart

          {/* floating +1 animation */}
          {showIndicator && (
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-green-900 font-bold text-sm animate-bounceUp">
              +1
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
