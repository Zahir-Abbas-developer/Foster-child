import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";

export const useSpecialities = () => {
  const theme: any = useTheme();
  const {
    data: specialLitiesDetails,
    isLoading,
    isError,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "trainingHistory.specialities",
  });

  const specialitiesData = specialLitiesDetails?.data;

  const specialitiesListValue: any = {
    followInstruction: "Able to follow instructions & procedures",
    teamWork: "Able to work in a team but use own initiative",
    caring: "Caring and kind",
    communication: "Communication skills, including listening",
    moving: "Moving and handling",
    observationSkill: "Observational skills",
    organisingSkill: "Organising skills",
    handsOn: "Willing to be hands-on with patients",
    personalCare: "Willing to do personal care tasks",
  };
  const filteredObject: any = {};
  for (const key in specialitiesListValue) {
    if (specialLitiesDetails?.data[key]) {
      filteredObject[key] = specialitiesListValue[key];
    }
  }
  return {
    filteredObject,
    isLoading,
    specialitiesData,
    specialLitiesDetails,
    theme,
    specialitiesListValue,
    isError,
  };
};
