import classes from "./Cards.module.css";

function Cards(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default Cards;
