import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

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
