import { useTheme } from "@mui/material";
import { useGetAllProfileDetailsQuery } from "@root/services/personal-details/profile-preview/aboutApi";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";
import imageIcon from "@root/assets/svg/image-format.svg";
import Image from "next/image";

export const useEmploymentStatus: any = () => {
  const theme: any = useTheme();
  const {
    data: addressDetails,
    isLoading: addressIsLoading,
    isError,
  }: any = useGetAllProfileDetailsQuery({
    infoToget: "otherInfo.employmentStatus",
  });

  //Getting the objects from api
  const employmentStatusObjects = {
    limitedCompany: {
      label: "Limited Company",
      data: addressDetails?.data?.limitedCompany,
    },
    selfEmployed: {
      label: "Self Employed",
      data: addressDetails?.data?.selfEmployed,
    },
    umberallaComapny: {
      label: "Amberalla Company",
      data: addressDetails?.data?.umberallaComapny,
    },
  };

  //Handling Paye Object Here
  const payeDataDetails = addressDetails?.data;

  //Labels to display again api value
  const labelMapping: any = {
    status: `Select Candidate's Employement Status`,
    taxCode: "Pay Tax Code",
    incuranceNo: "National Insurance No",
  };

  //Properties For Display Data in this order
  const propertyOrder = ["status", "taxCode", "incuranceNo", "document"];

  //Checking the File Extension to display the respective icon
  const getFileIcon = (filename: any) => {
    const extension = filename.split(".").pop().toLowerCase();
    if (extension === "pdf") {
      return <Image src={pdfIcon} alt="pdf-icon" width={24} height={20} />;
    } else if (extension === "doc" || extension === "docx") {
      return <Image src={wordIcon} alt="word icon" width={24} height={20} />;
    } else if (extension === "xls" || extension === "xlsx") {
      return <Image src={excelIcon} alt="excel icon" width={24} height={20} />;
    } else {
      return (
        <Image src={imageIcon} alt="Default Image" width={24} height={20} />
      );
    }
  };

  return {
    addressIsLoading,
    addressDetails,
    theme,
    employmentStatusObjects,
    isError,
    labelMapping,
    propertyOrder,
    getFileIcon,
    payeDataDetails,
  };
};
