import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboards — DashPilot",
};

export default function Dashboards() {
  return (
    <div className="placeholder">
      <div className="container">
        <div className="page">
          <div className="eyebrow">Dashboards</div>
          <h1>Coming soon.</h1>
          <p>This page is being prepared.</p>
          <Link href="/" className="back">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
