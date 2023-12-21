import { baseAPI } from "@root/services/baseApi";

export const SupervisoryHomeVisitAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Supervisory Home Visit List
    getSupervisoryHomeVisit: builder.query<null, object>({
      query: ({ params, fosterChildId, fosterCarerId }: any) => ({
        url: `/chronology-events/list-supervising-home-visit/${fosterCarerId}/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["SUPERVISORY_HOME_VISIT"],
    }),

    // Get API By Id of Supervisory Home Visit
    getSupervisoryHomeVisitById: builder.query({
      query: (supervisoryHomeVisitId: any) =>
        `/chronology-events/get-supervising-home-visit/${supervisoryHomeVisitId}`,
      providesTags: ["SUPERVISORY_HOME_VISIT"],
    }),

    // Get API By Id of Supervisory Home Visit Document List
    getSupervisoryHomeVisitDocument: builder.query<null, object>({
      query: ({ params, supervisoryHomeVisitId }: any) => ({
        url: `/chronology-events/list-supervising-home-visit/doc/list/${supervisoryHomeVisitId}`,
        method: "GET",
        params,
      }),
      providesTags: ["SUPERVISORY_HOME_VISIT"],
    }),

    // Get API By Id of Supervisory Home Visit
    // getSupervisoryHomeVisitDocumentById: builder.query({
    //   query: (supervisoryHomeVisitId: any) =>
    //     `/chronology-events/list-supervising-home-visit/doc/list/${supervisoryHomeVisitId}`,
    //   providesTags: ["SUPERVISORY_HOME_VISIT"],
    // }),

    // Post API of Supervisory Home Visit List
    // postSupervisoryHomeVisit: builder.mutation({
    //   query: (putDataParameter: any) => ({
    //     url: `/chronology-events/add-supervising-home-visit/${fosterChildId}`,
    //     method: "POST",
    //     param: "63e5eefe677b0d581e40682a",
    //     body: putDataParameter,
    //   }),
    //   invalidatesTags: ["SUPERVISORY_HOME_VISIT"],
    // }),

    // // Patch API of Supervisory Home Visit List
    // patchSupervisoryHomeVisit: builder.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/child-reports//${id}`,
    //     method: "PATCH",
    //     body: body,
    //   }),
    //   invalidatesTags: ["SUPERVISORY_HOME_VISIT"],
    // }),

    // Delete API of Supervisory Home Visit List
    // deleteSupervisoryHomeVisit: builder.mutation({
    //   query: (id: any) => ({
    //     url: `/chronology-events/delete-supervising-home-visit/{id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["SUPERVISORY_HOME_VISIT"],
    // }),
  }),
});

export const {
  useGetSupervisoryHomeVisitQuery,
  useGetSupervisoryHomeVisitByIdQuery,
  useGetSupervisoryHomeVisitDocumentQuery,
  // usePostSupervisoryHomeVisitMutation,
  // usePatchSupervisoryHomeVisitMutation,
  // useDeleteSupervisoryHomeVisitMutation,
} = SupervisoryHomeVisitAPI;
