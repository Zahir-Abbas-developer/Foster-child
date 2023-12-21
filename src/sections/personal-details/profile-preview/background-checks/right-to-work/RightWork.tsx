import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useRightWork } from "./useRightWork";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";
import imageIcon from "@root/assets/svg/image-format.svg";

const RightWork = () => {
  const { workIsLoading, workDetailsData, workDetails, theme } = useRightWork();

  return (
    <>
      {/* Right to work section started*/}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5.5 }}
      >
        Right To Work
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "10px 0 0 0",
            }}
          >
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Does the candidate have the right to work in UK
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.rightToWork ?? "-"}
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
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Visa Type
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.visaType ?? "-"}
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
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Visa / BRP Number
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.BRP ?? "-"}
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
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Visa / BRP Expiry Date
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {dayjs(workDetailsData?.expiryDate ?? "-").format(
                    "MM/DD/YYYY"
                  )}
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
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Share Code
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.code ?? "-"}
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
            {workIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  component={"p"}
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                >
                  Documents
                </Typography>
                {workDetailsData?.certificate.length === 0 && "-"}
                {workDetailsData?.certificate?.map((item: any) => (
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
                    <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
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
                    </Box>
                  </Link>
                ))}
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RightWork;

//Styling
const styles: any = {
  typographyStyle: (theme: any) => ({
    color: theme.palette.grey[600],
    fontWeight: 400,
    textTransform: "unset",
    mb: 1,
  }),
};
