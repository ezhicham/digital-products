"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createPayment } from "@/app/actions/payment"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  description: z.string().min(1, "Description is required"),
})

interface PaymentFormProps {
  totalpriceCheckout: string;
}

export default function PaymentForm({ totalpriceCheckout }: PaymentFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  
   const handlepayeerPayement= async  ()=> {
    setIsLoading(true)
    try {
      const response = await createPayment({
        amount: Number.parseFloat(totalpriceCheckout),
        description: "Payment for products",
      })

      if (response.url) {
        window.location.href = response.url
      }
    } catch (error) {
      console.error("Payment error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button className=" w-full bg-blue-400 text-white p-2 rounded-sm mx-5" onClick={handlepayeerPayement}>{!isLoading?"pay with payeer":"loading..."}</button>
    </div>
  )
}

