import { configureStore } from '@reduxjs/toolkit'
import displayReducer from '../features/display/displaySlice'
import soundButtonSlice from '../features/sound/soundButtonSlice'
export default configureStore({
  reducer: {
    display: displayReducer,
    sound: soundButtonSlice,
  },
})
