import { useTheme } from "@mui/material";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetImmunisationListDataQuery } from "@root/services/carer-info/medical-history/immunisation/immunisationApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useImmunisations = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setSearch] = React.useState("");
  const { makePath } = usePath();

  const { params, pageChangeHandler, sortChangeHandler } = useTableParams();
  const theme: any = useTheme();
  const router = useRouter();
  const { fosterCarerId } = router.query;
  const tableHeaderRef = useRef<any>();
  const { data, isSuccess, isError, isFetching, isLoading } =
    useGetImmunisationListDataQuery({
      params: {
        fosterCarerId: fosterCarerId,
        search: search,
        ...params,
      },
    });
  console.log({ data });

  const immunizationListData = data?.immunizationList;
  const meta = data?.meta;
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
    immunizationListData,
    setSearch,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    meta,
    params,
    pageChangeHandler,
    sortChangeHandler,
    makePath,
  };
};
