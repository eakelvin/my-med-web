import { apiSlice } from "./apiSlice"
const MEDICINE_URL = '/api/medicines'

export const medicinesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addMedicine: builder.mutation({
            query: (data) => ({
                url: `${MEDICINE_URL}/medicine`,
                method: 'POST',
                body: data
            })
        }),
        getMedicines: builder.mutation({
            query: (id) => ({
                url: `${MEDICINE_URL}/medicine/${id}`,
                method: 'GET',
            })
        }),     
        getMedicine: builder.mutation({
            query: ({ id }) => ({
                url: `${MEDICINE_URL}/medicine/${id}`,
                method: 'GET',
            })
        }),
        updateMedicine: builder.mutation({
            query: ({ id, data }) => ({
                url: `${MEDICINE_URL}/medicine/${id}`,
                method: 'PUT',
                body: data
            })
        }),
        deleteMedicine: builder.mutation({
            query: (id) => ({
                url: `${MEDICINE_URL}/medicine/${id}`,
                method: 'DELETE',
            })
        }),
    })
})

export const { 
                useAddMedicineMutation, 
                useGetMedicinesMutation, 
                useGetMedicineMutation, 
                useUpdateMedicineMutation, 
                useDeleteMedicineMutation
        } = medicinesApiSlice