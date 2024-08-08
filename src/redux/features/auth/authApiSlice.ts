import { apiSlice } from '../apiSlice';
import { CreateUserInputProps, resTypeProps } from './types';
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<resTypeProps, CreateUserInputProps>({
            query: (data) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data
                };
            }
        }),
        logoutApi: builder.mutation({
            query: () => ({
                url: '/auth/signout',
                method: 'POST'
            })
        })
    })
});

export const { useLoginMutation, useLogoutApiMutation } = authApiSlice;
