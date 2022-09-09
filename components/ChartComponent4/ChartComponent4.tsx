import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";


const data = [
    {
        name: 'P Meta-34x',
        uv: 4000,
        pv: 2800,
        amt: 2400,
    },
    {
        name: 'P TSLA-34x',
        uv: 5000,
        pv: 4000,
        amt: 2210,
    },
    {
        name: 'P AMZN-34x',
        uv: 3000,
        pv: 3000,
        amt: 2290,
    },
    {
        name: 'P ROKU-34x',
        uv: 2780,
        pv: 2808,
        amt: 2000,
    },
    {
        name: 'P NFLX-34x',
        uv: 50,
        pv: 4800,
        amt: 2181,
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
export const ChartComponent4 = () => {
    return (
        <>
            <ResponsiveContainer width="100%" height={230}>
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
