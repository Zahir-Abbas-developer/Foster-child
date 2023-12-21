import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useGetEducationKeyStageReportRecordQuery } from "@root/services/foster-child/child-reports/education-key-stage-report/EducationKeyStageReportAPI";

const useViewEducationKeyStage = () => {
  const router = useRouter();
  const fosterChildId = router.query.fosterChildId;

  const { data, isLoading,isFetching,isSuccess } =
    useGetEducationKeyStageReportRecordQuery(fosterChildId);

  const reportsData = data?.data?.getEducationKeyStageReportsRes;

  console.log(reportsData?.isChildHaveSchoolPlacement === "true" ? "Yes" : "No");
  

  const defaultValues = {
    isChildHaveSchoolPlacement: reportsData?.isChildHaveSchoolPlacement === false ? "No" : "Yes",
    isThisChildSchool: reportsData?.isThisChildSchool === true ? "Yes" : "No",
    isSchoolDueToFosterPlaceChange: reportsData?.isSchoolDueToFosterPlaceChange === true ? "Yes" : "No",
    childHaveAStatementEducationalNeeds: reportsData?.childHaveAStatementEducationalNeeds === true ? "Yes" : "No",
    noToAboveQuestion: reportsData?.noToAboveQuestion || "",
    school: reportsData?.school || "",
    schoolType: reportsData?.schoolType,
    personalEducationPlan: reportsData?.personalEducationPlan,
    classStudying: reportsData?.classStudying,
    schoolYear: reportsData?.schoolYear,
    currentKeyStage: reportsData?.currentKeyStage,
    expectedKeyStage: reportsData?.expectedKeyStage,
    attendance: reportsData?.attendance,
    schoolBusPhone: reportsData?.schoolBusPhone,
    teacherName: reportsData?.teacherName,
    teacherRole: reportsData?.teacherRole,
    teacherPhone: reportsData?.teacherPhone,
    teacherEmailAddress: reportsData?.teacherEmailAddress,
    designatedAuthority: reportsData?.designatedAuthority,
    stageOfEducation: reportsData?.stageOfEducation,
    specialEducationNeeds: reportsData?.specialEducationNeeds,
    arrangementsForEducationNeeds: reportsData?.arrangementsForEducationNeeds,
    achievements: reportsData?.achievements,
    awardsAndRewards: reportsData?.awardsAndRewards,
    notes: reportsData?.notes,
  };

  const childExclusionSchema: any = Yup.object().shape({
    isChildHaveSchoolPlacement: Yup.boolean().required("Required"),
    isThisChildSchool: Yup.string().required("Required"),
    noToAboveQuestion: Yup.string().required("Required"),
    schoolType: Yup.string().required("Required"),
    personalEducationPlan: Yup.string().required("Required"),
    classStudying: Yup.string().required("Required"),
    schoolYear: Yup.string().required("Required"),
    currentKeyStage: Yup.string().required("Required"),
    expectedKeyStage: Yup.string().required("Required"),
    attendance: Yup.string().required("Required"),
    schoolBusPhone: Yup.string().required("Required"),
    teacherName: Yup.string().required("Required"),
    teacherRole: Yup.string().required("Required"),
    teacherPhone: Yup.string().required("Required"),
    teacherEmailAddress: Yup.string().required("Required"),
    designatedAuthority: Yup.string().required("Required"),
    stageOfEducation: Yup.string().required("Required"),
    specialEducationNeeds: Yup.string().required("Required"),
    arrangementsForEducationNeeds: Yup.string().required("Required"),
    achievements: Yup.string().required("Required"),
    awardsAndRewards: Yup.string().required("Required"),
    notes: Yup.string().required("Required"),
    isSchoolDueToFosterPlaceChange: Yup.string().required("Required"),
    childHaveAStatementEducationalNeeds: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(childExclusionSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router, defaultValues, };
};

export default useViewEducationKeyStage;
