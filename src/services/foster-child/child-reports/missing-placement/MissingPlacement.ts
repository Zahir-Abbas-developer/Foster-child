import { baseAPI } from "@root/services/baseApi";
export const MissingPlacementAPi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllMissingPlacementListData: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `/foster-child/list-child-missing-placement-reports/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["MISSING_PLACEMENT_REPORT"],
    }),
    // getSingleMissingPlacementData: builder.query({
    //   query: ({ id }: any) => ({
    //     url: `/foster-child/get-child-missing-placement-reports/${id}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});
export const {
  useGetAllMissingPlacementListDataQuery,
  // useGetSingleMissingPlacementDataQuery,
} = MissingPlacementAPi;
