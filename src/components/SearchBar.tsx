import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/action";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch: Dispatch<any> = useDispatch();
  useDebounce(() => dispatch(getMovies(value)), 500, [value]);

  return (
    <TextField
      label="Search"
      InputProps={{
        style: {
          color: "#FFF",
        },
        endAdornment: (
          <IconButton onClick={() => setValue("")}>
            <CloseIcon color={value !== "" ? "primary" : "inherit"} />
          </IconButton>
        ),
      }}
      size="medium"
      fullWidth
      placeholder="Search users"
      color="primary"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
