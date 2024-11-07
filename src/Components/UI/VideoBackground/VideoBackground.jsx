import "./VideoBackground.scss";

export default function VideoBackground({ src, type }) {
  return (
    <video autoPlay muted loop playsInline className="video-background">
      <source src={src} type={type} />
    </video>
  );
}
