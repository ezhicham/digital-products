import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PAYEER_MERCHANT_ID = process.env.PAYEER_MERCHANT_ID!;
const PAYEER_SECRET_KEY = process.env.PAYEER_SECRET_KEY!;
const PAYEER_URL = 'https://payeer.com/merchant/';

export async function POST(request: NextRequest) {
  const { amount, currency, description } = await request.json();

  const orderId = crypto.randomBytes(16).toString('hex'); // Generate a unique order ID
  const sign = crypto
    .createHash('sha256')
    .update(`${PAYEER_MERCHANT_ID}:${amount}:${currency}:${PAYEER_SECRET_KEY}:${orderId}`)
    .digest('hex');

  const paymentUrl = `${PAYEER_URL}?m_shop=${PAYEER_MERCHANT_ID}&m_orderid=${orderId}&m_amount=${amount}&m_curr=${currency}&m_desc=${Buffer.from(description).toString('base64')}&m_sign=${sign}`;

  return NextResponse.json({ paymentUrl });
}
