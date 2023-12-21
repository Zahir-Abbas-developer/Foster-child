import { useForm } from "react-hook-form";
import { defaultValues, viewOriginalChild } from "./";
import { useRouter } from "next/router";
import { usePostChildProfileInfoMutation } from "@root/services/foster-child/referrals/original-child-referral/OriginalChildReferralApi";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";
import { yupResolver } from "@hookform/resolvers/yup";

const useOrignalChildReferral = () => {
  const [postChildProfileData] = usePostChildProfileInfoMutation();

  const router = useRouter();
  const fosterChildId = router?.query?.fosterChildId;

  const { makePath } = usePath();

  const methods: any = useForm({
    resolver: yupResolver(viewOriginalChild),
    defaultValues,
  });

  const { handleSubmit, watch } = methods;

  const { mentalHealthStatus } = watch({
    name: "mentalHealthStatus",
  });
  const { childPhysicalDisability } = watch({
    name: "childPhysicalDisability",
  });
  const { adoptionConsideration } = watch({
    name: "adoptionConsideration",
  });
  const { sibling } = watch({
    name: "sibling",
  });

  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      mentalHealthStatus: mentalHealthStatus === "Yes" ? true : false,
      childPhysicalDisability: childPhysicalDisability === "Yes" ? true : false,
      adoptionConsideration: adoptionConsideration === "yes" ? true : false,
      sibling: sibling === "yes" ? true : false,
    };

    try {
      const res: any = await postChildProfileData({
        updatedData,
        fosterChildId,
      });
      enqueueSnackbar(
        res?.message ?? `Origin Child Refferal Added Successfully!`,
        {
          variant: "success",
        }
      );
      router.push(
        makePath({
          path: "/foster-child",
        })
      );
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return {
    methods,
    onSubmit,
    handleSubmit,
    mentalHealthStatus,
    childPhysicalDisability,
  };
};

export default useOrignalChildReferral;
