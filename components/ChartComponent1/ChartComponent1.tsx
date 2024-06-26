import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";

// const CustomTooltip = (active:any, payload:any, label:any ) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="intro">{getIntroOfPage(label)}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

const getIntroOfPage = (label: any) => {
  if (label === "Page A") {
    return "Page A is about men's clothing";
  }
  if (label === "Page B") {
    return "Page B is about women's dress";
  }
  if (label === "Page C") {
    return "Page C is about women's bag";
  }
  if (label === "Page D") {
    return "Page D is about household goods";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
  return "";
};
const CustomTooltip = ({ active, payload, label }: any) => {
  console.log("hello");
  if (active && payload && payload.length) {
    console.log("payloadppp : ", payload);
    return (
      <div className="custom-tooltip border border-[#ECEEF1] bg-white">
        {/* <p className="label heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2">{`${payload[0].payload["name"]}`}</p> */}

        <p className="intro heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2">
          <span className="text-[red]">Date : </span>
          {payload[0].payload["name"]}
        </p>

        <p className="intro heading-XS py-2 px-4 border-b border-[#ECEEF1] text-primary-dark2">
          <span className="text-[#FFC221]">Stock RS :</span> $
          {payload[0].payload["Stock RS"]}
        </p>
        <p className="desc heading-XS py-2 px-4 border-[#ECEEF1] text-primary-dark2">
          <span className="text-[#00C2FF]">Sector RS :</span> $
          {payload[0].payload["Sector RS"]}
        </p>
      </div>
    );
  }

  return null;
};

export const ChartComponent1 = (lineData: any) => {
  console.log("came to chartcomp1");
  const data = [
    {
      name: "Page",
      "Stock RS": 4000,
      "Sector RS": 2400,
      amt: 2400,
    },
    {
      name: "Page",
      "Stock RS": 3000,
      "Sector RS": 1398,
      amt: 2210,
    },
    {
      name: "Page",
      "Stock RS": 2000,
      "Sector RS": 9800,
      amt: 2290,
    },
    {
      name: "Page",
      "Stock RS": 2780,
      "Sector RS": 3908,
      amt: 2000,
    },
    {
      name: "Page",
      "Stock RS": 1890,
      "Sector RS": 4800,
      amt: 2181,
    },
    {
      name: "Page",
      "Stock RS": 2390,
      "Sector RS": 3800,
      amt: 2500,
    },
    {
      name: "Page",
      "Stock RS": 3490,
      "Sector RS": 4300,
      amt: 2100,
    },
  ];
  // setData((old) => [...old, { name: 'first', data: 1 }]);

  // const getValues = () => {
  let new_data = lineData?.blueLine?.map((element: any, index: any) => {
    data[index]["Stock RS"] = element.value;
    data[index]["name"] = element.date;
  });
  new_data = lineData?.yellowLine?.map((element: any, index: any) => {
    data[index]["Sector RS"] = element.value;
    data[index]["name"] = element.date;
  });

  console.log("111: ", data);
  // };
  console.log("xxx: ", lineData);
  // getValues();

  useEffect(() => {
    console.log("data changi:", data);
  }, [data]);
  //   console.log("yellowLine: ", yellowLine);
  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <Line
            type="monotone"
            dot={false}
            dataKey="Sector RS"
            stroke="#FFC221"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dot={false}
            dataKey="Stock RS"
            stroke="#00C2FF"
            strokeWidth={2}
          />
          {/* <XAxis dataKey="name" /> */}
          {/* <Legend /> */}
          {/* <YAxis /> */}
          {/*  */}
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
