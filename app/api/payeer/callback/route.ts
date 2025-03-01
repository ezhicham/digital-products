import { type NextRequest, NextResponse } from "next/server"

// Helper function to create SHA-256 hash
async function sha256(message: string): Promise<string> {
  // Encode the message as UTF-8
  const msgBuffer = new TextEncoder().encode(message)

  // Hash the message using the Web Crypto API
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)

  // Convert the hash to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Extract payment data
    const {
      m_operation_id,
      m_operation_ps,
      m_operation_date,
      m_operation_pay_date,
      m_shop,
      m_orderid,
      m_amount,
      m_curr,
      m_desc,
      m_status,
      m_sign,
    } = data

    // Verify merchant ID
    if (m_shop !== process.env.PAYEER_MERCHANT_ID) {
      return NextResponse.json({ error: "Invalid merchant" }, { status: 400 })
    }

    // Verify signature
    const secretKey = process.env.PAYEER_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({ error: "Configuration error" }, { status: 500 })
    }

    const signString = `${m_operation_id}:${m_operation_ps}:${m_operation_date}:${m_operation_pay_date}:${m_shop}:${m_orderid}:${m_amount}:${m_curr}:${m_desc}:${m_status}:${secretKey}`
    const calculatedSign = await sha256(signString)

    if (calculatedSign !== m_sign.toUpperCase()) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Check payment status
    if (m_status === "success") {
      // Here you would update your database to mark the order as paid
      // For example:
      // await db.orders.update({
      //   where: { id: m_orderid },
      //   data: { status: 'paid', paymentId: m_operation_id }
      // })
      // 

      console.log(`Payment successful for order ${m_orderid}`)
    } else {
      console.log(`Payment failed for order ${m_orderid}`)
      // Handle failed payment
    }

    // Return success to Payeer
    return NextResponse.json({ status: "success" })
  } catch (error) {
    console.error("Error processing Payeer callback:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

