import { baseAPI } from "@root/services/baseApi";
export const YoungPersonAPi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllYoungPersonListData: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `/child-reports/young-person-household/List`,
        method: "GET",
        params,
      }),
      providesTags: ["YOUNG_PERSON_REPORT"],
    }),
    getSingleYoungPersonData: builder.query({
      query: ({ id }: any) => ({
        url: `/child-reports/young-person-household/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetAllYoungPersonListDataQuery,
  useGetSingleYoungPersonDataQuery,
} = YoungPersonAPi;
