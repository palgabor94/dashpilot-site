"use client";

import { useState, type FormEvent } from "react";

export default function OrderPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sameAddress, setSameAddress] = useState(true);
  const [isCompany, setIsCompany] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [harness, setHarness] = useState("");

  const price = process.env.NEXT_PUBLIC_PRICE_EUR || "149";
  const formattedPrice = `€${Number(price).toLocaleString("en-US")}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const val = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement).value;

    const data = {
      name: val("name"),
      email: val("email"),
      phone: val("phone"),
      is_company: isCompany,
      shipping_zip: val("shipping_zip"),
      shipping_city: val("shipping_city"),
      shipping_address: val("shipping_address"),
      billing_zip: sameAddress ? val("shipping_zip") : val("billing_zip"),
      billing_city: sameAddress ? val("shipping_city") : val("billing_city"),
      billing_address: sameAddress
        ? val("shipping_address")
        : val("billing_address"),
      ...(isCompany && { tax_number: val("tax_number") }),
      harness,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong with your order.");
      }

      window.location.href = result.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error.");
      setLoading(false);
    }
  }

  return (
    <section className="order">
      <div className="order-inner">
        <h1>Order DashKit</h1>
        <p className="order-price">DashKit — {formattedPrice}</p>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="order-form">
          {/* Buyer type toggle */}
          <div className="toggle-group">
            <button
              type="button"
              onClick={() => setIsCompany(false)}
              className={`toggle-btn ${!isCompany ? "active" : ""}`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setIsCompany(true)}
              className={`toggle-btn ${isCompany ? "active" : ""}`}
            >
              Company
            </button>
          </div>

          {/* Harness selection */}
          <div className="field">
            <label htmlFor="harness">Harness type</label>
            <select
              id="harness"
              name="harness"
              required
              value={harness}
              onChange={(e) => setHarness(e.target.value)}
            >
              <option value="" disabled>
                Choose a harness type…
              </option>
              <option value="tesla_hw3">Tesla HW3 (Model 3/Y)</option>
              <option value="tesla_hw4">Tesla HW4 (Model 3/Y)</option>
              <option value="other">Other</option>
            </select>
          </div>

          {harness === "other" && (
            <div className="notice">
              <p className="notice-title">
                Only Tesla HW3 and HW4 harnesses are in stock right now.
              </p>
              <p>
                For any other vehicle, please get in touch:{" "}
                <a href="mailto:info@softwiredtech.com">info@softwiredtech.com</a>
              </p>
            </div>
          )}

          {/* Name / Company name */}
          <div className="field">
            <label htmlFor="name">{isCompany ? "Company name" : "Name"}</label>
            <input id="name" name="name" type="text" required />
          </div>

          {isCompany && (
            <div className="field">
              <label htmlFor="tax_number">Tax number</label>
              <input
                id="tax_number"
                name="tax_number"
                type="text"
                required
                placeholder="EU123456789"
              />
            </div>
          )}

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" required />
          </div>

          {/* Shipping address */}
          <fieldset>
            <legend>Shipping address</legend>
            <div className="field-row">
              <div className="field field-zip">
                <label htmlFor="shipping_zip">ZIP / Postcode</label>
                <input
                  id="shipping_zip"
                  name="shipping_zip"
                  type="text"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="shipping_city">City</label>
                <input
                  id="shipping_city"
                  name="shipping_city"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="shipping_address">Street, house no.</label>
              <input
                id="shipping_address"
                name="shipping_address"
                type="text"
                required
              />
            </div>
          </fieldset>

          {/* Same address toggle */}
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={sameAddress}
              onChange={(e) => setSameAddress(e.target.checked)}
            />
            Billing address is the same as the shipping address
          </label>

          {/* Billing address (conditional) */}
          {!sameAddress && (
            <fieldset>
              <legend>Billing address</legend>
              <div className="field-row">
                <div className="field field-zip">
                  <label htmlFor="billing_zip">ZIP / Postcode</label>
                  <input
                    id="billing_zip"
                    name="billing_zip"
                    type="text"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="billing_city">City</label>
                  <input
                    id="billing_city"
                    name="billing_city"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="billing_address">Street, house no.</label>
                <input
                  id="billing_address"
                  name="billing_address"
                  type="text"
                  required
                />
              </div>
            </fieldset>
          )}

          {/* Terms checkbox */}
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            I have read and accept the Terms &amp; Conditions
          </label>

          <button
            type="submit"
            className="cta-primary submit-btn"
            disabled={loading || !acceptedTerms || harness === "other" || !harness}
          >
            {loading ? "Processing…" : `Pay ${formattedPrice}`}
          </button>

          <p className="form-hint">
            You&apos;ll be redirected to Stripe&apos;s secure payment page.
          </p>
        </form>
      </div>
    </section>
  );
}
