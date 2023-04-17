import classes from "./Screen.module.css";

const Screen = (props) => {
  return <div className={classes.screen}>{props.calculations}</div>;
};

export default Screen;
