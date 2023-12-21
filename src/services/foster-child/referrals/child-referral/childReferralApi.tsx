import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_REFERRAL";
const DOCTAG = "CHILD_REFERRAL_DOCUMNET";

export const childReferralApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildReferralTableApi: builder.query({
      query: ({ params }: any) => ({
        url: "foster-child/child-referral",
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    getChildReferralId: builder.query({
      query: (childReferralId: any) =>
        `foster-child/child-referral/${childReferralId}`,
      providesTags: [TAG],
    }),
    childReferralDocList: builder.query({
      query: ({ childReferralId, params }: any) => ({
        url: `foster-child/child-referral/documents/${childReferralId}`,
        method: "GET",
        params,
      }),
      providesTags: [DOCTAG],
    }),
  }),
});

export const {
  useGetChildReferralTableApiQuery,
  useGetChildReferralIdQuery,
  useChildReferralDocListQuery,
} = childReferralApi;
