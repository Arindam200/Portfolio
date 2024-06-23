import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { v4 as uuid } from "uuid";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "arindammajumder2020@gmail.com",
      subject: body.subject || "New Contact Form Submission",
      reply_to: body.email || "",
      headers: {
        "X-Entity-Ref-ID": uuid(),
      },
      react: EmailTemplate({
        firstName: "Arindam",
        message: body.message,
      }) as React.ReactElement,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    // return new Response(JSON.stringify({ data }));

    return new Response(
      JSON.stringify({
        data,
        message: "success",
      }),
    );
  } catch (error) {
    console.error("Error reading request body:", error);
    return new Response(
      JSON.stringify({ error: "Failed to read request body" }),
      { status: 500 },
    );
  }
}
