import React from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import BankDetailsTable from "./BankDetailsTable";
import Passport from "../passport/Passport";
import { useOtherInformation } from "./useOtherInformation";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";
import imageIcon from "@root/assets/svg/image-format.svg";
import Link from "next/link";
import EmploymentStatus from "./employment-status/EmploymentStatus";
import NoContentFound from "@root/components/Table/NoContentFound";

const OtherInformation = () => {
  const {
    documentsIsLoading,
    documentsData,
    documentsDetails,
    theme,
    isError,
  } = useOtherInformation();

  return (
    <>
      <EmploymentStatus />
      {/* Additional Docs Section Started */}
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 3 }}
      >
        Additional Docs
      </Typography>

      <Grid container>
        {documentsData?.map((item: any) => (
          <Grid item xs={12} key={item.id}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: "10px 0 0 0",
                  }}
                >
                  {documentsIsLoading ? (
                    <Skeleton variant="rectangular" width={300} height={40} />
                  ) : (
                    <>
                      <Typography
                        component={"p"}
                        variant="subtitle2"
                        sx={{ color: theme.palette.grey[600] }}
                      >
                        DOCUMENT NAME
                      </Typography>
                      <Typography
                        component={"p"}
                        variant="body2"
                        sx={{
                          color: theme.palette.grey[600],
                          fontWeight: 400,
                          textTransform: "unset",
                          mb: 1,
                          p: "10px 0 0 0",
                        }}
                      >
                        {item?.documentName ?? "-"}
                      </Typography>
                    </>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: "10px 0 0 0",
                  }}
                >
                  {documentsIsLoading ? (
                    <Skeleton variant="rectangular" width={300} height={40} />
                  ) : (
                    <>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: theme.palette.grey[600] }}
                        component={"p"}
                      >
                        Documents
                      </Typography>
                      {item?.certificate.length === 0 && "-"}
                      <Box sx={{ display: "flex", gap: 1 }}>
                        {item?.certificate?.map((item: any) => (
                          <Link
                            style={{ textDecoration: "none" }}
                            href={`${process.env.NEXT_PUBLIC_IMG_URL}${item?.url}`}
                            key={item.id}
                            target="__blank"
                          >
                            <Box
                              sx={{
                                display: "flex",
                                gap: 0.5,
                                cursor: "pointer",
                                p: "10px 0 0 0",
                              }}
                            >
                              {item.name.includes("pdf") ? (
                                <Image
                                  src={pdfIcon}
                                  alt="icon"
                                  width={24}
                                  height={20}
                                />
                              ) : item.name.includes("doc" || "docx") ? (
                                <Image
                                  src={wordIcon}
                                  alt="icon"
                                  width={24}
                                  height={20}
                                />
                              ) : item.name.includes("xls" || "xlsx") ? (
                                <Image
                                  src={excelIcon}
                                  alt="icon"
                                  width={24}
                                  height={20}
                                />
                              ) : (
                                <Image
                                  src={imageIcon}
                                  alt="icon"
                                  width={24}
                                  height={20}
                                />
                              )}

                              <Typography
                                component={"p"}
                                variant="body2"
                                sx={{
                                  color: theme.palette.grey[600],
                                  fontWeight: 400,
                                  textTransform: "unset",
                                }}
                              >
                                {item.name}
                              </Typography>
                            </Box>
                          </Link>
                        ))}
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
        {isError === true || documentsData?.length === 0 ? (
          <Grid container justifyContent={"center"}>
            <Grid item width={200}>
              <NoContentFound />
            </Grid>
          </Grid>
        ) : null}
      </Grid>

      {/* Bank Details Table */}
      <BankDetailsTable />
      {/* ID Upload */}
      <Passport />
    </>
  );
};

export default OtherInformation;
