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
  // Generate random data
  const data = [
    { name: "keys", value: Math.floor(Math.random() * 101) },
    { name: "wallets", value: Math.floor(Math.random() * 101) },
    { name: "books", value: Math.floor(Math.random() * 101) },
    { name: "phones", value: Math.floor(Math.random() * 101) },
    { name: "airpods", value: Math.floor(Math.random() * 101) },
    { name: "umbrellas", value: Math.floor(Math.random() * 101) },
    { name: "necklace", value: Math.floor(Math.random() * 101) },
    { name: "bracelets", value: Math.floor(Math.random() * 101) },
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

  return (
    <div style={chartStyles} className="mr-4">
      <h2 className="text-white pb-4">Most Frequently Lost items</h2>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="0 " />
        <XAxis dataKey="name" tick={textStyle} />
        <YAxis tick={textStyle} />
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
