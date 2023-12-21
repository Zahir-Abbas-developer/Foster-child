import { Box, Grid, Skeleton, Typography, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
import Passport from "../passport/Passport";
import RightWork from "./right-to-work/RightWork";
import { useBackgroundChecks } from "./useBackgroundChecks";
import Link from "next/link";
import dayjs from "dayjs";

const BackgroundChecks = () => {
  const { workIsLoading, workDetailsData, theme } = useBackgroundChecks();
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
        component={"p"}
      >
        DBS
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
                  Does the candidate have a valid Enhanced DBS?
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.validDBS ?? "-"}
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
                  DBS (PVG) Certificate
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.certificateName ?? "-"}
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
                  DBS (PVG) Issue Date
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {dayjs(workDetailsData?.issueDate ?? "-").format(
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
                  Is DBS (PVG) online?
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.online ?? "-"}
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
                  DBS (PVG) UPdate Service No
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {workDetailsData?.updateService ?? "-"}
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
                    style={{ textDecoration: "none" }}
                    href={`${process.env.NEXT_PUBLIC_IMG_URL}${item?.url}`}
                    key={item.id}
                    target="__blank"
                  >
                    <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={24}
                        height={20}
                      />
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
      {/* Right To Work Section */}
      <RightWork />
      {/* ID Upload */}
      <Passport />
    </>
  );
};

export default BackgroundChecks;

//Styling
const styles: any = {
  typographyStyle: (theme: any) => ({
    color: theme.palette.grey[600],
    fontWeight: 400,
    textTransform: "unset",
    mb: 1,
  }),
};
