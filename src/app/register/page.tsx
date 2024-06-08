"use client"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs"

import React,{ useState } from "react";

const SignUpPage =()=>{
  const [email, setEmail] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};
    return(
        <div>
         <section className="w-full py-20 md:py-30 lg:py-44  bg-gradient-to-r from-[#007bff] to-[#00c851] text-white~">
         <div className="container px-4 md:px-6">
           <Card className="mx-auto max-w-md">
             <CardHeader>
               <CardTitle>Sign Up</CardTitle>
               <CardDescription>Enter your credentials to Create an account.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
             <div className="flex items-center w-full gap-x-2">
            <RegisterLink className="w-full"
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
            </RegisterLink>
            <RegisterLink className="w-full"
            authUrlParams={{
              connection_id:process.env.NEXT_PUBLIC_KINDE_FACEBOOK_CONNECTION_ID || "",
              login_hint:email,

            }}>
            <Button
                size ='lg'
                className="w-full"
                variant={"outline"}
            >
                <FaFacebook className="h-5 w-5" />
            </Button>
            </RegisterLink>
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
               {/* <div className="space-y-2">
                 <Label htmlFor="email">Email</Label>
                 <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={handleEmailChange}/>
               </div> */}
               {/* <div className="space-y-2">
                 <Label htmlFor="password">Password</Label>
                 <Input id="password" type="password" />
               </div> */}
             </CardContent>
             <CardFooter>
              <RegisterLink className="w-full"
              >
               <Button className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white">Email Sign Up</Button>
              </RegisterLink>
             </CardFooter>
           </Card>
           <div className="mt-4 text-center text-sm">
             Already have an account?{" "}
             <Link href="login" className="underline text-[#08121b] hover:text-[#f5f6f7]" prefetch={false}>
               Sign In
             </Link>
           </div>
         </div>
       </section>
       </div>
    )
};


export default SignUpPage;