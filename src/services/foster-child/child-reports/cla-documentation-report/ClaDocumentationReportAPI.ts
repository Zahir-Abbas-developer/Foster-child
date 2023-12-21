import { baseAPI } from "@root/services/baseApi";

const TAG = "CLA_DOCUMENTATION_REPORTS";

export const ClaDocumentationReportsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    GetClaDocumentationReportsList: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/list-CLA-child-report/${payload.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    GetClaDocumentationReportsListQueryById: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/get-CLA-child-report/${payload.params.childReportId}`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    createClaDocumentationReportsList: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/add-CLA-child-report/${payload.params.fosterChildId}`,
        method: "POST",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateClaDocumentationReportsListMutation,
  useGetClaDocumentationReportsListQuery,
  useGetClaDocumentationReportsListQueryByIdQuery,
  useLazyGetClaDocumentationReportsListQueryByIdQuery,
  useLazyGetClaDocumentationReportsListQuery,
} = ClaDocumentationReportsApi;
