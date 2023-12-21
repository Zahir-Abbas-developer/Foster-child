import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "FOSTERED_YOUNG_PERSONS_COMMENTS";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getFosteredYoungPersonsCommentsTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `child-reports/fostered-young-person-comments/List/fosterChildId`,
        method: "GET",
        params: {
          ...params,
          fosterChildId: fosterChildId,
        },
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    getFosteredYoungPersonsCommentsById: builder.query({
      query: (id) => `/child-reports/fostered-young-person-comments/${id}`,
    }),
  }),
});

export const {
  useGetFosteredYoungPersonsCommentsTableApiQuery,
  useGetFosteredYoungPersonsCommentsByIdQuery,
} = contactApi;
