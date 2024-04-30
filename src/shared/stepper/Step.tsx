import React from "react";

type StepProps = {
  children: React.ReactNode;
};

const Step = (props: StepProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Step;
