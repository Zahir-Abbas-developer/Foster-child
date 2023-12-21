import { baseAPI } from "@root/services/baseApi";

const DISCHARGETAG = "DISCHARGE_PLACEMENT";
const TRANSFERTAG = "TRANSFER_PLACEMENT";
const BACKUPTAG = "BACKUP_PLACEMENT";

export const placementAndDischargeHistoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Discharge
    getDischargeList: builder.query({
      query: ({ params }: any) => ({
        url: "foster-child/childInfo/list-placement-and-discharge-history",
        method: "GET",
        params,
      }),
      providesTags: [DISCHARGETAG],
    }),
    postDischarge: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "foster-child/childInfo/add-placement-and-discharge-history",
        method: "POST",
        body,
      }),
      invalidatesTags: [DISCHARGETAG],
    }),
    getDischargeId: builder.query({
      query: (dischargeId: any) =>
        `foster-child/childInfo/get-placement-and-discharge-history/${dischargeId}`,
      providesTags: [DISCHARGETAG],
    }),
    patchDischargeId: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `foster-child/childInfo/update-placement-and-discharge-history/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [DISCHARGETAG],
    }),
    deleteDischargeById: builder.mutation<null, void>({
      query: (id) => {
        return {
          url: `foster-child/childInfo/list-placement-and-discharge-history/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [DISCHARGETAG],
    }),
    // Transfer
    getTransferList: builder.query({
      query: ({ params }: any) => ({
        url: "foster-child/childInfo/list-placement-and-transfer-history",
        method: "GET",
        params,
      }),
      providesTags: [TRANSFERTAG],
    }),
    postTransfer: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "foster-child/childInfo/add-placement-and-transfer-history",
        method: "POST",
        body,
      }),
      invalidatesTags: [TRANSFERTAG],
    }),
    getTransferId: builder.query({
      query: (transferId: any) =>
        `foster-child/childInfo/get-placement-and-transfer-history/${transferId}`,
      providesTags: [TRANSFERTAG],
    }),
    patchTransferId: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `foster-child/childInfo/update-placement-and-transfer-history/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TRANSFERTAG],
    }),
    deleteTransferById: builder.mutation<null, void>({
      query: (id) => {
        return {
          url: `foster-child/childInfo/list-placement-transfer-history/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TRANSFERTAG],
    }),
    // Backup
    getBackupList: builder.query({
      query: ({ params }: any) => ({
        url: "foster-child/childInfo/list-placement-backup-carer-history",
        method: "GET",
        params,
      }),
      providesTags: [BACKUPTAG],
    }),
    postBackup: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "foster-child/childInfo/add-placement-backup-carer-history ",
        method: "POST",
        body,
      }),
      invalidatesTags: [BACKUPTAG],
    }),
    getBackupId: builder.query({
      query: (backupId: any) =>
        `foster-child/childInfo/get-placement-backup-carer-history/${backupId}`,
      providesTags: [BACKUPTAG],
    }),
    patchBackupId: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `foster-child/childInfo/update-placement-backup-carer-history/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [BACKUPTAG],
    }),
    deleteBackupById: builder.mutation<null, void>({
      query: (id) => {
        return {
          url: `foster-child/childInfo/placement-backup-carer-history/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [BACKUPTAG],
    }),
  }),
});

export const {
  // discharge
  useGetDischargeListQuery,
  usePostDischargeMutation,
  useGetDischargeIdQuery,
  usePatchDischargeIdMutation,
  useDeleteDischargeByIdMutation,
  // transfer
  useGetTransferListQuery,
  usePostTransferMutation,
  useGetTransferIdQuery,
  usePatchTransferIdMutation,
  useDeleteTransferByIdMutation,
  // backup
  useGetBackupListQuery,
  usePostBackupMutation,
  useGetBackupIdQuery,
  usePatchBackupIdMutation,
  useDeleteBackupByIdMutation,
} = placementAndDischargeHistoryApi;
