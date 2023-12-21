import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const superVisoryVisitApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    supervisingVisitList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `chronology-events/list-supervising-home-visit/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["CARER_SUPERVISING-HOME_VISIT"],
    }),
    postSupervisingVisitList: builder.mutation({
      query: (payload: any) => ({
        url: `chronology-events/add-supervising-home-visit/${payload.params.fosterCarerId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["CARER_SUPERVISING-HOME_VISIT"],
    }),
    singleSupervisingVisitList: builder.query({
      query: (id: any) => `chronology-events/get-supervising-home-visit/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["CARER_SUPERVISING-HOME_VISIT"],
    }),
    patchSupervisingVisitList: builder.mutation({
      query: (payload: any) => ({
        url: `chronology-events/update-supervising-home-visit/${payload?.id}`,
        method: "PATCH",
        body: payload.formData,
      }),
      invalidatesTags: ["CARER_SUPERVISING-HOME_VISIT"],
    }),
    deleteSupervisingVisitList: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/delete-supervising-home-visit/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CARER_SUPERVISING-HOME_VISIT"],
    }),
  }),
});
export const {
  useSupervisingVisitListQuery,
  useLazySingleSupervisingVisitListQuery,
  usePostSupervisingVisitListMutation,
  usePatchSupervisingVisitListMutation,
  useDeleteSupervisingVisitListMutation,
} = superVisoryVisitApi;
