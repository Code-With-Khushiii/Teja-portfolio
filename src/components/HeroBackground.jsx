const HeroBackground = () => {
  return (
    <section className="absolute inset-0">
      <div className="relative h-screen overflow-y-hidden">
        {/* Clean Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/Herobackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroBackground;
