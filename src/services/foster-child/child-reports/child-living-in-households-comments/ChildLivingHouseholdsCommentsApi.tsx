import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_LIVING_IN_THE_HOUSEHOLD_COMMENTS";

export const ChildLivingHouseholdsCommentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLivingHouseholdReportTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `foster-child/childInfo/list-household-comments-info/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    getLivingHouseholReportById: builder.query({
      query: (id) => `foster-child/childInfo/get-household-comments-info/${id}`,
      providesTags: [TAG],
    }),
  }),
});

export const {
  useGetLivingHouseholdReportTableApiQuery,
  useGetLivingHouseholReportByIdQuery,
} = ChildLivingHouseholdsCommentsApi;
