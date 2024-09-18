const imageFolder = "../public/assets";

import star from "../../public/assets/star.svg";

export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  console.log(badgeText);

  /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
*/

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`${imageFolder}/${props.img}`}
        className="card--image"
        alt="Main card image"
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star icon" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • </span>
        <span className="gray">{props.location}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
