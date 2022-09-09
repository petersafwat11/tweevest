import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";



const data = [
    {
        name: "Q1.19",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Q2.19",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Q3.19",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Q4.19",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Q1.20",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Q2.20",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];
export const ChartComponent3 = () => {
    return (
        <>
            <ResponsiveContainer width="100%" height={610}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid stroke="#F4F5F8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Area type="monotone" dataKey="uv" stroke="#376FFF" fill="#EFF2FE" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}
