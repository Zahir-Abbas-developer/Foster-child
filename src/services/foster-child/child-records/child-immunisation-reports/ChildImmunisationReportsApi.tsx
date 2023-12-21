import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_IMMUNISATION_REPORTS";

export const ChildImmunisationReportsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildImmunisationReportsList: builder.query({
      query: (payload: any) => ({
        url: `/child-reports/child-immunisation-report/List`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    GetChildImmunisationReportsListQueryById: builder.query({
      query: (payload: any) => ({
        url: `/child-reports/child-immunisation-report/${payload.params.id}`,
        method: "GET",
        params: payload.params,
      }),
    }),
    createChildImmunisationReportsList: builder.mutation({
      query: (payload: any) => ({
        url: "/child-reports/child-immunisation-report",
        method: "POST",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateChildImmunisationReportsList: builder.mutation({
      query: (payload: any) => ({
        url: `/child-reports/child-immunisation-report/${payload?.params.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteChildImmunisationReportsList: builder.mutation({
      query: (id: any) => ({
        url: `/child-reports/child-immunisation-report/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateChildImmunisationReportsListMutation,
  useDeleteChildImmunisationReportsListMutation,
  useGetChildImmunisationReportsListQuery,
  useLazyGetChildImmunisationReportsListQuery,
  useGetChildImmunisationReportsListQueryByIdQuery,
  useUpdateChildImmunisationReportsListMutation,
  useLazyGetChildImmunisationReportsListQueryByIdQuery,
} = ChildImmunisationReportsApi;
