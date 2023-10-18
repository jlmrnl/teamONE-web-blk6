import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

export default function Chart() {
  const data = [
    { name: "keys", value: 10 },
    { name: "wallets", value: 30 },
    { name: "books", value: 50 },
    { name: "phones", value: 70 },
    { name: "airpods", value: 90 },
    { name: "umbrellas", value: 50 },
    { name: "necklace", value: 30 },
    { name: "bracelets", value: 70 },
  ];

  const chartStyles = {
    backgroundColor: "#2c0854",
    borderRadius: "40px",
    padding: "20px",
    display: "inline-block",
  };

  const textStyle = {
    fill: "white",
  };

  const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} rx={10} fill={fill} />
      </g>
    );
  };

  const customYAxisTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div style={chartStyles} className="ml-4">
      <h2 className="text-white pb-4">Recovery Rates</h2>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="0 " />
        <XAxis dataKey="name" tick={textStyle} />
        <YAxis
          tick={textStyle}
          tickFormatter={(tick) => `${tick}%`}
          domain={[0, 100]}
          ticks={customYAxisTicks}
        />
        <Tooltip contentStyle={textStyle} />
        <Legend iconType="circle" iconSize={12} wrapperStyle={textStyle} />
        <Bar dataKey="value" fill="#8884d8" shape={<RoundedBar />} label={true}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="#3bf5ff" />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
