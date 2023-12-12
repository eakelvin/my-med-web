import { apiSlice } from "./apiSlice";
const RECORDS_URL = '/api/records'

export const recordsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createRecords: builder.mutation({
            query: (data) => ({
                url: `${RECORDS_URL}/create`,
                method: 'POST',
                body: data
            })
        }),
        getRecord: builder.mutation({
            query: (id) => ({
                url: `${RECORDS_URL}/get/${id}`,
                method: 'GET',
            })
        }),
        getRecords: builder.mutation({
            query: (id) => ({
                url: `${RECORDS_URL}/records/${id}`,
                method: 'GET',
            })
        }),
        updateRecords: builder.mutation({
            query: ({ id, data}) => ({
                url: `${RECORDS_URL}/update/${id}`,
                method: 'PUT',
                body: data
            })
        }),
    })
})

export const { 
        useCreateRecordsMutation, 
        useGetRecordMutation, 
        useUpdateRecordsMutation,
        useGetRecordsMutation
    } = recordsApiSlice