import { createSlice } from '@reduxjs/toolkit'

export const soundButtonSlice = createSlice({ 
    name: 'sound',
    initialState: {
        value: false,
    },
    reducers: {
        toggleSound: (state, sound)=> {state.value = sound}
    },
})

export const { toggleSound } = soundButtonSlice.actions
export default soundButtonSlice.reducer