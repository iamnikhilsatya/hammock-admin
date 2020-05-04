import React from "react";

export default (props) => {
  return (
    <button
      className={`btn btn-${
        props.type === props.selectedType ? "primary" : "outline-primary"
      } btn-sm`}
      onClick={() => props.setType(props.type)}
    >
      {props.type}
    </button>
  );
};
