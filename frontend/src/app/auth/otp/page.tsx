'use client'

import {CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
    pin: z.string().length(6, {
        message: "OTP Code must be 6 characters long"
    }),
})

export default function Otp(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pin: "",
        }
    });

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        console.log(value)
    }

    return (
        <>
            <CardHeader>
                <CardTitle>Verification</CardTitle>
                <CardDescription>
                    Enter your OTP Code below that we sent into your email
                </CardDescription>
                <CardAction>OTP</CardAction>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} id="otp-form">
                        <div className="flex justify-center items-center ">
                            <FormField
                                name="pin"
                                control={form.control}
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={0}/>
                                                        <InputOTPSlot index={1}/>
                                                        <InputOTPSlot index={2}/>
                                                    </InputOTPGroup>
                                                    <InputOTPSeparator/>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={3}/>
                                                        <InputOTPSlot index={4}/>
                                                        <InputOTPSlot index={5}/>
                                                    </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormMessage className="text-center"/>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="grid gap-6">
                <Button variant="default" type="submit" className="w-full" form="otp-form">Submit</Button>
                <div className="flex items-center justify-center gap-2">
                    <CardDescription>OTP not received?</CardDescription>
                    <Link href="#" className="text-sm text-blue-500 underline underline-offset-4">Resend</Link>
                </div>
            </CardFooter>
        </>
    )
}