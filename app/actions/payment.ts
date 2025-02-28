"use server"

interface PaymentData {
  amount: number
  description: string
}

interface PaymentResponse {
  url?: string
  error?: string
}

// Helper function to create SHA-256 hash
async function sha256(message: string): Promise<string> {
  // Encode the message as UTF-8
  const msgBuffer = new TextEncoder().encode(message)

  // Hash the message using the Web Crypto API
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)

  // Convert the hash to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

export async function createPayment(data: PaymentData): Promise<PaymentResponse> {
  try {
    const merchantId = process.env.PAYEER_MERCHANT_ID
    const secretKey = process.env.PAYEER_SECRET_KEY
    const appUrl = process.env.NEXT_PUBLIC_APP_URL

    if (!merchantId || !secretKey || !appUrl) {
      throw new Error("Missing environment variables")
    }

    // Generate a unique order ID
    const orderId = `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`

    // Format amount to 2 decimal places
    const amount = data.amount.toFixed(2)

    // Create signature
    const signString = `${merchantId}:${amount}:USD:${secretKey}:${orderId}`
    const sign = await sha256(signString)

    // Construct the payment URL
    const paymentUrl = new URL("https://payeer.com/merchant/")

    const params = {
      m_shop: merchantId,
      m_amount: amount,
      m_curr: "USD",
      m_desc: Buffer.from(data.description).toString("base64"),
      m_orderid: orderId,
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

