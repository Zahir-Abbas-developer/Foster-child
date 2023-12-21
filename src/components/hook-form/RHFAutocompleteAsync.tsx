// react
import { Fragment, useState } from "react";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { debounce } from "lodash";

// ----------------------------------------------------------------------

export default function RHFAutocompleteAsync({
  name,
  apiQuery,
  queryKey = "search",
  debounceTime = 500,
  optionsToShow,
  apiTrigger,
  apiStatus,
  noOptionsText = "No locations",
  triggerQueryParams,
  otherApiData,
  getOptionLabel = (option: any) => option.name,
  ...other
}: any) {
  // states
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  // api
  // constants
  const label = other.label;

  // debounce
  const triggerDebounce = debounce((newInputValue) => {
    apiTrigger({
      queryParams: { ...triggerQueryParams, [queryKey]: newInputValue },
      otherApiData,
    });
  }, 500);
  // on changes
  const onChanged = (e: any, newValue: any, onChange: any) => {
    onChange(newValue);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Autocomplete
            id={name}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option: any, value) => {
              return option?.id === value?.id;
            }}
            getOptionLabel={getOptionLabel}
            options={optionsToShow ?? []}
            loading={apiStatus?.isLoading}
            onChange={(e: any, newValue: any) => {
              onChanged(e, newValue, onChange);
            }}
            onInputChange={(event, newInputValue) => {
              triggerDebounce.cancel();
              if (newInputValue.trim()) triggerDebounce(newInputValue);
            }}
            filterOptions={(x) => x}
            autoComplete
            includeInputInList
            filterSelectedOptions
            noOptionsText={noOptionsText}
            value={value}
            {...other}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={label}
                error={!!error}
                helperText={error?.message}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <Fragment>
                      {apiStatus.isLoading || apiStatus.isFetching ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </Fragment>
                  ),
                }}
              />
            )}
          />
        );
      }}
    />
  );
}
