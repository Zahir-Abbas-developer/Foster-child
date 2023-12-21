import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useEmploymentStatus } from "./useEmploymentStatus";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import NoContentFound from "@root/components/Table/NoContentFound";
import Link from "next/link";

const EmploymentStatus = () => {
  const {
    addressIsLoading,
    employmentStatusObjects,
    addressDetails,
    theme,
    isError,
    labelMapping,
    getFileIcon,
    propertyOrder,
    payeDataDetails,
  } = useEmploymentStatus();

  const renderLabelValuePairs = (data: any) => {
    return (
      <Grid container>
        {propertyOrder?.map((key: any) => (
          <React.Fragment key={key}>
            {data && data[key] !== undefined && data[key] !== null ? (
              <Grid item xs={12} sm={6}>
                {key !== "document" ? (
                  <React.Fragment>
                    <Grid item xs={12}>
                      <Box sx={{ padding: "10px 0 0 0" }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: theme.palette.grey[600], mb: 0.5 }}
                          component={"p"}
                        >
                          {labelMapping[key]}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        component={"p"}
                        variant="body2"
                        sx={styles.typographyStyle}
                      >
                        {data[key] ?? "-"}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                ) : (
                  <Grid container key={key}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: theme.palette.grey[600], mb: 0.5, mt: 1 }}
                      component={"p"}
                    >
                      Document
                    </Typography>
                    <Grid container key={key} gap={2}>
                      {data[key] ? (
                        <Link
                          style={{
                            textDecoration: "none",
                            margin: "5px 0 20px 0",
                          }}
                          href={`${process.env.NEXT_PUBLIC_IMG_URL}${data[key]?.url}`}
                          target="__blank"
                        >
                          <Typography
                            component={"p"}
                            variant="body2"
                            sx={{
                              color: theme.palette.grey[600],
                              fontWeight: 400,
                              textTransform: "unset",
                              display: "flex",
                              gap: 0.5,
                              alignItems: "center",
                            }}
                          >
                            {getFileIcon(data[key].name)} {data[key].name}
                          </Typography>
                        </Link>
                      ) : null}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            ) : null}
          </React.Fragment>
        ))}
      </Grid>
    );
  };

  return (
    <>
      {/* Self Employed && Umberalla Company && Limited Company Objects are handled here */}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
        component={"p"}
      >
        Employment Status
      </Typography>
      <Grid container>
        {addressIsLoading ? (
          <SkeletonFormdata />
        ) : (
          Object.entries(employmentStatusObjects).map(
            ([sectionKey, section]: any) => (
              <Grid container spacing={2} key={sectionKey}>
                <Grid container item xs={12}>
                  {renderLabelValuePairs(section?.data)}
                </Grid>
              </Grid>
            )
          )
        )}
        {isError === true || addressDetails?.length === 0 ? (
          <Grid container justifyContent={"center"}>
            <Grid item width={200}>
              <NoContentFound />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default EmploymentStatus;

// Styling
const styles = {
  typographyStyle: (theme: any) => ({
    color: theme.palette.grey[600],
    fontWeight: 400,
    textTransform: "unset",
    mb: 1,
  }),
  boxStyling: () => ({
    padding: "10px 0 0 0",
  }),
};
