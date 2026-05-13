"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <header>
      <nav>
        <Link href="/" className="brand">
          <Logo />
          DashPilot
        </Link>
        <div className="nav-right">
          <div className="nav-links">
            <Link href="/dashboards" className={isActive("/dashboards")}>
              Dashboards
            </Link>
            <Link href="/privacy-policy" className={isActive("/privacy-policy")}>
              Privacy Policy
            </Link>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.softwiredtech.dashpilot"
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
