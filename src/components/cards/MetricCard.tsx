import React from "react";
import "../../styles/Metrics.scss";

interface Props {
  title: string;
  value: number;
}

const MetricCard = ({ title, value }: Props) => {
  return (
    <div className="stats">
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
};

export default MetricCard;
