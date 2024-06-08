import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const DataForm = ()=>{
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>Create Your Digital Business Card</CardTitle>
              <CardDescription>Fill out the form to get started.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Contact Number</Label>
                <Input id="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea id="bio" placeholder="Enter a short bio (120 characters)" maxLength={120} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-picture">Profile Picture</Label>
                <Input id="profile-picture" type="file" accept="image/jpeg, image/png" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto bg-[#007bff] hover:bg-[#0056b3] text-white">Create Card</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    )

}




export default DataForm;