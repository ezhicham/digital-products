import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Your BotFather token
const CHAT_ID = process.env.CHAT_TG_ID; // Your chat ID
const APP_URL = "https://darkark.online/"; // Replace with your actual app URL

export async function POST(req: Request) {
  try {
    const message = "👋 Hello! Click below to open the app:";

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        reply_markup: {
          inline_keyboard: [
            [{ text: "🚀 Open App", url: APP_URL }],
          ],
        },
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
