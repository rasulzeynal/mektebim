import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const adamApi = createApi ({
    reducerPath:"adamApi",
    baseQuery:fetchBaseQuery({
        baseUrl: "http://localhost:3002/"}),
        endpoints:(build) => ({
            addAdam: build.mutation ({
                query: (body) => ({
                    url:"data",
                    method:"POST",
                    body
                })
            })
        })
})

export const {useGetAdamQuery,useAddAdamMutation} = adamApi; 