import { baseAPI } from "@root/services/baseApi";

const TAG = "COMMENTS";

export const Comments = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsList: builder.query({
      query: (payload: any) => ({
        url: `/child-comment/comment/List`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    createComments: builder.mutation({
      query: (payload: any) => ({
        url: "/child-comment/comment",
        method: "POST",
        body: payload.body,
        params: payload.params,
      }),
      invalidatesTags: [TAG],
    }),
    deleteComments: builder.mutation({
      query: (payload: any) => ({
        url: `/child-comment/comment/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    LikeAComments: builder.mutation({
      query: (payload: any) => ({
        url: `/child-comment/commentLikes`,
        method: "POST",
        params: payload.params,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateCommentsMutation,
  useDeleteCommentsMutation,
  useGetCommentsListQuery,
  useLazyGetCommentsListQuery,
  useLikeACommentsMutation,
} = Comments;
