import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_REPORTS";

export const childIncidentsReportsApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildIncidentsReportList: builder.query({
      query: (queryArg) => ({
        url: `/child-reports/child-incident/list/${queryArg.fosterChildId}`,
        method: "GET",
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
          search: queryArg.search,
        },
      }),
      providesTags: [TAG],
    }),
    getChildIncidentsReport: builder.query({
      query: (queryArg) => ({
        url: `/child-reports/child-incident/${queryArg.incidentId}`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    deleteChildIncidentsReport: builder.mutation({
      query: (queryArg) => ({
        url: `/child-reports/child-incident/${queryArg.incidentId}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    patchChildIncidentsReport: builder.mutation({
      query: (queryArg) => {
        return {
          url: `/child-reports/child-incident/${queryArg.incidentId}`,
          method: "PATCH",
          body: queryArg.formData,
        };
      },
      invalidatesTags: [TAG],
    }),

    postChildIncidentsReport: builder.mutation({
      query: (queryArg) => ({
        url: `/child-reports/child-incident/${queryArg.fosterChildId}`,
        method: "POST",
        body: queryArg.formData,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetChildIncidentsReportListQuery,
  useLazyGetChildIncidentsReportQuery,
  useDeleteChildIncidentsReportMutation,
  usePostChildIncidentsReportMutation,
  usePatchChildIncidentsReportMutation,
} = childIncidentsReportsApi;
