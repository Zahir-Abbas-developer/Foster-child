import { baseAPI } from "@root/services/baseApi";
export const rejectPlacementAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllRejectionsListData: builder.query({
      query: ({ params }: any) => ({
        url: `/placement/rejection-placement/List`,
        method: "GET",
        params,
      }),
      providesTags: ["REJECTIONS_PLACEMENT"],
    }),
    getSingleRejectedPlacementData: builder.query({
      query: ({ id: rejectedId }: any) => ({
        url: `/placement/rejection-placement/${rejectedId}`,
        method: "GET",
      }),
    }),
    postRejectionPlacementData: builder.mutation({
      query: ({ body }: any) => ({
        url: `/placement/rejection-placement`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["REJECTIONS_PLACEMENT"],
    }),
    patchRejectionPlacementData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/placement/rejection-placement/${apiDataParameter?.id}`,
        method: "PATCH",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["REJECTIONS_PLACEMENT"],
    }),
    deleteRejectionPlacementData: builder.mutation({
      query: ({ id }: any) => ({
        url: `/placement/rejection-placement/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REJECTIONS_PLACEMENT"],
    }),
  }),
});
export const {
  useGetAllRejectionsListDataQuery,
  useGetSingleRejectedPlacementDataQuery,
  usePostRejectionPlacementDataMutation,
  usePatchRejectionPlacementDataMutation,
  useDeleteRejectionPlacementDataMutation,
} = rejectPlacementAPI;
