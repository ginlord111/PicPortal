import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignInValidationSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import PulseLoader from "react-spinners/ClipLoader";

const SignIn = () => {
    const form = useForm<z.infer<typeof SignInValidationSchema>>({
      resolver: zodResolver(SignInValidationSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
     const isLoading =form.formState.isSubmitting;
    function onSubmit(values: z.infer<typeof SignInValidationSchema>) {
      console.log(values);
    }
    return (
      <>
        <Form {...form}>
          <div className="sm:w-[420px] flex flex-col items-center">
            <img src="/assets/images/logo.svg" />
            <h2 className="text-white sm:text-xl md:text-sm font-bold py-3">
            Login your account
            </h2>
            <p className="text-slate-400 text-sm py-2">
              To use Pic Portal enter your account details
            </p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-3 w-full  text-white">
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
  )
}

export default SignIn