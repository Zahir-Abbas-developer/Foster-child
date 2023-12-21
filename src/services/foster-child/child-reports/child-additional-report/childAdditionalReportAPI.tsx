import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "CHILD-ADDITIONAL-REPORT";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildAdditionalReportTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `/child-reports/additional-report/list/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    getChildAdditionalReportById: builder.query({
      query: (id) => `/child-reports/additional-report/${id}`,
    }),
  }),
});

export const {
  useGetChildAdditionalReportTableApiQuery,
  useGetChildAdditionalReportByIdQuery,
} = contactApi;
