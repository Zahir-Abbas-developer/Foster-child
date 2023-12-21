import { baseAPI } from "@root/services/baseApi";

const TAG = "BUSINESS_CONTINUTY_PLAN";

export const BusinessContinutyPlan = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getBusinessContinutyPlanList: builder.query({
      query: () => ({
        url: `/admin/bcp`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    GetBusinessContinutyPlanQueryById: builder.query({
      query: (payload: any) => ({
        url: `/admin/bcp/${payload.params.id}`,
        method: "GET",
        params: payload.params,
      }),
    }),
    deleteBusinessContinutyPlan: builder.mutation({
      query: (payload: any) => ({
        url: `/admin/bcp`,
        method: "DELETE",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    createBusinessContinutyPlan: builder.mutation({
      query: (payload: any) => ({
        url: "/admin/bcp",
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateBusinessContinutyPlan: builder.mutation({
      query: (payload: any) => ({
        url: `/admin/bcp`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateBusinessContinutyPlanMutation,
  useDeleteBusinessContinutyPlanMutation,
  useGetBusinessContinutyPlanQueryByIdQuery,
  useGetBusinessContinutyPlanListQuery,
  useLazyGetBusinessContinutyPlanQueryByIdQuery,
  useUpdateBusinessContinutyPlanMutation,
} = BusinessContinutyPlan;
