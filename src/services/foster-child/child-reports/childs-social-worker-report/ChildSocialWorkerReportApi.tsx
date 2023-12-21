import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_SOCIAL_WORKER_REPORT";

export const childSocialWorkerReprts = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSocialWorkerReportTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `social-worker-details/list-child-social-worker-report/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    getSocialWorkerReportById: builder.query({
      query: (id) =>
        `social-worker-details/get-child-social-worker-report/${id}`,
      providesTags: [TAG],
    }),
  }),
});

export const {
  useGetSocialWorkerReportTableApiQuery,
  useGetSocialWorkerReportByIdQuery,
} = childSocialWorkerReprts;
