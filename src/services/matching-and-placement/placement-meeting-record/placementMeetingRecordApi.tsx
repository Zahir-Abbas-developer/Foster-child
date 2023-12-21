import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const placementMeetingRecordApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    placementRecordList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `placement/list-placement-meeting-records/List/${payload.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["PLACEMENT_MEETING_RECORDS"],
    }),
    postPlacementRecords: builder.mutation({
      query: ({ formData, id }: any) => ({
        url: `placement/add-placement-meeting-records/${id.fosterChildId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["PLACEMENT_MEETING_RECORDS"],
    }),
    singlePlacementRecordsList: builder.query({
      query: (id: any) => `placement/get-placement-meeting-records/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["PLACEMENT_MEETING_RECORDS"],
    }),
    patchPlacementRecords: builder.mutation({
      query: (payload: any) => ({
        url: `placement/update-placement-meeting-records/${payload.placementMeetingRecordsId}`,
        method: "PATCH",
        body: payload.params,
      }),
      invalidatesTags: ["PLACEMENT_MEETING_RECORDS"],
    }),
    deletePlacementRecordsList: builder.mutation({
      query: (placementMeetingRecordsId: any) => ({
        url: `placement/delete-placement-meeting-records/${placementMeetingRecordsId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PLACEMENT_MEETING_RECORDS"],
    }),
  }),
});
export const {
  usePlacementRecordListQuery,
  usePostPlacementRecordsMutation,
  useLazyPlacementRecordListQuery,
  usePatchPlacementRecordsMutation,
  useDeletePlacementRecordsListMutation,
  useLazySinglePlacementRecordsListQuery,
} = placementMeetingRecordApi;
