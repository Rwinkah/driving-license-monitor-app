import React from "react";

interface Props {
  title: string;
  value: number;
}

const MetricCard = ({ title, value }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
};

export default MetricCard;
