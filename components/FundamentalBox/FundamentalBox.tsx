import React from "react";
import Image from 'next/image';
import Item from "antd/lib/list/Item";

type DataProps = {
    question_text: string;
    percentage_text: string;
    percentage_vs_text: string;
};
type BoxProps = {
    boxData: DataProps[];
    group: string
};

export const FundamentalBox = ({ boxData, group }: BoxProps) => {
    return (
        <div className="FundamentalBox flex items-center flex-wrap gap-[12px]">
            {
                boxData.map((Item: any, index: number) =>
                    <div key={index} className="box-otr w-[69px]">
                        <p className="question-text heading-XS text-primary-dark text-center mb-[4px] bg-transparent">
                            {Item.question_text}
                        </p>
                        {/* green-arrow-box */}
                        {/* green-arrow-box-text */}
                        {/* red-arrow-box-text */}
                        {/* red-arrow-box */}
                        {/* ${Item.question_text === 'Q4.19' ? `red-text-box` : `` || Item.question_text === 'Q1.20' ? `red-text-box` : `` || Item.question_text === 'Q1.21' ? `green-background-box` : `` || Item.question_text === 'Q2.21' ? `green-background-box red-text-box` : ``} */}
                        <div className={`box-inr ${(group === "Fundamentals Snapshot" || group === "Sales Growth") && (Item.question_text === 'Q4.19' || Item.question_text === 'Q1.20' || Item.question_text === 'Q2.21') && `red-text-box`} ${group === "Return on Equity" && ((Item.question_text === "Q2.19" || Item.question_text === "Q4.19") ? `red-arrow-box` : `green-arrow-box`)} ${group === "Institutionnal Ownership" && ((Item.question_text === "Q1.20" || Item.question_text === "Q4.19") ? `red-arrow-box-text` : `green-arrow-box-text`)} py-[12px] px-[9px] bg-grey-shade1 rounded-8`}>
                            <div className="arrow-red flex items-center justify-center mb-[6px]">
                                <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-red.svg" alt="arrow" />
                            </div>
                            <div className="arrow-green flex items-center justify-center">
                                <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                            </div>
                            <p className="percent-text text-center heading-SB text-green-default mb-[6px]">
                                {Item.percentage_text}
                            </p>
                            <p className="percent-text2 text-center heading-XXS text-primary-dark2">
                                {Item.percentage_vs_text}
                            </p>
                            <p className="percent-text3 text-center heading-XXS text-green-default">
                                +16%
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}