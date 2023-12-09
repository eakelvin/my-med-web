import {configureStore, getDefaultMiddleware} from  '@reduxjs/toolkit'
import authSlice from './Slices/authSlice'
// import medSlice from './Slices/medSlice'
import { apiSlice } from './Slices/apiSlice'


const store = configureStore({
    reducer: {
        auth: authSlice,
        // medicine: medSlice,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store