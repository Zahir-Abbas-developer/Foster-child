import React, { Fragment, useRef, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Typography, useTheme } from "@mui/material";

export default function RHFUploadImage(props: any) {
  const theme = useTheme();
  const { disabled, name, label, height, ...other } = props;
  const [borderColor, setBorderColor] = useState(
    disabled
      ? theme.palette.action.disabledBackground
      : theme.palette.action.focus
  );

  const imageRef = useRef(null);

  function useDisplayImage() {
    const [result, setResult] = useState("");

    function uploader(e: any) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader?.addEventListener("load", (e: any) => {
        setResult(e.target.result);
      });

      reader?.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  return (
    <>
      <label
        htmlFor={`${name}`}
        style={
          {
            height: `${height ?? "40px"}`,
            borderRadius: "4px",
            border: `1px solid ${
              other?.formState?.errors?.[`${name}`] ? "red" : borderColor
            }`,
            width: "100% !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: `${disabled ? "" : "pointer"}`,
          } as React.CSSProperties
        }
        onMouseOver={() =>
          !disabled && setBorderColor(theme.palette.text.primary)
        }
        onMouseLeave={() =>
          !disabled && setBorderColor(theme.palette.action.focus)
        }
      >
        <div
          style={{
            color: theme.palette.action.disabled,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {result ? (
            <img ref={imageRef} src={result} alt="" />
          ) : !result && other?.getValues(`${name}`)?.length > 0 ? (
            <img
              ref={imageRef}
              src={
                process.env.NEXT_PUBLIC_IMG_URL + other?.getValues(`${name}`)
              }
              alt=""
            />
          ) : (
            <Fragment>
              <div style={{ paddingLeft: "10px" }}>Upload Drawing</div>
              <FileUploadIcon
                sx={{
                  color: borderColor,
                  marginRight: "10px",
                }}
              />
            </Fragment>
          )}
        </div>
      </label>
      <input
        {...other?.register(`${name}`)}
        type="file"
        accept="image/*"
        disabled={disabled}
        name={`${name}`}
        id={`${name}`}
        onChange={(event: any) => {
          const file: any = event.target.files?.[0];
          uploader(event);
          other?.setValue(`${name}`, file);
          other?.trigger(`${name}`);
        }}
        style={{ display: "none" }}
      />
      <Typography variant="caption" color="error">
        {other?.formState?.errors?.[`${name}`] &&
          other?.formState?.errors?.[`${name}`]?.message}
      </Typography>
    </>
  );
}
