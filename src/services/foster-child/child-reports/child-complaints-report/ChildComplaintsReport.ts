import { baseAPI } from "@root/services/baseApi";
export const ChildComplaintsReport = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllComplaintsListData: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `/child-reports/child-complaint/list/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_COMPLAINTS_REPORT"],
    }),
    getSingleComplaintsData: builder.query({
      query: ({ complaintsId }: any) => ({
        url: `/child-reports/child-complaint/${complaintsId}`,
        method: "GET",
        params: complaintsId,
      }),
    }),
  }),
});
export const {
  useGetAllComplaintsListDataQuery,
  useGetSingleComplaintsDataQuery,
} = ChildComplaintsReport;
