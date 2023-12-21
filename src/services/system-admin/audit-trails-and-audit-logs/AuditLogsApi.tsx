import { baseAPI } from "@root/services/baseApi";

export const auditLogsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuditLogsList: builder.query({
      query: ({ params }: any) => ({
        url: "/admin/audit-logs",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetAuditLogsListQuery } = auditLogsApi;
