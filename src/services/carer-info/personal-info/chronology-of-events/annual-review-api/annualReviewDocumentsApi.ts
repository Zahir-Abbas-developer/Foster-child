import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const annualReviewDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadDocumentList: builder.query({
      query: (payload: any) => ({
        url: `/chronology-events/uploaded-documents/list`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["ANNUAL_REVIEW_DOCUMENTS"],
    }),
    postReportDocuments: builder.mutation({
      query: (list: any) => ({
        url: "/chronology-events/uploaded-documents",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["ANNUAL_REVIEW_DOCUMENTS"],
    }),
    singleReportDocument: builder.query({
      query: (id: any) => `/chronology-events/uploaded-documents/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["ANNUAL_REVIEW_DOCUMENTS"],
    }),
    deleteDocumentList: builder.mutation({
      query: (id: any) => ({
        url: `/chronology-events/uploaded-document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ANNUAL_REVIEW_DOCUMENTS"],
    }),
  }),
});
export const {
  useUploadDocumentListQuery,
  usePostReportDocumentsMutation,
  useLazySingleReportDocumentQuery,
  useDeleteDocumentListMutation,
} = annualReviewDocumentsApi;
