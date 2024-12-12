// third party
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// material ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

// components
import PasswordInput from "@/templates/PasswordInput";

// validation
import { registerSchema, RegisterSchemaType } from "@/lib/form-validations";
import PasswordDescription from "./PasswordDescription";

const textFieldProps: TextFieldProps = {
  slotProps: {
    inputLabel: {
      style: {
        color: "#A6ABB0",
      },
    },
    input: {
      style: {
        borderRadius: 8,
      },
    },
  },
  fullWidth: true,
  variant: "outlined",
  margin: "dense",
};

const RegisterForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <TextField
          {...textFieldProps}
          label="Email"
          type="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          {...textFieldProps}
          label="Phone"
          type="text"
          {...register("phoneNumber")}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <Stack>
          <PasswordInput register={() => register("password")} />
          <PasswordDescription watch={watch} />
        </Stack>

        <TextField
          {...textFieldProps}
          label="Referral code"
          type="text"
          {...register("referralCode")}
          error={!!errors.referralCode}
          helperText={errors.referralCode?.message}
        />
        <FormControlLabel
          {...register("privacyPolicy")}
          control={<Checkbox />}
          label={
            <Stack direction="row" gap={1}>
              <Typography color="secondary">I accept</Typography>
              <Typography color="primary" sx={{ textDecoration: "underline" }}>
                Terms of Use
              </Typography>
              <Typography color="secondary">and have read</Typography>
              <Typography color="primary" sx={{ textDecoration: "underline" }}>
                Privacy Policy
              </Typography>
            </Stack>
          }
        />

        <Button fullWidth type="submit" sx={{ height: 48 }}>
          <Typography
            color="info"
            sx={{ fontSize: 18, fontWeight: 600, textTransform: "capitalize" }}
          >
            Register
          </Typography>
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterForm;
