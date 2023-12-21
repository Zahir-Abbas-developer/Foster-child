import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const placementPreferenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postPlacementPreferenceList: builder.mutation({
      query: (payload: any) => ({
        url: `ready-for-placement/placement-preference`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["POST_PLACEMENT_REFERENCES"],
    }),
  }),
});
export const { usePostPlacementPreferenceListMutation } =
  placementPreferenceApi;
