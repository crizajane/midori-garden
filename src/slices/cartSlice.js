import { createSlice } from '@reduxjs/toolkit'


const initialState = {
items: {}, // { [plantId]: { ...plant, qty } }
totalQty: 0,
totalPrice: 0,
}


const recalc = (state) => {
let qty = 0
let price = 0
for (const id in state.items) {
qty += state.items[id].qty
price += state.items[id].qty * state.items[id].price
}
state.totalQty = qty
state.totalPrice = price
}


const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
addToCart(state, action) {
const plant = action.payload
const existing = state.items[plant.id]
if (existing) {
existing.qty += 1
} else {
state.items[plant.id] = { ...plant, qty: 1 }
}
recalc(state)
},
increaseQty(state, action) {
const id = action.payload
if (state.items[id]) state.items[id].qty += 1
recalc(state)
},
decreaseQty(state, action) {
const id = action.payload
if (!state.items[id]) return
state.items[id].qty -= 1
if (state.items[id].qty <= 0) delete state.items[id]
recalc(state)
},
removeItem(state, action) {
const id = action.payload
delete state.items[id]
recalc(state)
},
clearCart(state) {
state.items = {}
state.totalQty = 0
state.totalPrice = 0
}
}
})


export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer