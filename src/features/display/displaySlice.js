import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
      value: 'About',
    },
    reducers: {
      changeDisplay: (state, display) => {state.value = display}
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { changeDisplay } = displaySlice.actions
  
  export default displaySlice.reducer