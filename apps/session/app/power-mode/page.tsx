"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, OctagonAlert, Sparkles } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function GoingPro() {
  const formSchema = z.object({
    email: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container max-w-xl space-y-6 mt-6">
      <header>
        <h1 className="font-bold mt-6 text-2xl flex gap-2 items-center">
          <Image src={Logo} alt="" className="h-6 w-6" />
          BoardGameSesh
        </h1>
      </header>
      <Card className="w-full">
        <CardHeader>
          <span>
            <Link href="/" className="underline inline-flex gap-1 items-center">
              <ChevronLeft className="h-4 w-4" /> Back
            </Link>
          </span>
          <CardTitle className="flex gap-1 items-center">
            <Sparkles className="h-5 w-5" /> Power Mode
          </CardTitle>
          <CardDescription>
            When simple just isn't going to cut it.
          </CardDescription>
        </CardHeader>
        <CardContent className="border-t border-b pt-6 space-y-4">
          <p>
            Our goal with "Power Mode" is to provide a paid tier with features
            which make life for power users easier and actually <em>need</em>{" "}
            upkeep and maintenance.
          </p>
          <p>Some planned features include:</p>
          <ul className="space-y-3">
            <li>
              <Card className="p-4 space-y-2">
                <h2 className="font-medium">Multiple groups & sessions</h2>
                <p className="text-sm">
                  User accounts to help you keep you manage multiple groups,
                  sessions and view history.
                </p>
              </Card>
            </li>
            <li>
              <Card className="p-4 space-y-2">
                <h2 className="font-medium">Cross-device sync</h2>
                <p className="text-sm">
                  Making sure you can access and manage your sessions across
                  multiple devices.
                </p>
              </Card>
            </li>
            <li>
              <Card className="p-4 space-y-2">
                <h2 className="font-medium">Automations</h2>
                <p className="text-sm">
                  Scheduling regular sessions with the same groups, handling
                  RSVP's and handling assigning who is picking the next game.
                </p>
              </Card>
            </li>
            <li>And much more...</li>
          </ul>
          <Separator />
          <div className="flex gap-1 items-center font-semibold">
            <OctagonAlert className="h-5 w-5 text-orange-500" /> "Power Mode" is
            currently under development
          </div>
          <p>
            If you'd like to get notified when it becomes available feel free to
            sign up below.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
