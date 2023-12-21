import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const childReportApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    childReportList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `child-reports/ooh-report/list/${payload.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),
    singleChildReportList: builder.query({
      query: (oohId: any) => `child-reports/ooh-report/${oohId}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),

    deleteChildReportList: builder.mutation({
      query: (oohId: any) => ({
        url: `child-reports/ooh-report/${oohId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["VIEW_CHILD_OOH_REPORT"],
    }),
  }),
});
export const {
  useChildReportListQuery,
  useLazySingleChildReportListQuery,
  useLazyChildReportListQuery,
  useDeleteChildReportListMutation,
} = childReportApi;
