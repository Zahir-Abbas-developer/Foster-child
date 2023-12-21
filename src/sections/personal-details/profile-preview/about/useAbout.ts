import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";

export const useAbout = () => {
  const theme: any = useTheme();
  const {
    data: personalData,
    isLoading,
    isError,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "personalInfo",
  });

  //Function to Add Gap Between Object Keys For About API
  function formatObjectKeys(obj: any) {
    const formattedObj: any = {};
    const regex = /((?<=[a-z])([A-Z])|([A-Z])(?=[a-z]))/g;
    Object.entries(obj || {}).forEach(([key, value]) => {
      const formattedKey = key.replace(regex, " $1");
      formattedObj[formattedKey] = value;
    });
    return formattedObj;
  }
  //Storing Updated Keys
  const formattedDataAbout = formatObjectKeys(personalData?.data);

  return {
    isLoading,
    formattedDataAbout,
    theme,
    personalData,
    isError,
  };
};
