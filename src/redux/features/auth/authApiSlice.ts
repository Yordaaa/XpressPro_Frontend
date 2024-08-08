import { apiSlice } from '../apiSlice';
import { UserProps, CreateUserInputProps, resTypeProps } from './types';
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<resTypeProps, CreateUserInputProps>({
            query: (data) => {
                console.log(data);
                return {
                    url: '/api/auth/login',
                    method: 'POST',
                    body: data
                };
            }
        })
    })
});

export const { useLoginMutation } = authApiSlice;
