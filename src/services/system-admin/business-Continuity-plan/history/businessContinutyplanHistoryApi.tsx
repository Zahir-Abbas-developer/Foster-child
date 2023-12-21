import { baseAPI } from "@root/services/baseApi";

const TAG = "BUSINESS_CONTINUTY_PLAN_HISTORY";

export const BusinessContinutyPlanHistory = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getBusinessContinutyPlanHistoryList: builder.query({
      query: () => ({
        url: `/admin/bcp-history`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    deleteBusinessContinutyPlanHistory: builder.mutation({
      query: (payload: any) => ({
        url: `/admin/bcp-history`,
        method: "DELETE",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    createBusinessContinutyPlanHistory: builder.mutation({
      query: (payload: any) => ({
        url: `/admin/bcp-history`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateBusinessContinutyPlanHistory: builder.mutation({
      query: (payload: any) => ({
        url: `/admin/bcp-history`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateBusinessContinutyPlanHistoryMutation,
  useDeleteBusinessContinutyPlanHistoryMutation,
  useGetBusinessContinutyPlanHistoryListQuery,
  useLazyGetBusinessContinutyPlanHistoryListQuery,
  useUpdateBusinessContinutyPlanHistoryMutation
} = BusinessContinutyPlanHistory;
