import { baseAPI } from "@root/services/baseApi";

export const systemConfigurationAPIs = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSystemConfigurationList: builder.query({
      query: (params: any) => ({
        url: `/admin/system-config`,
        method: "GET",
        params,
      }),
      providesTags: ["SYSTEM-CONFIGURATION"],
    }),
    postSystemConfiguration: builder.mutation({
      query: (data: any) => ({
        url: `/admin/system-config`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SYSTEM-CONFIGURATION"],
    }),
    updateSystemConfiguration: builder.mutation({
      query: (payload: any) => ({
        url: `/admin/system-config`,
        method: "put",
        body: payload.body,
      }),
      invalidatesTags: ["SYSTEM-CONFIGURATION"],
    }),
    getSystemConfigurationRecordData: builder.query({
      query: (systemConfigurationData: any) => ({
        url: `/admin/system-config/${systemConfigurationData}`,
        method: "GET",
      }),
      providesTags: ["SYSTEM-CONFIGURATION"],
    }),
    deleteSystemConfigurationList: builder.mutation({
      query: (deleteRecord: any) => ({
        url: `/admin/system-config`,
        method: "DELETE",
        body: deleteRecord,
      }),
      invalidatesTags: ["SYSTEM-CONFIGURATION"],
    }),
  }),
});

export const {
  useGetSystemConfigurationListQuery,
  useGetSystemConfigurationRecordDataQuery,
  useDeleteSystemConfigurationListMutation,
  usePostSystemConfigurationMutation,
  useUpdateSystemConfigurationMutation,
} = systemConfigurationAPIs;
