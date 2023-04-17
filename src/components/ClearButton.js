import classes from "./ClearButton.module.css";

const ClearButton = (props) => {
  return (
    <div>
      <button onClick={props.resetCalculations} className={classes.clear}>
        CLEAR
      </button>
    </div>
  );
};

export default ClearButton;
