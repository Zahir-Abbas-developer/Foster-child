import { baseAPI } from "@root/services/baseApi";

const TAG = "COMPLAINT_DOCUMENTS_EVENTS";

export const ComplaintsDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getComplaintsDocumentslist: builder.query({
      query: (payload: any) => ({
        url: `/events-and-notification/uploaded-documents-list/${payload.params.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),

    deleteComplaintsDocuments: builder.mutation({
      query: (id: any) => ({
        url: `/events-and-notification/uploaded-document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    createComplaintsDocuments: builder.mutation({
      query: (payload: any) => ({
        url: `/events-and-notification/uploaded-documents/upload-all/${payload?.params.fosterChildId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateComplaintsDocumentsMutation,
  useDeleteComplaintsDocumentsMutation,
  useGetComplaintsDocumentslistQuery,
  useLazyGetComplaintsDocumentslistQuery,
} = ComplaintsDocumentsApi;
