import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state) => {
      return { items: state.items.pop() }
    },
    clearItem: () => {
      return { items: [] }
    }
  }
})
export const { addItem, removeItem, clearItem } = cartSlice.actions

export default cartSlice.reducer
