import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PAYEER_SECRET_KEY = process.env.PAYEER_SECRET_KEY!;

export async function POST(request: NextRequest) {
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
    m_params,
  } = await request.json();

  const signString = `${m_operation_id}:${m_operation_ps}:${m_operation_date}:${m_operation_pay_date}:${m_shop}:${m_orderid}:${m_amount}:${m_curr}:${m_desc}:${m_status}:${PAYEER_SECRET_KEY}`;
  const signHash = crypto.createHash('sha256').update(signString).digest('hex');

  if (m_sign === signHash && m_status === 'success') {
    // Payment is verified and successful
    // Update your order status in the database
    return new NextResponse('OK', { status: 200 });
  } else {
    // Invalid signature or payment failed
    return new NextResponse('Invalid signature or payment failed', { status: 400 });
  }
}
