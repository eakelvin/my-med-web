import { apiSlice } from "./apiSlice";
const RECORDS_URL = '/api/records'

export const recordSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createRecords: builder.mutation({
            query: (data) => ({
                url: `${RECORDS_URL}/create`,
                method: 'POST',
                body: data
            })
        }),
        getRecords: builder.mutation({
            query: (id) => ({
                url: `${RECORDS_URL}/get/${id}`,
                method: 'GET',
            })
        }),
        updateRecords: builder.mutation({
            query: (data) => ({
                url: `${RECORDS_URL}/update`,
                method: 'PUT',
                body: data
            })
        }),
    })
})

export const { 
        useCreateRecordsMutation, 
        useGetRecordsMutation, 
        useUpdateRecordsMutation
    } = recordSlice