import { z } from "zod";

const phoneRegex = /^\+7\d{3}\d{3}\d{2}\d{2}$/;

const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  referralCode: z
    .string()
    .min(5, "Referral code must be at least 5 characters"),
  phoneNumber: z
    .string()
    .regex(phoneRegex, "Phone number must follow the format: +7 999 999 99 99"),
  password: z
    .string()
    .min(8, "At least 8 characters")
    .refine((password) => /[0-9!@#$%^&*]/.test(password), {
      message: "Contains a number or symbol",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Contains one or more capitalized letters",
    }),
  privacyPolicy: z.boolean({
    required_error: "Privacy must be accepted",
  }),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "At least 8 characters"),
});

const passwordRules = [
  {
    id: "length",
    text: "At least 8 characters",
    test: (pwd: string) => pwd.length >= 8,
  },
  {
    id: "symbol",
    text: "Contains a number or symbol",
    test: (pwd: string) => /[0-9!@#$%^&*]/.test(pwd),
  },
  {
    id: "uppercase",
    text: "One or more capitalized letters",
    test: (pwd: string) => /[A-Z]/.test(pwd),
  },
  {
    id: "noEmail",
    text: "Cannot contain email address",
    test: (pwd: string, email: string) => !pwd.includes(email),
  },
];

const isPasswordStrong = (password: string, email: string): boolean => {
  return passwordRules.every((rule) =>
    rule.id === "noEmail"
      ? rule.test(password, email)
      : rule.test(password, email)
  );
};

type RegisterSchemaType = z.infer<typeof registerSchema>;
type LoginSchemaType = z.infer<typeof loginSchema>;

export {
  registerSchema,
  passwordRules,
  type RegisterSchemaType,
  type LoginSchemaType,
  loginSchema,
  isPasswordStrong,
};
