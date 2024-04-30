import React from "react";

type StepperProps = {
  children: JSX.Element | JSX.Element[];
  current: number;
};

const Stepper = (props: StepperProps) => {
  const { children, current } = props;
  const allChildren = React.Children.map(children, (child: JSX.Element) => {
    // console.log(child)
    // if (child.type?.name !== "Step")
    //   throw new Error("Only Step type components are allowed.");
    const clone = React.cloneElement(child);
    return clone;
  });
  return <div>{allChildren[current]}</div>;
};

export default Stepper;
