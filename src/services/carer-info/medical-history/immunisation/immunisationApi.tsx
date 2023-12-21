import { baseAPI } from "@root/services/baseApi";

export const immunisationApi: any = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getImmunisationListData: builder.query({
      query: ({ payload }: any) => ({
        url: `carer-Info/immunization${payload.params.fosterCarerId}`,
        params: payload?.params,
      }),
    }),
  }),
});

export const { useGetImmunisationListDataQuery } = immunisationApi;
