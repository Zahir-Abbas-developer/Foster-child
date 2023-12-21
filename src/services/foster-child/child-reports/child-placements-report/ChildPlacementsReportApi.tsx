import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_PLACEMENTS_REPORT";

export const childPlacementReprts = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPlacementReportTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `child-reports/child-placement-report/list/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    getPlacementReportById: builder.query({
      query: (id) => `child-reports/child-placement-report/${id}`,
      providesTags: [TAG],
    }),
  }),
});

export const {
  useGetPlacementReportTableApiQuery,
  useGetPlacementReportByIdQuery,
} = childPlacementReprts;
