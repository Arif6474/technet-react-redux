import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),

    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),

    getComments: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: ['comment'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
} = productApi;
