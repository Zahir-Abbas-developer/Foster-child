import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { useAbout } from "./useAbout";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import AddressDetails from "./address-details/AddressDetails";
import Passport from "../passport/Passport";
import NoContentFound from "@root/components/Table/NoContentFound";
import dayjs from "dayjs";

const About = () => {
  const { formattedDataAbout, isLoading, theme, personalData, isError } =
    useAbout();

  const formatDate = (value: any) => {
    return dayjs(value).isValid() ? dayjs(value).format("DD/MM/YYYY") : value;
  };

  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
      >
        About
      </Typography>
      <Grid container>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <>
            {Object?.entries(formattedDataAbout).map(
              ([key, val]: any, index: any) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      p: "10px 0 0 0",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      sx={{
                        color: theme.palette.grey[600],
                        textTransform: "capitalize",
                      }}
                    >
                      {key}
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"p"}
                      sx={{
                        color: theme.palette.grey[600],
                        fontWeight: 400,
                        textTransform: "unset",
                        mb: 1,
                      }}
                    >
                      {formatDate(val)}
                    </Typography>
                  </Box>
                </Grid>
              )
            )}
          </>
        )}
        {isError === true || personalData?.length === 0 ? (
          <Grid container justifyContent={"center"}>
            <Grid item width={200}>
              <NoContentFound />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      {/* Address Details */}
      <AddressDetails />
      {/* ID Upload */}
      <Passport />
    </>
  );
};

export default About;
