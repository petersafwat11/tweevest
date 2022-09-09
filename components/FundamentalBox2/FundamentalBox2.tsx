import React from "react";
import Image from 'next/image';


export const FundamentalBox2 = () => {
    return (
        <div className="box-otr">
            <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                Q2.21
            </p>
            <div className="box-inr py-[12px] px-[9px] bg-grey1 rounded-8">
                <p className="percent-text text-center heading-SB text-red mb-[6px]">
                    +58%
                </p>
                <p className="percent-text text-center heading-XXS text-dark2">
                    1.58 vs 1
                </p>
            </div>
        </div>
    )
}