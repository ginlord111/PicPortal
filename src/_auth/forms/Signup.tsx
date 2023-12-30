import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import PulseLoader from "react-spinners/ClipLoader";
import { createUserAccount } from "@/lib/appwrite/api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignUpValidationSchema } from "@/lib/validation";
const Signup = () => {
  const form = useForm<z.infer<typeof SignUpValidationSchema>>({
    resolver: zodResolver(SignUpValidationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
   const isLoading =form.formState.isSubmitting;
    async  function onSubmit(values: z.infer<typeof SignUpValidationSchema>) {
    try {
      const newUser = await createUserAccount(values)
      console.log(newUser)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Form {...form}>
        <div className="sm:w-[420px] flex flex-col items-center">
          <img src="/assets/images/logo.svg" />
          <h2 className="text-white sm:text-xl md:text-sm font-bold py-3">
            Create a new account
          </h2>
          <p className="text-slate-400 text-sm py-2">
            To use Pic Portal enter your account details
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-3 w-full  text-white">
            {/* user name field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input  {...field} className="bg-[#141414] border-none"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#141414] border-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input  {...field} type="password" className="bg-[#141414] border-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-5">
              {isLoading ? (
                 <PulseLoader 
                 color="#ffffff"
                 loading={isLoading}
                 size={30}
                 aria-label="Loading Spinner"
                 data-testid="loader"
               />
              )  : "Submit"}
              </Button>
          </form>
        </div>
      </Form>
    </>
  );
};

export default Signup;
