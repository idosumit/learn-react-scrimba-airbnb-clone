import photoGrid from "../../public/assets/photo-grid.svg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={photoGrid} className="hero--photo-grid" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by<br></br>one-of-a-kind
        hosts—all without leaving<br></br>home.
      </p>
    </section>
  );
}
