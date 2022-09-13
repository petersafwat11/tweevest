import React from "react";

type BarChartProps = {
    value: string;
    text: string;
    color: string;
};
export const BartextChart = ({ value, text, color }: BarChartProps) => {
    return (
        <>
            {/* linechart-bg-red */}
            {/* linechart-bg-secondary-blue */}
            {/* linechart-bg-tertiary-yellow */}
            {/* linechart-bg-state-success */}
            {/* linechart-bg-primary-blue */}
            <div className={`line-text-otr w-[${value}%] linechart-bg-${color} rounded-r-[50px] mb-[32px]`}>
                <p className="line-text heading-XS text-right text-white px-[8px] py-[2px]">
                    {text}
                </p>
            </div>
        </>
    )
}