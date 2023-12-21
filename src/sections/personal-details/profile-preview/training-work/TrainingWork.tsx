import React from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import TrainingWorkTable from "./additional-training/TrainingWorkTable";
import WorkExperienceTable from "./work-experience/WorkExperienceTable";
import { useTrainingWork } from "./useTrainingWork";
import Link from "next/link";
import dayjs from "dayjs";
import Specialities from "./specialities/Specialities";
import Passport from "../passport/Passport";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";
import imageIcon from "@root/assets/svg/image-format.svg";

const TrainingWork = () => {
  const {
    trainings,
    trainingListIsloading,
    traininglistIsfetching,
    trainingListError,
    trainingListIsSuccess,
    theme,
  } = useTrainingWork();

  return (
    <>
      {/* Training Certificates Section Started */}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
        component={"p"}
      >
        Training Certificates
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {trainingListIsloading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Certificate Expiry Date
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={{
                    color: theme.palette.grey[600],
                    fontWeight: 400,
                    textTransform: "unset",
                    mb: 1,
                  }}
                >
                  {dayjs(trainings?.expiryDate ?? "-").format("MM/DD/YYYY")}
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
            {trainingListIsloading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Certificate Issued
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={{
                    color: theme.palette.grey[600],
                    fontWeight: 400,
                    textTransform: "unset",
                    mb: 1,
                  }}
                >
                  {dayjs(trainings?.issuedDate ?? "-").format("MM/DD/YYYY")}
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
            {trainingListIsloading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Physically Audited And No Document Uploaded
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={{
                    color: theme.palette.grey[600],
                    fontWeight: 400,
                    textTransform: "unset",
                    mb: 1,
                  }}
                >
                  {trainings?.physicallyAudited.toString() ?? "-"}
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
            {trainingListIsloading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Document
                </Typography>
                {trainings?.certificate.length === 0 && "-"}
                <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                  {trainings?.certificate.map((item: any) => (
                    <Link
                      style={{
                        display: "flex",
                        gap: 3,
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                      href={`${process.env.NEXT_PUBLIC_IMG_URL}${item?.url}`}
                      key={item.id}
                      target="__blank"
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
                        {item.name ?? "-"}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      {/* Addtional Training Details */}
      <TrainingWorkTable />
      {/* Work Experience */}
      <WorkExperienceTable />
      {/* Specialities Section Started */}
      <Specialities />
      {/* ID Upload Section Started */}
      <Passport />
    </>
  );
};

export default TrainingWork;
