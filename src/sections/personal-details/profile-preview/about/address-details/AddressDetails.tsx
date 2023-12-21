import React from "react";
import { useAddressDetails } from "./useAddressDetails";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";
import imageIcon from "@root/assets/svg/image-format.svg";
import dayjs from "dayjs";

const AddressDetails = () => {
  const { addressIsLoading, formattedDataAddress, theme, yearDiff, monthDiff } =
    useAddressDetails();

  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 3 }}
      >
        Address Detail
      </Typography>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Address First Line
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {formattedDataAddress?.adressFirstLine ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Address Second Line
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {formattedDataAddress?.adressSecondLine ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Country
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {formattedDataAddress?.country ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  County
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {formattedDataAddress?.county ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Town/City
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {formattedDataAddress?.town ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Post Code
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {formattedDataAddress?.postCode ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  How Long the Candidate lived in this address
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {`${yearDiff} Year ${monthDiff} Month` ?? "-"}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Date
                </Typography>
                <Typography
                  component={"p"}
                  variant="body2"
                  sx={styles.typographyStyle}
                >
                  {dayjs(formattedDataAddress?.to ?? "-").format("DD/MM/YYYY")}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.boxStyling}>
            {addressIsLoading ? (
              <Skeleton variant="rectangular" width={"auto"} height={40} />
            ) : (
              <>
                <Typography
                  variant="subtitle2"
                  sx={{ color: theme.palette.grey[600] }}
                  component={"p"}
                >
                  Document
                </Typography>
                {formattedDataAddress?.documents?.map((item: any) => (
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
                        padding: "10px 0 0 0 ",
                        cursor: "pointer",
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
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddressDetails;
//Styling
const styles: any = {
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
