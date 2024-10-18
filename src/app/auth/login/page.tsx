'use client'

import React, { useEffect } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/atoms/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { signIn } from "@/auth";
import { actionSignIn } from "./sign-in";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required",
  }),
  password: z.string().min(2, {
    message: "Password is required"
  })
})

function Login() {
  const router = useRouter()
  // const { login, auth } = useAuth()

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { setError, formState: { errors } } = useForm();

  // useEffect(() => {
  //   if(auth.isAuthenticated) {
  //     router.replace("/dashboard")
  //   }
  // }, [auth])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "smile.cleaning.101+cust1@gmail.com",
      password: "Digital09%"
    },
  })

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    // 'use server'; // Mark this function as a server action
    // // console.log(formData)
    // const result = await signIn('credentials', {
    //   redirect: false,
    //   ...formData,
    // });
  const result = await actionSignIn(formData)
    // try {
      // const result = await onSubmit(formData);
      // Handle successful login (e.g., redirect, display message, etc.)
    // } catch (error) {
    //   // Handle error (e.g., display error message)
    //   setError("server", { message: error.message });
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <>
      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="••••••••"
                    type="password"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {errors.server &&
            <FormMessage>
              {/* @ts-ignore */}
              {errors?.server?.message}
            </FormMessage>
          }

          {/* <Button
                  label="Submit"
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                /> */}
          <button type="submit">Submit</button>
        </form>
      </Form>

      {/* <div className="sm:text-center mt-8">
              <p className="px-8 text-center text-xs text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div> */}
      {/* </div> */}
      {/* </section> */}


      {/* <aside className="relative overflow-hidden flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
          <div className="absolute inset-0 bg-zinc-900" />

          <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0">
            <ImageAutositeBanner />
          </div>

        </aside> */}

    </>
  )
}

export default Login;
