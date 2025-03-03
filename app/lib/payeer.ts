// lib/payeer.ts
export interface PaymentData {
  amount: number
  description: string
}

export interface PaymentResponse {
  url?: string
  error?: string
}

// Helper function to create SHA-256 hash
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase()
}

export async function createPayment(data: PaymentData): Promise<PaymentResponse> {
  try {
    const merchantId = process.env.PAYEER_MERCHANT_ID
    const secretKey = process.env.PAYEER_SECRET_KEY
    const appUrl = process.env.NEXT_PUBLIC_APP_URL

    if (!merchantId || !secretKey || !appUrl) {
      throw new Error("Missing environment variables")
    }

    const orderId = `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    const amount = data.amount.toFixed(2)
    const currency = "USD"
    const descriptionBase64 = Buffer.from(data.description).toString("base64")

    // Correct signature format
    const signString = `${merchantId}:${amount}:${currency}:${descriptionBase64}:${orderId}:${secretKey}`
    const sign = (await sha256(signString)).toUpperCase()

    const paymentUrl = new URL("https://payeer.com/merchant/")

    const params = {
      m_shop: merchantId,
      m_orderid: orderId,
      m_amount: amount,
      m_curr: currency,
      m_desc: descriptionBase64,
      m_sign: sign,
      success_url: `${appUrl}/payment/success`,
      fail_url: `${appUrl}/payment/failed`,
      status_url: `${appUrl}/api/payeer/callback`,
    }

    Object.entries(params).forEach(([key, value]) => {
      paymentUrl.searchParams.append(key, value.toString())
    })

    return { url: paymentUrl.toString() }
  } catch (error) {
    console.error("Error creating payment:", error)
    return { error: "Failed to create payment" }
  }
}
