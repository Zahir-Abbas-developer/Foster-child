import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {
  useGetIfaParticiaptionPolicyByIdQuery,
  usePutIfaParticiaptionPolicyByIdMutation,
} from "@root/services/foster-child/other-information/ifa-participation-policy/ifaParticipationPolicy";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Blob } from "buffer";

const useViewIfaParticipationPolicyChild = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const ifaChildId = router.query.ifaChildId;

  const { data, isLoading } = useGetIfaParticiaptionPolicyByIdQuery(ifaChildId);


  // console.log(ratingValue);

  const defaultValues = {
    dateOfParticipation: data?.data?.date || new Date(todayDate),
    achievement: data?.data?.achievement || "",
    likeMost: data?.data?.likeMost || "",
    likeEvent: data?.data?.likeEvent || "",
    likeNextTime: data?.data?.likeNextTime || "",
    rating: data?.data?.rating || 0,
    participationActivity: data?.data?.participationActivity || "",
    file: data?.data?.file || "",
  };

  const childExclusionSchema: any = Yup.object().shape({
    achievement: Yup.string().required("Required"),
    dateOfParticipation: Yup.date().required("Required"),
    likeMost: Yup.string().required("Required"),
    likeEvent: Yup.string().required("Required"),
    likeNextTime: Yup.string().required("Required"),
    // rating : Yup.number().required("Required"),
    participationActivity: Yup.string().required("Required"),
    file: Yup.mixed().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(childExclusionSchema),
    defaultValues,
  });

  const { reset, control, handleSubmit } = methods;

  const formData = new FormData();
  const onSubmit = async (data: any) => {
   
  };

  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...data?.data,
      dateOfParticipation: data?.data
        ? new Date(data?.data?.dateOfParticipation)
        : new Date(),
    }));
  }, [data?.data, reset]);

  return {
    methods,
    handleSubmit,
    onSubmit,
    router,
    data,
    isLoading,
  };
};

export default useViewIfaParticipationPolicyChild;
