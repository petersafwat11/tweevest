import React from "react";
import Image from 'next/image';


export const FundamentalBox4 = () => {
    return (
        <div className="box-otr">
            <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                Q2.19
            </p>
            <div className="box-inr py-[12px] px-[10px] bg-transparent border-[1px] border-grey1 rounded-8">
                <div className="arrow-otr flex items-center justify-center mb-[6px]">
                    <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-red.svg" alt="arrow" />
                </div>
                <p className="percent-text text-center heading-SB text-dark2">
                    +58%
                </p>
            </div>
        </div>
    )
}