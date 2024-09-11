/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

// import katieZaferes from "../src/assets/katie-zaferes.svg";

const imageFolder = "../src/assets/";

import star from "../src/assets/star.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`${imageFolder}${props.img}`}
        className="card--image"
        alt="Main card image"
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star icon" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • </span>
        <span className="gray">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
