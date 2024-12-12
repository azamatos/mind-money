import { FC, useMemo } from "react";
import { UseFormWatch } from "react-hook-form";

import {
  isPasswordStrong,
  passwordRules,
  RegisterSchemaType,
} from "@/lib/form-validations";

// material ui
import { List, ListItem, Stack, Typography } from "@mui/material";

// icons
import CancelIcon from "@/icons/CancelIcon";
import CheckIcon from "@/icons/CheckIcon";

interface Props {
  watch: UseFormWatch<RegisterSchemaType>;
}

const PasswordDescription: FC<Props> = ({ watch }) => {
  const email = watch("email");
  const password = watch("password") || "";

  const ruleStates = useMemo(
    () =>
      passwordRules.map((rule) => ({
        ...rule,
        isValid: rule.test(password, email),
      })),
    [email, password]
  );

  const isStrong = isPasswordStrong(password, email);

  const hasPassword = password !== "";

  return (
    <>
      <Stack direction="row" gap={2} py={0.5}>
        <Typography color="secondary">Password strength:</Typography>
        <Typography
          color={hasPassword ? (isStrong ? "success" : "error") : "secondary"}
        >
          {hasPassword
            ? isStrong
              ? "Strong password :)"
              : "Weak password :("
            : "Description"}
        </Typography>
      </Stack>
      <List>
        {ruleStates.map((rule) => (
          <ListItem
            key={rule.id}
            sx={{
              display: "flex",
              gap: 1,
              px: 0,
              py: 0.5,
            }}
          >
            {rule.isValid ? (
              <CheckIcon color={hasPassword ? "success" : "secondary"} />
            ) : (
              <CancelIcon color={hasPassword ? "error" : "secondary"} />
            )}
            <Typography
              color={
                hasPassword ? (rule.isValid ? "green" : "red") : "secondary"
              }
            >
              {rule.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PasswordDescription;
