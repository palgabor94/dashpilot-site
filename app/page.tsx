import Image from "next/image";

export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <Image
          src="/app-icon.png"
          alt="DashPilot app icon"
          width={128}
          height={128}
          className="hero-icon"
          priority
        />

        <h1>
          Turn your phone into
          <br />
          a <span className="accent">real-time</span> car dashboard.
        </h1>

        <p className="hero-sub">
          Connect to your car through your Comma device, and get a real-time dashboard right on your
          phone. Choose the dashboard you like the most, and enjoy your ride.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=com.softwiredtech.dashpilot"
          className="play-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={200}
            height={60}
            priority
          />
        </a>
      </div>
    </section>
  );
}
