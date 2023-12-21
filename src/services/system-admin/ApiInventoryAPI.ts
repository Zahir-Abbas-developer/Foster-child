import { baseAPI } from "@root/services/baseApi";

const TAG = "API_INVENTORY";

export const apiInventoryApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getApiInventory: builder.query({
      query: () => ({
        url: `/admin/api-inventory`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    postApiInventory: builder.mutation({
      query: ({ formData}) => ({
        url: `/admin/api-inventory`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [TAG],
    }),
    putApiInventory: builder.mutation({
      query: ({ formData }) => ({
        url: `/admin/api-inventory`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: [TAG],
    }),

    deleteApiInventory: builder.mutation({
      query: ({ apiInventoryId }) => ({
        url: `/admin/api-inventory`,
        method: "DELETE",
        body: { apiInventoryId },
      }),
      invalidatesTags: [TAG],
    }),
    getApiInventoryById: builder.query({
      query: ({ apiInventoryId }) => ({
        url: `/admin/api-inventory/${apiInventoryId}`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    putApiInventoryChangeStatus: builder.mutation({
      query: ({ formData }) => ({
        url: `/admin/api-inventory/change-status`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  usePutApiInventoryChangeStatusMutation,
  useLazyGetApiInventoryByIdQuery,
  useDeleteApiInventoryMutation,
  usePutApiInventoryMutation,
  usePostApiInventoryMutation,
  useGetApiInventoryQuery,
} = apiInventoryApi;
