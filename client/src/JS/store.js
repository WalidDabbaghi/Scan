import { configureStore  } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
 user:userSlice , 
 },
})


// code from Redux Toolkit



 