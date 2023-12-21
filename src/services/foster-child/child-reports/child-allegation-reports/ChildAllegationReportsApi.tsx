import { baseAPI } from "@root/services/baseApi";

export const ChildAlligationRportsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Child Alligation Rports List
    getChildAlligationRports: builder.query<null, object>({
      query: ({ params }: any) => ({
        url: "/child-reports/allegations-report/List",
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_ALLEGATION_REPORTS"],
    }),

    // Get API By Id of Child Alligation Rports
    getChildAlligationRportsById: builder.query({
      query: (id: any) => `/child-reports/allegations-report/${id}`,

      providesTags: ["CHILD_ALLEGATION_REPORTS"],
    }),

    // Post API of Child Alligation Rports List
    postChildAlligationRports: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/child-reports/allegations-report",
        method: "POST",
        param: "63e5eefe677b0d581e40682a",
        body: putDataParameter,
      }),
      invalidatesTags: ["CHILD_ALLEGATION_REPORTS"],
    }),

    // Patch API of Child Alligation Rports List
    patchChildAlligationRports: builder.mutation({
      query: ({ id, body }) => ({
        url: `/child-reports/allegations-report/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["CHILD_ALLEGATION_REPORTS"],
    }),
  }),
});

export const {
  useGetChildAlligationRportsQuery,
  useGetChildAlligationRportsByIdQuery,
  usePostChildAlligationRportsMutation,
  usePatchChildAlligationRportsMutation,
} = ChildAlligationRportsAPI;
