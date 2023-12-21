import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { usePassport } from "./usePassport";
import pdfIcon from "@root/assets/svg/pdf-icon.svg";
import wordIcon from "@root/assets/svg/word-icon.svg";
import excelIcon from "@root/assets/svg/excel-icon.svg";
import imageIcon from "@root/assets/svg/image-format.svg";
import Image from "next/image";
import Link from "next/link";

const Passport = () => {
  const { passports, passportListIsloading, theme } = usePassport();

  return (
    <>
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5 }}
      >
        ID Upload (Passport/DL)
      </Typography>
      {
        <Box
          sx={{
            p: "10px 0 0 0",
          }}
        >
          <Typography
            component={"p"}
            variant="subtitle2"
            sx={{ color: theme.palette.grey[600], mb: 1 }}
          >
            ID Proof Upload
          </Typography>
          {passportListIsloading ? (
            <Skeleton variant="rectangular" width={"auto"} height={40} />
          ) : (
            <>
              {passports?.name ? (
                <Link
                  style={{
                    display: "flex",
                    gap: 3,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  href={`${process.env.NEXT_PUBLIC_IMG_URL}${passports?.url}`}
                  target="__blank"
                >
                  {passports?.url.includes("pdf") ? (
                    <Image src={pdfIcon} alt="icon" width={24} height={20} />
                  ) : passports?.url.includes("doc" || "docx") ? (
                    <Image src={wordIcon} alt="icon" width={24} height={20} />
                  ) : passports?.url.includes("xls" || "xlsx") ? (
                    <Image src={excelIcon} alt="icon" width={24} height={20} />
                  ) : (
                    <Image src={imageIcon} alt="icon" width={24} height={20} />
                  )}
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
                    {passports?.name ?? "-"}
                  </Typography>
                </Link>
              ) : (
                "-"
              )}
            </>
          )}
        </Box>
      }
    </>
  );
};

export default Passport;
