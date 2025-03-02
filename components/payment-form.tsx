"use client"

import { useState } from "react"

import { createPayment } from "@/app/actions/payment"




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

