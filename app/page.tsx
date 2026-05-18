import Image from "next/image";
import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.softwiredtech.dashpilot";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Image
            src="/app-icon.png"
            alt="DashKit"
            width={128}
            height={128}
            className="hero-icon"
            priority
          />

          <h1>
            DashKit — Turn your phone into a{" "}
            <span className="accent">real time</span> car dashboard
          </h1>

          <p className="hero-sub">
           subtitle text.
          </p>

          <div className="cta-row">
            <Link href="/order" className="cta-primary">
              Order DashKit
            </Link>

            <div className="store-badges">
              <a
                href={PLAY_STORE_URL}
                className="play-badge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Get DashPilot on Google Play"
                  width={200}
                  height={60}
                  priority
                />
              </a>
            </div>
          </div>

          <p className="hero-note">iOS App Store — coming soon.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2>Three steps to a live dashboard</h2>

          <div className="steps">
            <div className="step-card">
              <span className="step-num">1</span>
              <h3>Install DashPilot</h3>
            </div>
            <div className="step-card">
              <span className="step-num">2</span>
              <h3>Connect DashKit</h3>
            </div>
            <div className="step-card">
              <span className="step-num">3</span>
              <h3>Drive</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What&apos;s in the box</p>
          <h2>Hardware + app, working together</h2>

          <div className="box-grid">
            <div className="box-card">
              <h3>DashKit device</h3>
              <p>
                placeholder.
              </p>
            </div>
            <div className="box-card">
              <h3>DashPilot app</h3>
              <p>
               placeholder.
              </p>
            </div>
          </div>

          <div className="cta-row">
            <Link href="/order" className="cta-primary">
              Order DashKit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
