import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const ReviewOfficerRportsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Review Officer Rports List
    getReviewOfficerRports: builder.query<null, object>({
      query: ({ params }: any) => ({
        url: "child-reports/view-reviewing-officer-reports/list",
        method: "GET",
        params,
      }),
      providesTags: ["REVIEW_OFFICER_REPORTS"],
    }),

    // Get API By Id of Review Officer Rports
    getReviewOfficerRportsById: builder.query({
      query: (id: any) => `/child-reports/view-reviewing-officer-reports/${id}`,
      
      providesTags: ["REVIEW_OFFICER_REPORTS"],
    }),

    // Post API of Review Officer Rports List
    // postReviewOfficerRports: builder.mutation({
    //   query: (putDataParameter: any) => ({
    //     url: "/child-reports/view-reviewing-officer-reports/",
    //     method: "POST",
    //     param: "63e5eefe677b0d581e40682a",
    //     body: putDataParameter,
    //   }),
    //   invalidatesTags: ["REVIEW_OFFICER_REPORTS"],
    // }),

    // // Patch API of Review Officer Rports List
    // patchReviewOfficerRports: builder.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/child-reports/view-reviewing-officer-reports/${id}`,
    //     method: "PATCH",
    //     body: body,
    //   }),
    //   invalidatesTags: ["REVIEW_OFFICER_REPORTS"],
    // }),

    // Delete API of Review Officer Rports List
    // deleteReviewOfficerRports: builder.mutation({
    //   query: (id: any) => ({
    //     url: `/child-reports/view-reviewing-officer-reports/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["REVIEW_OFFICER_REPORTS"],
    // }),
  }),
});

export const {
  useGetReviewOfficerRportsQuery,
  useGetReviewOfficerRportsByIdQuery,
  // usePostReviewOfficerRportsMutation,
  // usePatchReviewOfficerRportsMutation,
  // useDeleteReviewOfficerRportsMutation,
} = ReviewOfficerRportsAPI;
