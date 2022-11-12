import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label: any) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};
const CustomTooltip = ({ active, payload, label }:any) => {

  console.log('hello')
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip border border-[#ECEEF1] bg-white">
        <p className="label heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2">{`${label} : ${payload[0].value}`}</p>
        <p className="intro heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2"> <span className="text-[#FFC221]">xs :</span> Add Here</p>
        <p className="desc heading-XS py-2 px-4 border-[#ECEEF1] text-primary-dark2"><span className="text-[#00C2FF]">xs :</span> Add Here</p>
      </div>
    );
  }

  return null;
};

export const ChartComponent1 = (lineData: any) => {
  const getValues = () => {
    let new_data = lineData?.blueLine?.map((element: any, index: any) => {
      data[index]["uv"] = element.value;
      data[index]["name"] = element.date;
    });
    new_data = lineData?.yellowLine?.map((element: any, index: any) => {
      data[index]["pv"] = element.value;
      data[index]["name"] = element.date;
    });

    console.log("111: ", data);
  };
  console.log("xxx: ", lineData);
  getValues();
  //   console.log("yellowLine: ", yellowLine);
  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Line type="monotone" dot={false} dataKey="pv" stroke="#FFC221" strokeWidth={2} />
            <span className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center bg-[#FFC221]">2</span>
          <Line type="monotone" dot={false} dataKey="uv" stroke="#00C2FF" strokeWidth={2} />
          {/* <XAxis dataKey="name" /> */}
          {/* <Legend /> */}
          {/* <YAxis /> */}

          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
