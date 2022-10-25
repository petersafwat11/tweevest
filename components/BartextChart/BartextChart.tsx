import React from "react";

type BarChartProps = {
  value: string;
  text: string;
  color: string;
};
export const BartextChart = ({ value, text, color }: BarChartProps) => {
  console.log(value);
  //   value = value + "%";
  // console.log("valye :", value);
  // const customcss = `line-text-otr w-[${value}] linechart-bg-${color} rounded-r-[50px] mb-[32px]`;
  if (value) {
    return (
      <>
        <div
          style={{ width: `${value}%` }}
          className={`line-text-otr lineChart1 linechart-bg-${color} rounded-r-[50px] mb-[32px]`}
        >
          <p className="line-text heading-XS text-right text-white px-[8px] py-[2px]">
            {text}
          </p>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
};
