import { useTableParams } from "@root/hooks/useTableParams";
import { useGetAllThirdPartyLicenseListDataQuery } from "@root/services/system-admin/third-party-licence/thirdPartyLicence";
import { useRouter } from "next/router";

export const useThirdPartyLicence = () => {
  const router = useRouter();

  const { params } = useTableParams();

  const apiDataParameter = {
    params,
  };
  const { data } = useGetAllThirdPartyLicenseListDataQuery(apiDataParameter, {
    refetchOnMountOrArgChange: true,
  });
  return {
    router,
    data,
  };
};
