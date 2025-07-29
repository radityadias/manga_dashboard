'use client'

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import '../../globals.css';

const formSchema = z.object({
    email: z.email(),
    password: z.string(),
})

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        console.log(value)
    }

    return (
        <>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Enter your email and password below to login to your account
                </CardDescription>
                <CardAction>Sign In</CardAction>
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
                                                <Link href="#" className="text-sm">Forgot Password?</Link>
                                            </div>
                                            <FormControl>
                                                <Input placeholder="Enter your password..." {...field}/>
                                            </FormControl>
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