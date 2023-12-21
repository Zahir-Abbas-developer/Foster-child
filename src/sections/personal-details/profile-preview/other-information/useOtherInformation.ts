import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";

export const useOtherInformation = () => {
  const theme: any = useTheme();
  const {
    data: documentsDetails,
    isLoading: documentsIsLoading,
    isError,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "documents",
  });

  const documentsData = documentsDetails?.data;

  return {
    documentsIsLoading,
    documentsData,
    documentsDetails,
    theme,
    isError,
  };
};
