import { baseAPI } from "@root/services/baseApi";

export const endPlacementApi = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getEndPlacementList: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `/placement/end-placement/list-child-discharge-list-info/document/list/${fosterChildId}`,
        method: "GET",
        params,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useGetEndPlacementListQuery } = endPlacementApi;
