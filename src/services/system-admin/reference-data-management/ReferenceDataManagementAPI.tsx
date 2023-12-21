import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "REFERENCE-DATA-MANAGEMENT";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReferenceDataManagementTableApi: builder.query({
      query: ({ params }: any) => ({
        url: `/admin/references/categories`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postReferenceDataManagementCategoriesApi: builder.mutation({
      query: (body: any) => ({
        url: `/admin/references/categories`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    putReferenceDataManagementCategoriesById: builder.mutation({
      query: ({ body, id }: any) => {
        return {
          url: `/admin/references/categories`,
          method: "PUT",
          body: { id, ...body },
        };
      },
      invalidatesTags: [TAG],
    }),
    getReferenceDataManagementCategoriesById: builder.query({
      query: (id) => `/admin/references/categories/${id}`,
    }),
    deleteReferenceDataManagementCategoriesById: builder.mutation({
      query: (id: any) => {
        return {
          url: `/admin/references/categories/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
    //add-reference-data
    getAddReferenceDataTableApi: builder.query({
      query: ({ params }: any) => ({
        url: `/admin/references/data`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postAddReferenceDataApi: builder.mutation({
      query: (body: any) => ({
        url: `/admin/references/data`,
        method: "POST",
        body: { ...body },
      }),
      invalidatesTags: [TAG],
    }),
    getAddReferenceDataById: builder.query({
      query: (id) => `/admin/references/data/${id}`,
    }),
    putAddReferenceDataById: builder.mutation({
      query: ({ body, id }: any) => {
        return {
          url: `/admin/references/data`,
          method: "PUT",
          body: { id, ...body },
        };
      },
      invalidatesTags: [TAG],
    }),
    deleteAddReferenceDataById: builder.mutation({
      query: (id: any) => {
        return {
          url: `/admin/references/data/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetReferenceDataManagementTableApiQuery,
  usePostReferenceDataManagementCategoriesApiMutation,
  useGetReferenceDataManagementCategoriesByIdQuery,
  usePutReferenceDataManagementCategoriesByIdMutation,
  useDeleteReferenceDataManagementCategoriesByIdMutation,
  //add-reference-data
  useGetAddReferenceDataTableApiQuery,
  usePostAddReferenceDataApiMutation,
  useGetAddReferenceDataByIdQuery,
  usePutAddReferenceDataByIdMutation,
  useDeleteAddReferenceDataByIdMutation,
} = contactApi;
