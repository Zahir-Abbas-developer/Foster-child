import { baseAPI } from "@root/services/baseApi";
export const ThirdPartyLicence = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllThirdPartyLicenseListData: builder.query({
      query: ({ params }: any) => ({
        url: `/admin/third-party-licenses`,
        method: "GET",
        params,
      }),
      providesTags: ["THIRD_PARTY_LICENSE"],
    }),
    getSingleThirdPartyLicenseData: builder.query({
      query: ({ licenseId }: any) => ({
        url: `/admin/third-party-licenses/${licenseId}`,
        method: "GET",
      }),
    }),
    postThirdPartyLicenceData: builder.mutation({
      query: ({ body }: any) => ({
        url: `/admin/third-party-licenses`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["THIRD_PARTY_LICENSE"],
    }),
    patchThirdPartyLicenceData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/admin/third-party-licenses`,
        method: "PUt",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["THIRD_PARTY_LICENSE"],
    }),
    deleteThirdOfficeLicenseData: builder.mutation({
      query: ({ licenseId }: any) => ({
        url: `/admin/third-party-licenses`,
        method: "DELETE",
        body: { licenseId },
      }),
      invalidatesTags: ["THIRD_PARTY_LICENSE"],
    }),
    updateLicenseStatus: builder.mutation({
      query: ({ licenseId }) => ({
        url: "/admin/third-party-licenses/change-status",
        method: "PUT",
        body: {
          licenseId,
        },
      }),
      invalidatesTags: ["THIRD_PARTY_LICENSE"],
    }),
  }),
});
export const {
  useGetAllThirdPartyLicenseListDataQuery,
  useGetSingleThirdPartyLicenseDataQuery,
  usePostThirdPartyLicenceDataMutation,
  usePatchThirdPartyLicenceDataMutation,
  useDeleteThirdOfficeLicenseDataMutation,
  useUpdateLicenseStatusMutation,
} = ThirdPartyLicence;
