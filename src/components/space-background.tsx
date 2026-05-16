const shootingStars = Array.from({ length: 6 }, (_, index) => index);

export function SpaceBackground() {
  return (
    <div className="space-background" aria-hidden="true">
      <div className="space-nebula" />
      <div className="starfield starfield-one" />
      <div className="starfield starfield-two" />
      <div className="starfield starfield-three" />
      <div className="cosmic-dust" />
      <div className="shooting-stars">
        {shootingStars.map((star) => (
          <span key={star} />
        ))}
      </div>
    </div>
  );
}
