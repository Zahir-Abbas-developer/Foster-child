import { baseAPI } from "@root/services/baseApi";

export const manageFaqsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllDischargePlacementData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `placement/end-placement/list-child-discharge-list-info/document/list/${apiDataParameter?.pathParams?.fosterChildId}`,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
      providesTags: ["DISCHARGE_PLACEMENT"],
    }),
    getSingleDischargePlacementData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `placement/end-placement/get-child-discharge-list-info/document/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
    }),
    postDischargePlacementData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `placement/end-placement/add-child-discharge-list-info/document/${apiDataParameter?.pathParams?.fosterChildId}`,
        method: "POST",
        params: apiDataParameter.queryParams,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["DISCHARGE_PLACEMENT"],
    }),
    patchDischargePlacementData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `placement/end-placement/update-child-discharge-list-info/document/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        // params: apiDataParameter?.queryParams,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["DISCHARGE_PLACEMENT"],
    }),
    deleteDischargePlacementData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `placement/end-placement/delete-child-discharge-list-info/document/${apiDataParameter?.pathParams?.id}`,
        method: "DELETE",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["DISCHARGE_PLACEMENT"],
    }),
    getAllFosterCarerList: builder.query({
      query: (apiDataParameter: any) => ({
        url: "users/foster-carer-users",
        method: "GET",
        params: apiDataParameter.queryParams,
      }),
    }),
    getAllFosterChildLists: builder.query({
      query: (apiDataParameter: any) => ({
        url: "/users/foster-child-users",
        method: "GET",
        params: apiDataParameter.queryParams,
      }),
    }),
  }),
});

export const {
  useGetAllDischargePlacementDataQuery,
  useLazyGetAllDischargePlacementDataQuery,
  useLazyGetSingleDischargePlacementDataQuery,
  useGetSingleDischargePlacementDataQuery,
  usePatchDischargePlacementDataMutation,
  usePostDischargePlacementDataMutation,
  useDeleteDischargePlacementDataMutation,
  useLazyGetAllFosterCarerListQuery,
  useLazyGetAllFosterChildListsQuery,
} = manageFaqsApi;
