import { baseAPI } from "@root/services/baseApi";

export const FostringServiceManagerReportAPi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Fostring Service Manager Report List
    getFostringServiceManagerReport: builder.query<null, object>({
      query: ({ params }: any) => ({
        url: "/foster-child/childInfo/list-child-reports",
        method: "GET",
        params,
      }),
      providesTags: ["FOSTRING_SERVICE_MANAGER_REPORTS"],
    }),

    // Get API By Id of Fostring Service Manager Report
    getFostringServiceManagerReportById: builder.query({
      query: (id: any) => `/foster-child/childInfo/get-child-reports/${id}`,
      providesTags: ["FOSTRING_SERVICE_MANAGER_REPORTS"],
    }),

    // Post API of Fostring Service Manager Report List
    // postFostringServiceManagerReport: builder.mutation({
    //   query: (putDataParameter: any) => ({
    //     url: "/child-reports//",
    //     method: "POST",
    //     param: "63e5eefe677b0d581e40682a",
    //     body: putDataParameter,
    //   }),
    //   invalidatesTags: ["FOSTRING_SERVICE_MANAGER_REPORTS"],
    // }),

    // Patch API of Fostring Service Manager Report List
    // patchFostringServiceManagerReport: builder.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/child-reports//${id}`,
    //     method: "PATCH",
    //     body: body,
    //   }),
    //   invalidatesTags: ["FOSTRING_SERVICE_MANAGER_REPORTS"],
    // }),

    // Delete API of Fostring Service Manager Report List
    // deleteFostringServiceManagerReport: builder.mutation({
    //   query: (id: any) => ({
    //     url: `/child-reports//${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["FOSTRING_SERVICE_MANAGER_REPORTS"],
    // }),
  }),
});

export const {
  useGetFostringServiceManagerReportQuery,
  useGetFostringServiceManagerReportByIdQuery,
  // usePostFostringServiceManagerReportMutation,
  // usePatchFostringServiceManagerReportMutation,
  // useDeleteFostringServiceManagerReportMutation,
} = FostringServiceManagerReportAPi;
