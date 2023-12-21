import { baseAPI } from "../../baseApi";

export const profilePreviewAboutAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllProfileDetails: builder.query<null, object>({
      query: (payload: any) => ({
        url: "user-profile/all-profile",
        method: "GET",
        params: payload,
      }),
      providesTags: ["PROFILE_PREVIEW_ABOUT"],
    }),
  }),
});

export const { useGetAllProfileDetailsQuery } = profilePreviewAboutAPI;
