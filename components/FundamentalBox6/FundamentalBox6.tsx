import React from "react";
import Image from 'next/image';


export const FundamentalBox6 = () => {
    return (
        <div className="box-otr">
            <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                Q4.19
            </p>
            <div className="box-inr py-[6px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                <div className="arrow-otr flex items-center justify-center">
                    <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-red.svg" alt="arrow" />
                </div>
                <p className="percent-text text-center heading-SB text-dark2 my-[4px]">
                    1200
                </p>
                <p className="percent-text text-center heading-XXS text-red">
                    -5%
                </p>
            </div>
        </div>
    )
}