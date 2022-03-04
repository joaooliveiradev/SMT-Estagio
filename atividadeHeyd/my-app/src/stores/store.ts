import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './AuthSlice'

export default configureStore({
    reducer: {
        isAuth: SliceReducer
    }
})