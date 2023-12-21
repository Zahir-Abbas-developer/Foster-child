import { baseAPI } from "@root/services/baseApi";

const TAG = "COMPLAINT_LIST";

export const ComplaintsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getComplaintsList: builder.query({
      query: (payload: any) => ({
        url: `/child-chronology-of-events/complaints-info/List`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    GetComplaintsListQueryById: builder.query({
      query: (payload: any) => ({
        url: `/child-chronology-of-events/complaints-info/${payload.params.id}`,
        method: "GET",
        params: payload.params,
      }),
    }),
    deleteComplaintsList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/complaints-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    createComplaintsList: builder.mutation({
      query: (payload: any) => ({
        url: "/child-chronology-of-events/complaints-info",
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateComplaintsList: builder.mutation({
      query: (payload: any) => ({
        url: `/child-chronology-of-events/complaints-info/${payload?.params.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateComplaintsListMutation,
  useDeleteComplaintsListMutation,
  useGetComplaintsListQuery,
  useGetComplaintsListQueryByIdQuery,
  useLazyGetComplaintsListQuery,
  useUpdateComplaintsListMutation,
  useLazyGetComplaintsListQueryByIdQuery,
} = ComplaintsApi;
