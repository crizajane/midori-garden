import React, { useMemo, useState } from 'react'
import plantsData from '../data/plants'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'

export default function ProductPage() {
  const [filter, setFilter] = useState('All')
  const categories = useMemo(() => ['All', ...Array.from(new Set(plantsData.map(p => p.category)))], [])
  const filtered = filter === 'All' ? plantsData : plantsData.filter(p => p.category === filter)

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Plants</h2>

      {/* 🌿 Category Filter Buttons */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3 py-1 rounded border transition-colors duration-200 ${
              filter === c
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-green-900 border-green-900 hover:bg-green-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 🌿 Product Grid with subtle animation */}
      <div
        key={filter} // 🔄 triggers re-render animation when filter changes
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn"
      >
        {filtered.map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}
