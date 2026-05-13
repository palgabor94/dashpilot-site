import Image from "next/image";

export default function GooglePlayBadge() {
  return (
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
  );
}
