import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-blue-500" />
          </div>
          <CardTitle className="text-2xl">Payment status!</CardTitle>
          <CardDescription>Your payment in processing...</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p>please wait a few moments </p>
          <p className="mt-2 text-sm text-muted-foreground"> you will receive a confimation in your email when the payment success.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Return to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  )
}

