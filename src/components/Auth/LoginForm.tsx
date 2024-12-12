// third party
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// material ui
import { Button, Stack, TextField, Typography } from "@mui/material";

// components
import PasswordInput from "@/templates/PasswordInput";

// validation
import { LoginSchemaType, loginSchema } from "@/lib/form-validations";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <TextField
          slotProps={{
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
          }}
          fullWidth
          variant="outlined"
          margin="dense"
          label="Email"
          type="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <PasswordInput register={() => register("password")} />

        <Button fullWidth type="submit" sx={{ height: 48 }}>
          <Typography
            color="info"
            sx={{ fontSize: 18, fontWeight: 600, textTransform: "capitalize" }}
          >
            Login
          </Typography>
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
