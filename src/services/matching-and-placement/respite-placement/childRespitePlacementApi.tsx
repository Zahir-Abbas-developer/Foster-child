import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const childRespitePlacementApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRespitePlacementList: builder.query<null, object>({
      query: (payload: any) => ({
        // url: `placement/list-placement-meeting-records/List/${payload.fosterChildId}`,
        url: `/placement/child-respite/list-child-respite-list-info/document/list/${payload.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["CHILD_RESPITE_PLACEMENT"],
    }),
    postRespitePlacement: builder.mutation({
      query: ({ formData, id }: any) => ({
        // url: `placement/add-placement-meeting-records/${id.fosterChildId}`,
        url: `placement/child-respite/add-child-respite-info/document/${id.fosterChildId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["CHILD_RESPITE_PLACEMENT"],
    }),
    singleRespitePlacementList: builder.query({
      query: (id: any) => 
    //   `placement/get-placement-meeting-records/${id}`,
      `placement/child-respite/get-child-respite-list-info/document/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["CHILD_RESPITE_PLACEMENT"],
    }),
    patchRespitePlacement: builder.mutation({
      query: (payload: any) => ({
        // url: `placement/update-placement-meeting-records/${payload.placementMeetingRecordsId}`,
        url: `placement/child-respite/update-child-respite-list-info/document/${payload.respiteId}`,
        method: "PATCH",
        body: payload.params,
      }),
      invalidatesTags: ["CHILD_RESPITE_PLACEMENT"],
    }),
    deleteRespitePlacementList: builder.mutation({
      query: (respiteId: any) => ({
        // url: `placement/delete-placement-meeting-records/${placementMeetingRecordsId}`,
        url: `placement/child-respite/delete-child-respite-list-info/document/${respiteId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_RESPITE_PLACEMENT"],
    }),
  }),
});
export const {
//   usePlacementRecordListQuery,
//   usePostPlacementRecordsMutation,
//   useLazyPlacementRecordListQuery,
//   usePatchPlacementRecordsMutation,
//   useDeletePlacementRecordsListMutation,
//   useLazySinglePlacementRecordsListQuery,
useDeleteRespitePlacementListMutation,
useGetRespitePlacementListQuery,
usePostRespitePlacementMutation,
usePatchRespitePlacementMutation,
useLazyGetRespitePlacementListQuery,
useLazySingleRespitePlacementListQuery,
} = childRespitePlacementApi;
