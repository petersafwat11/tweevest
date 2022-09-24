import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";


const data = [
    {
        name: "Page",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export const ChartComponent1 = () => {
    return (
        <>
            <ResponsiveContainer width="100%" height={233}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#FFC221" strokeWidth={2} />
                    <Line type="monotone" dataKey="uv" stroke="#00C2FF" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
