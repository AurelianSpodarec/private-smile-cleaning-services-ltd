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
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { setError, formState: { errors } } = useForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "smile.cleaning.101+cust1@gmail.com",
      password: "Digital09%"
    },
  })

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    const result = await actionSignIn(formData)
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-8">Sign in to Smile Cleaning</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">

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
                <div className="flex justify-between">
                  <FormLabel>Password</FormLabel>
                  <span>Forgott Password?</span>
                </div>
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
          <button type="submit" className="py-3 px-5 bg-[#eca869] rounded-2xl">Submit</button>
        </form>
      </Form>
{/* 
      <div className="mt-16">
        <span className="text-lg font-bold block mb-4">New Customer?</span>
        <button className="py-3 px-10 border border-[#eca869] rounded-2xl">Get Started</button>
      </div> */}

    </div>
  )
}

export default Login;
