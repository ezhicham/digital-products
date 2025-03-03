import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PAYEER_MERCHANT_ID = process.env.PAYEER_MERCHANT_ID!;
const PAYEER_SECRET_KEY = process.env.PAYEER_SECRET_KEY!;
const PAYEER_URL = 'https://payeer.com/merchant/';

export async function POST(request: NextRequest) {
  const { amount, currency, description } = await request.json();

  // Ensure amount has two decimal places
  const formattedAmount = Number(amount).toFixed(2);
  const orderId = crypto.randomBytes(16).toString('hex'); // Generate a unique order ID
  const encodedDescription = Buffer.from(description).toString('base64');

  // Concatenate parameters with colon separator
  const signString = [
    PAYEER_MERCHANT_ID,
    orderId,
    formattedAmount,
    currency,
    encodedDescription,
    PAYEER_SECRET_KEY
  ].join(':');

  // Generate SHA-256 hash and convert to uppercase
  const sign = crypto.createHash('sha256').update(signString).digest('hex').toUpperCase();

  const paymentUrl = `${PAYEER_URL}?m_shop=${PAYEER_MERCHANT_ID}&m_orderid=${orderId}&m_amount=${formattedAmount}&m_curr=${currency}&m_desc=${encodedDescription}&m_sign=${sign}`;

  return NextResponse.json({ paymentUrl });
}
