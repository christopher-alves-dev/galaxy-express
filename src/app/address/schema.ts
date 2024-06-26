import { z } from "zod";

export const formSchema = z.object({
  id: z.number().optional(),
  property: z.string({
    required_error: "Please select an address type.",
  }),
  fullname: z
    .string({
      required_error: "full name is required.",
    })
    .trim()
    .min(3, {
      message: "full name must be at least 3 characters.",
    }),
  email: z
    .string({
      required_error: "email is required.",
    })
    .email({
      message: "email must be a valid email address.",
    }),
  landNumber: z
    .string({
      message: "land number must be a number.",
    })
    .min(1, {
      message: "land number must be at least 4 digits.",
    })
    .max(4, {
      message: "land number must be at most 4 digits.",
    }),
});

export type SchemaFormType = z.infer<typeof formSchema>;
