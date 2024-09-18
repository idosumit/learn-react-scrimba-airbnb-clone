import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((input) => {
    return (
      <Card
        key={input.id}
        img={input.coverImg}
        rating={input.stats.rating}
        reviewCount={input.stats.reviewCount}
        location={input.location}
        title={input.title}
        price={input.price}
        openSpots={input.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
