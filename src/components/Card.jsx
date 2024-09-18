const imageFolder = "../public/assets";

import star from "../../public/assets/star.svg";

export default function Card(props) {
  let badgeText;
  console.log(props);

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  /*
  Challenge: Fix our component! 😱
  */

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`${imageFolder}/${props.coverImg}`}
        className="card--image"
        alt="Main card image"
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star icon" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
