'use server'

import { signIn } from "@/auth";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required",
  }),
  password: z.string().min(2, {
    message: "Password is required"
  })
})


export const actionSignIn = async (formData: z.infer<typeof formSchema>) => {
  const result = await signIn('credentials', {
    ...formData,
  });
  return result;
};
