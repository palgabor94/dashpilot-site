import AppIcon from "@/components/AppIcon";
import GooglePlayBadge from "@/components/GooglePlayBadge";

export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <AppIcon />

        <h1>
          Turn your phone into
          <br />
          a <span className="accent">real-time</span> car dashboard.
        </h1>

        <p className="hero-sub">
          Connect to your car through your Comma device, and get a real-time dashboard right on your
          phone. Choose the dashboard you like the most, and enjoy your ride.
        </p>

        <GooglePlayBadge />
      </div>
    </section>
  );
}
