import { apiSlice } from "./apiSlice";
const REPORTS_URL = '/api/reports'

export const reportsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updatePageVisits: builder.mutation({
            query: (data) => ({
                url: `${REPORTS_URL}/count`,
                method: 'POST',
                body: data
            })
        }),
        getPageVisits: builder.mutation({
            query: (id) => ({
                url: `${REPORTS_URL}/visits/${id}`,
                method: 'GET',
            })
        }),
        // updateRecords: builder.mutation({
        //     query: ({ id, data}) => ({
        //         url: `${REPORTS_URL}/update/${id}`,
        //         method: 'PUT',
        //         body: data
        //     })
        // }),
    })
})

export const { 
        useGetPageVisitsMutation,
        useUpdatePageVisitsMutation
} = reportsApiSlice