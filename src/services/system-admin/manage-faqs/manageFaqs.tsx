import { baseAPI } from "@root/services/baseApi";

export const manageFaqsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllManageFaqsData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `admin/faqs`,
        method: "GET",
      }),
      providesTags: ["MANAGE_FAQS"],
    }),
    getSingleManageFaqsData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `admin/faqs/${apiDataParameter?.pathParams?.faqId}`,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
    }),
    postManageFaqsData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: "admin/faqs",
        method: "POST",
        params: apiDataParameter.queryParams,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["MANAGE_FAQS"],
    }),
    putManageFaqsData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `admin/faqs`,
        method: "PUT",
        // params: apiDataParameter?.queryParams,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["MANAGE_FAQS"],
    }),
    deleteManageFaqsData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `admin/faqs`,
        method: "DELETE",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["MANAGE_FAQS"],
    }),
    getAllRoles: builder.query({
      query: () => ({
        url: "/roles",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllManageFaqsDataQuery,
  useLazyGetSingleManageFaqsDataQuery,
  useGetSingleManageFaqsDataQuery,
  usePutManageFaqsDataMutation,
  usePostManageFaqsDataMutation,
  useDeleteManageFaqsDataMutation,
  useGetAllRolesQuery,
} = manageFaqsApi;
