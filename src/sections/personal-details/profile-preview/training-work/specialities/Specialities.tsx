import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSpecialities } from "./useSpecialities";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import NoContentFound from "@root/components/Table/NoContentFound";

const Specialities = () => {
  const { isLoading, theme, filteredObject, specialLitiesDetails, isError } =
    useSpecialities();

  return (
    <div>
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 3 }}
      >
        Specialities
      </Typography>
      <Grid container>
        {isLoading ? (
          <SkeletonFormdata />
        ) : (
          <>
            {Object?.entries(filteredObject).map(
              ([key, val]: any, index: any) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      p: "10px 0 0 0",
                    }}
                  >
                    <Typography
                      variant="body2"
                      component={"p"}
                      sx={{
                        color: theme.palette.grey[600],
                        fontWeight: 400,
                        mb: 1,
                      }}
                    >
                      {val ?? "-"}
                    </Typography>
                  </Box>
                </Grid>
              )
            )}
          </>
        )}
        {isError === true || specialLitiesDetails?.length === 0 ? (
          <Grid container justifyContent={"center"}>
            <Grid item width={200}>
              <NoContentFound />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default Specialities;
