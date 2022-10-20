const Button = (props) => {
  return (
    <button
      id={props.name + "-button"}
      className="drum-pad"
      onClick={() => props.onClick({ key: props.name })}
    >
      {props.name.toUpperCase()}
      <audio className="clip" id={props.name} src={props.source}></audio>
    </button>
  );
};

export default Button;
