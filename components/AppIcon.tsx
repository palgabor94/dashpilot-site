import Image from "next/image";

export default function AppIcon() {
  return (
    <Image
      src="/app-icon.png"
      alt="DashPilot app icon"
      width={200}
      height={200}
      className="hero-icon"
      priority
    />
  );
}
