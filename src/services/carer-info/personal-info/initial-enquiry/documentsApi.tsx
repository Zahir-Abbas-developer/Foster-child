import { baseAPI, TAGS } from "@root/services/baseApi";

export const documentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDocumentsTableData: builder.query({
      query: (params: any) => "initial-enquiry/documents",
    }),
    uploadDocuments: builder.mutation({
      query: (formData: any) => ({
        url: "/initial-inquiry/upload-document",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["INITIAL-ENQUIRY-DOCS"],
    }),
    deleteDocuments: builder.mutation({
      query: (id: any) => ({
        url: `/initial-inquiry/upload-document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["INITIAL-ENQUIRY-DOCS"],
    }),
  }),
});

export const {
  useGetDocumentsTableDataQuery,
  useUploadDocumentsMutation,
  useDeleteDocumentsMutation,
} = documentsApi;
