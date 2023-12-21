import { Card } from "@mui/material";
import { useSupervisoryUploadDocuments } from "./useSupervisoryUploadDocuments";
import UploadDocuments from "@root/sections/documents/UploadDocuments";

export const SupervisoryUploadDocuments = () => {
  const { data, isError, isLoading, isSuccess, isFetching, setDocParams } =
    useSupervisoryUploadDocuments();

  return (
    <>
      <Card>
        <UploadDocuments
          readOnly
          searchParam={(searchedText: string) =>
            setDocParams((prev: any) => {
              return { ...prev, search: searchedText.search };
            })
          }
          tableData={data?.data?.supervisory_home_visit_doc}
          column={["docFile", "docType", "date", "uploadedBy", "password"]}
          isSuccess={isSuccess}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          onPageChange={(page: any) =>
            setDocParams((prev: any) => {
              return { ...prev, offset: (page - 1) * 10 };
            })
          }
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
        />
      </Card>
    </>
  );
};
