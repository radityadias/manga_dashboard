import React from "react";
import {fredoka} from "@/app/ui/fonts";

export default function AuthLayout({children} : {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={`${fredoka.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}