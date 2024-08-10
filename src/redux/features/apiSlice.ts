import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    // baseUrl: 'http://localhost:12345/api',
    baseUrl: 'https://xpresspro-backend-1.onrender.com/api',
    credentials: 'include'
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({})
});
