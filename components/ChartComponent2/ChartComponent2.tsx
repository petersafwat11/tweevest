import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";


const data = [
    {
        name: "Earnings",
        uv: 590,
        pv: 300,
        amt: 1400
    },
    {
        name: "Revenue",
        uv: 868,
        pv: 450,
        amt: 1506
    }
];
// const renderCustomizedLabel = (props: any) => {
//     const { x, y, width, value } = props;
//     const radius = 10;

//     return (
//         <g>
//             <circle cx={x + width / 2} cy={y - radius} r={radius} fill="transparent" />
//             <text
//                 x={x + width / 2}
//                 y={y - radius}
//                 fill="#727FA4"
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//             >
//                 {value.split(" ")[1]}
//             </text>
//         </g>
//     );
// };
export const ChartComponent2 = () => {
    return (
        <>
            <ResponsiveContainer width="100%" height={113}>
                <ComposedChart
                    layout="vertical"
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="0 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" barSize={20} fill="#8884d8" minPointSize={5} radius={[0, 50, 50, 0,]}>
                    </Bar>
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );
}
