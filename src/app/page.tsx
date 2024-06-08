/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UDCCrWQE7IU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="h-full">
      <section className="w-full h-full py-12 md:py-24 lg:py-32 xl:py-60 bg-gradient-to-r from-[#007bff] to-[#00c851] text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Elevate Your Connections with Effortless Digital Business Cards
            </h1>
            <p className="mx-auto max-w-[700px] text-lg">
              Make a lasting impression and share your contact details seamlessly.
            </p>
            <Link
              href="/register"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#007bff] shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#007bff] disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Start for Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
