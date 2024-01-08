"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const LogInBtn = () => {
  const router = useRouter();

  const FormSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),

    // checkbox: z.boolean().default(false).optional(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const jsonString = JSON.stringify(data);
      const accessToken = btoa(jsonString);

      const response = await fetch(
        `http://localhost/cloudlms/sso.php?access_code=${accessToken}`,
        { cache: "no-cache" }
      );

      if (response.ok) {
        // Assuming the API returns JSON data, use response.json()
        const responseData = await response.json();
        router.push(responseData.redirection_url);
      } else {
        // Handle error response
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="rounded-full px-8 py-0 font-bold">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[925px] p-0  transition-all border-none">
        <div className="flex  w-full min-h-[550px]">
          <div className="w-2/5 relative">
            <Image
              src="/assets/signin.webp"
              alt="logo"
              fill
              objectFit="cover "
              className="rounded-l-lg"
            />
          </div>
          <div className="w-3/5 px-6 py-10">
            <div className="flex">
              <div className="flex gap-1 items-center">
                <div className="w-7 h-7 sm:w-12 sm:h-12 relative">
                  <Image
                    src="/assets/logo.jpg"
                    fill
                    alt="logo"
                    objectFit="contain"
                  />
                </div>
                <div className="text-base sm:text-xl font-semibold">
                  lmsvarsity
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-bold text-xl mt-7 mb-5">
                Enter your username and Password to Start Learning
              </h2>
              <div className="">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" space-y-6  flex flex-col"
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Your username "
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
                          <FormLabel>Password *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Your Password"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* <FormField
                      control={form.control}
                      name="checkbox"
                      render={({ field }) => (
                        <FormItem className="space-x-1 flex items-center ">
                          <FormControl>
                            <Checkbox
                              id="terms"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept to receive promotional messages and
                            newsletter from lmsvarsity
                          </label>

                          <FormMessage />
                        </FormItem>
                      )}
                    /> */}
                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-500/80 rounded-full self-center  w-full "
                    >
                      Submit
                    </Button>
                    <p className="text-sm ">
                      By clicking on Submit, I Agree to the{" "}
                      <span className="text-blue-600 hover:cursor-pointer">
                        Terms and Conditions
                      </span>{" "}
                      from lmsvarsity
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LogInBtn;
