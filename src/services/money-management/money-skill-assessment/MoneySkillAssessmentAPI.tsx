import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const MoneySkillAssessmentAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Money Assessment Skill List
    getMoneyAssessmentSkillList: builder.query<null, object>({
      query: ({ params, fosterChildId }: any) => ({
        url: `/money-management/money-skill-assesment/list/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["MONEY_ASSESSMENT_SKILL"],
    }),

    // Get API By Id of Money Assessment Skill
    getMoneyAssessmentSkillById: builder.query({
      query: (id: any) => `/money-management/get-money-skill-assesment/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["MONEY_ASSESSMENT_SKILL"],
    }),

    // Post API of Money Assessment Skill
    postMoneyAssessmentSkill: builder.mutation({
      query: ({ data, fosterChildId }: any) => ({
        url: `/money-management/add-money-skill-assesment/${fosterChildId}`,
        method: "POST",
        param: "63e5eefe677b0d581e40682a",
        body: data,
      }),
      invalidatesTags: ["MONEY_ASSESSMENT_SKILL"],
    }),

    // Patch API of Money Assessment Skill
    patchMoneyAssessmentSkill: builder.mutation({
      query: ({ id, body }) => ({
        url: `/money-management/update-money-skill-assesment/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["MONEY_ASSESSMENT_SKILL"],
    }),

    // Delete API of Money Assessment Skill
    deleteMoneyAssessmentSkill: builder.mutation({
      query: (id: any) => ({
        url: `/money-management/delete-money-skill-assesment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MONEY_ASSESSMENT_SKILL"],
    }),
  }),
});

export const {
  useGetMoneyAssessmentSkillListQuery,
  useGetMoneyAssessmentSkillByIdQuery,
  usePostMoneyAssessmentSkillMutation,
  usePatchMoneyAssessmentSkillMutation,
  useDeleteMoneyAssessmentSkillMutation,
} = MoneySkillAssessmentAPI;
