import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
    reducerPath: "storeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com",
    }),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: ()=> '/products',
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        getCategories: builder.query({
            query: () => '/products/categories',
        }),
        getProductsByCategory: builder.query({
            query: (category) => `/products/category/${category}`
        })
    })
})

export const {useGetProductsQuery, useGetSingleProductQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery} = storeApi;