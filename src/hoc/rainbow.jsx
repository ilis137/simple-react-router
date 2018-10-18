import React from "react";

const Rainbow = WrappedComponent => {
  const colors = ["red", "orange", "blue", "green", "pink", "purple"];

  const randomColor = colors[Math.floor(Math.random() * 6)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
