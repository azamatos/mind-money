import { FC, useState } from "react";

// material ui
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// icons
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register: () => UseFormRegisterReturn<"password">;
}

const PasswordInput: FC<Props> = ({ register }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl fullWidth>
      <InputLabel
        color="secondary"
        htmlFor="outlined-adornment-password"
        sx={{
          "&.MuiInputLabel-root": {
            color: "#A6ABB0",
          },
        }}
      >
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        slotProps={{
          input: {
            style: {
              borderRadius: 8,
            },
          },
        }}
        fullWidth
        label="Password"
        type={showPassword ? "text" : "password"}
        {...register()}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
