import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      is_company,
      shipping_zip,
      shipping_city,
      shipping_address,
      billing_zip,
      billing_city,
      billing_address,
      tax_number,
      harness,
    } = await req.json();

    if (
      !name ||
      !email ||
      !phone ||
      !shipping_zip ||
      !shipping_city ||
      !shipping_address ||
      !billing_zip ||
      !billing_city ||
      !billing_address ||
      !harness
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!["tesla_hw3", "tesla_hw4"].includes(harness)) {
      return NextResponse.json(
        {
          error:
            "Only Tesla HW3 and HW4 harnesses are currently available. For anything else, please get in touch.",
        },
        { status: 400 }
      );
    }

    const priceEur = Number(process.env.NEXT_PUBLIC_PRICE_EUR) || 149;
    const origin = req.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "DashKit",
              description: `DashKit — Bluetooth device + DashPilot app (${
                harness === "tesla_hw3" ? "Tesla HW3" : "Tesla HW4"
              } harness)`,
            },
            unit_amount: priceEur * 100, // Stripe expects the amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/order/cancelled`,
      metadata: {
        customer_name: name,
        is_company: is_company ? "true" : "false",
        phone,
        shipping_zip,
        shipping_city,
        shipping_address,
        billing_zip,
        billing_city,
        billing_address,
        ...(tax_number && { tax_number }),
        harness,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Could not create the payment session." },
      { status: 500 }
    );
  }
}
