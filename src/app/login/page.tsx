"use client"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs"

import {LoginSchema} from "@/schemas/index"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { FormError } from "@/components/ui/form-error"
import { FormSuccess } from "@/components/ui/form-success"
import React, {useState} from "react";


const LoginPage =()=>{
  const [email, setEmail] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    return(
        <div>
         <section className="w-full py-12 md:py-24 lg:py-36 bg-gradient-to-r from-[#007bff] to-[#00c851]">
         <div className="container px-4 md:px-6">
           <Card className="mx-auto max-w-md">
             <CardHeader>
               <CardTitle>Sign In</CardTitle>
               <CardDescription>Enter your credentials to access your account.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
             <div className="flex items-center w-full gap-x-2">
            <LoginLink className="w-full"
             authUrlParams={{
              connection_id:process.env.NEXT_PUBLIC_KINDE_GOOGLE_CONNECTION_ID || ""
            }}>
            <Button
                size ='lg'
                className="w-full"
                variant={"outline"}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            </LoginLink>
            <LoginLink className="w-full"
            authUrlParams={{
              connection_id:process.env.NEXT_PUBLIC_KINDE_FACEBOOK_CONNECTION_ID || ""
            }}>
            <Button
                size ='lg'
                className="w-full"
                variant={"outline"}
            >
                <FaFacebook className="h-5 w-5" />
            </Button><audio src=""></audio>
            </LoginLink>
        </div>
               <div className="relative">
                 <div className="absolute inset-0 flex items-center">
                   <span className="w-full border-t border-gray-300 dark:border-gray-700" />
                 </div>
                 <div className="relative flex justify-center text-xs uppercase">
                   <span className="bg-gray-100 px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                     Or continue with
                   </span>
                 </div>
               </div>
               <div className="space-y-2">
                 <Label htmlFor="email">Email</Label>
                 <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={handleEmailChange} required />
               </div>
               {/* <div className="space-y-2">
                 <Label htmlFor="password">Password</Label>
                 <Input id="password" type="password" />
               </div> */}
             </CardContent>
             <CardFooter>
              {/* <FormError message={error}/>
                <FormSuccess message={success}/> */}
                <LoginLink className="w-full"
                authUrlParams={{
                  connection_id:
                      process.env.NEXT_PUBLIC_KINDE_EMAIL_CONNECTION_ID || "",
                  login_hint:email
              }}
                >

               <Button className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white">Sign In</Button>
                </LoginLink>
             </CardFooter>
           </Card>
           <div className="mt-4 text-center text-sm">
             Don't have an account?{" "}
             <Link href="register" className="underline text-[#edeff2] hover:text-[#070c11]" prefetch={false}>
               Sign up
             </Link>
           </div>
         </div>
       </section>
       </div>
    )
};

export default LoginPage;