import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeItem, clearCart } from '../slices/cartSlice'
import { Link } from 'react-router-dom'


export default function CartPage(){
const { items, totalQty, totalPrice } = useSelector(s => s.cart)
const dispatch = useDispatch()
const entries = Object.values(items)


return (
<div>
<h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
<div className="mb-4">Total items: <strong>{totalQty}</strong> — Total price: <strong>${totalPrice.toFixed(2)}</strong></div>


{entries.length === 0 ? (
<div className="p-6 bg-white rounded shadow text-center">
<p>Your cart is empty.</p>
<Link to="/products" className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded">Continue shopping</Link>
</div>
) : (
<div className="space-y-4">
{entries.map(item => (
<div key={item.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
<img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded" />
<div className="flex-1">
<div className="font-semibold">{item.name}</div>
<div className="text-sm text-gray-500">Unit: ${item.price.toFixed(2)}</div>
<div className="mt-2 flex items-center gap-2">
<button onClick={()=>dispatch(decreaseQty(item.id))} className="px-2 py-1 border rounded">-</button>
<div className="px-3">{item.qty}</div>
<button onClick={()=>dispatch(increaseQty(item.id))} className="px-2 py-1 border rounded">+</button>
</div>
</div>
<div className="text-right">
<div className="font-bold">${(item.qty * item.price).toFixed(2)}</div>
<button onClick={()=>dispatch(removeItem(item.id))} className="mt-2 text-sm text-red-600">Delete</button>
</div>
</div>
))}


<div className="flex justify-between items-center bg-white p-4 rounded shadow">
<div>
<button onClick={()=>dispatch(clearCart())} className="px-3 py-2 border rounded">Clear cart</button>
</div>
<div className="text-right">
<div className="mb-2">Total: <strong>${totalPrice.toFixed(2)}</strong></div>
<button className="px-4 py-2 bg-blue-600 text-white rounded">Checkout</button>
</div>
</div>


</div>
)}
</div>
)
}