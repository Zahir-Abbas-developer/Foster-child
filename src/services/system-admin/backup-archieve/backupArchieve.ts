import { baseAPI } from "@root/services/baseApi";
export const BackupArchieveApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllBackupArchieveListData: builder.query({
      query: ({ params }: any) => ({
        url: `/backups`,
        method: "GET",
        params,
      }),
      providesTags: ["BACKUP_ARCHIEVE"],
    }),
  }),
});
export const { useGetAllBackupArchieveListDataQuery } = BackupArchieveApi;
