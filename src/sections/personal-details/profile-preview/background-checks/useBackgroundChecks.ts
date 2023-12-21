import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";

export const useBackgroundChecks = () => {
  const theme: any = useTheme();
  const { data: workDetails, isLoading: workIsLoading }: any =
    useGetAllProfileDetailsQuery({
      infoToget: "backgroundCheck.dbs",
    });

  const workDetailsData = workDetails?.data;

  return {
    workIsLoading,
    workDetailsData,
    workDetails,
    theme,
  };
};
