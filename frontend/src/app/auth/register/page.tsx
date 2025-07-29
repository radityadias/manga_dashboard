'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const formSchema = z.object({
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string(),
}).refine((val) => val.confirmPassword === val.password, {
    message: "Password doesn't match"
});

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        console.log(value)
    }

    return (
        <>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Enter your email and password below to create your account
                </CardDescription>
                <CardAction>Sign Up</CardAction>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <div className="grid gap-5">
                                <FormField
                                    name="email"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your email..." {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    name="password"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center justify-between">
                                                <FormLabel>Password</FormLabel>
                                            </div>
                                            <FormControl>
                                                <Input placeholder="Enter your password..." {...field} type="password"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    name="confirmPassword"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center justify-between">
                                                <FormLabel>Confirm Password</FormLabel>
                                            </div>
                                            <FormControl>
                                                <Input placeholder="Enter your password..." {...field} type="password"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="grid gap-3">
                <Button type="submit" variant="default" form="login-form">Login</Button>
                <Button variant="outline">Register</Button>
            </CardFooter>
        </>
    )
}