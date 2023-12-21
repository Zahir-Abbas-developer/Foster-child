import { baseAPI } from "@root/services/baseApi";

const TAG = "ORIGINAL_CHILD_REFERRAL";

export const OriginalChildReferralApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postChildProfileInfo: builder.mutation({
      query: ({ updatedData, fosterChildId }: any) => ({
        url: `foster-child/personal-info/${fosterChildId}`,
        method: "POST",
        body: updatedData,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const { usePostChildProfileInfoMutation } = OriginalChildReferralApi;
