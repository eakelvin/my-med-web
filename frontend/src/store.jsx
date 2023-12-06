import {configureStore, getDefaultMiddleware} from  '@reduxjs/toolkit'
import authSlice from './Slices/authSlice'
import medSlice from './Slices/medSlice'
import { apiSlice } from './Slices/apiSlice'
// import { medicineApiSlice } from './Slices/medicineApiSlice'


const store = configureStore({
    reducer: {
        auth: authSlice,
        medicine: medSlice,
        [apiSlice.reducerPath] : apiSlice.reducer,
        // [medicineApiSlice.reducerPath] : medicineApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store