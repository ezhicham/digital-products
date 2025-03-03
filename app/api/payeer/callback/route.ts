import { NextResponse } from "next/server"

// Helper function to create SHA-256 hash
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase()
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Extract payment data from the callback request
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
    const merchantId = process.env.PAYEER_MERCHANT_ID
    if (m_shop !== merchantId) {
      return NextResponse.json({ error: "Invalid merchant" }, { status: 400 })
    }

    // Verify secret key from environment
    const secretKey = process.env.PAYEER_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({ error: "Configuration error" }, { status: 500 })
    }

    // Create the signature string for comparison
    const signString = `92E6CF96381FF2340A835C1A762292C43A086E3DE6103DC6ADCABEB8EB164679`
    const calculatedSign = await sha256(signString)

    // Compare the calculated signature with the provided signature
    if (calculatedSign !== m_sign.toUpperCase()) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Handle payment status
    if (m_status === "success") {
      // Payment was successful
      console.log(`Payment successful for order ${m_orderid}`)
      // Update your database accordingly, e.g., marking the order as paid
      // Example:
      // await db.orders.update({ where: { id: m_orderid }, data: { status: 'paid' } })
    } else {
      // Payment failed
      console.log(`Payment failed for order ${m_orderid}`)
    }

    // Return success response to Payeer
    return NextResponse.json({ status: "success" })
  } catch (error) {
    console.error("Error processing Payeer callback:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
