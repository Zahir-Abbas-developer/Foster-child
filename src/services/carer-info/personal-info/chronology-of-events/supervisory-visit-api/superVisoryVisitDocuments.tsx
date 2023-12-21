import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
export const superVisoryVisitDocuments = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    supervisoryVisitUploadDocument: builder.query({
      query: (search: any) => ({
        url: `chronology-events/list-supervising-home-visit/doc/list/${search?.params.supervisoryHomeVisitId}`,
        method: "GET",
        params: search.params,
      }),
      providesTags: ["CARER_SUPERVISING-HOME_VISIT_DOCUMENTS"],
    }),
    postSupervisoryVisitDocuments: builder.mutation({
      query: (payload: any) => ({
        url: `chronology-events/add-supervising-home-visit/doc/${payload.params.supervisoryHomeVisitId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["CARER_SUPERVISING-HOME_VISIT_DOCUMENTS"],
    }),
    singleSupervisoryVisitDocument: builder.query({
      query: (supervisoryHomeVisitDocId: any) =>
        `chronology-events/get-supervising-home-visit/doc/${supervisoryHomeVisitDocId}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["CARER_SUPERVISING-HOME_VISIT_DOCUMENTS"],
    }),
    deleteSupervisoryDocument: builder.mutation({
      query: (supervisoryHomeVisitDocId: any) => ({
        url: `chronology-events/delete-home-visit/doc/${supervisoryHomeVisitDocId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CARER_SUPERVISING-HOME_VISIT_DOCUMENTS"],
    }),
  }),
});
export const {
  useSupervisoryVisitUploadDocumentQuery,
  usePostSupervisoryVisitDocumentsMutation,
  useLazySingleSupervisoryVisitDocumentQuery,
  useDeleteSupervisoryDocumentMutation,
} = superVisoryVisitDocuments;
