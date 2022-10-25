import React from "react";
import Image from "next/image";
import Item from "antd/lib/list/Item";

type DataProps = {
  question_text: string;
  percentage_text: string;
  percentage_vs_text: string;
};
type reversedAPI14DataProps = {
  changePercent: number;
  date: Date;
  diff: string;
  label: string;
  month: number;
  prevValue: number;
  quarter: number;
  symbol: string;
  value: number;
  year: number;
};
type BoxProps = {
  boxData: Array<any>;
  group: string;
  // reversedAPI14Data: Array<any>;
};

export const FundamentalBox = ({
  boxData,
  group,
}: // reversedAPI14Data,
BoxProps) => {
  console.log("reversedAPI14Data in box: ", boxData);
  console.log("group: ", group);
  return (
    <div className="FundamentalBox flex items-center flex-wrap gap-[12px]">
      {boxData?.map((Item: any, index: number) => (
        <div key={index} className="box-otr w-[69px]">
          <p className="question-text heading-XS text-primary-dark text-center mb-[4px] bg-transparent">
            Q{Item?.quarter}.{Item?.year?.toString().slice(-2)}
          </p>
          <div
            className={`box-inr ${
              (group === "Fundamentals Snapshot" || group === "Sales Growth") &&
              (Item.question_text === "Q4.19" ||
                Item.question_text === "Q1.20" ||
                Item.question_text === "Q2.21") &&
              `red-text-box`
            } ${
              group === "Return on Equity" &&
              (Item.question_text === "Q2.19" || Item.question_text === "Q4.19"
                ? `red-arrow-box`
                : `green-arrow-box`)
            } ${
              group === "Institutionnal Ownership" &&
              (Item.question_text === "Q1.20" || Item.question_text === "Q4.19"
                ? `red-arrow-box-text`
                : `green-arrow-box-text`)
            } py-[12px] px-[9px] bg-grey-shade1 rounded-8`}
          >
            <div className="arrow-red flex items-center justify-center mb-[6px]">
              <Image
                className="object-contain"
                width="16px"
                height="16px"
                src="/svg/arrow-red.svg"
                alt="arrow"
              />
            </div>
            <div className="arrow-green flex items-center justify-center">
              <Image
                className="object-contain"
                width="16px"
                height="16px"
                src="/svg/arrow-green.svg"
                alt="arrow"
              />
            </div>
            {Number(Item?.changePercent) > 0 ? (
              <p className="percent-text text-center heading-SB text-green-default mb-[6px]">
                {Math.round(Number(Item?.changePercent))}%
              </p>
            ) : (
              <p className="percent-text text-center heading-SB text-red-default mb-[6px]">
                {Math.round(Number(Item?.changePercent))}%
              </p>
            )}
            <p className="percent-text2 text-center heading-XXS text-primary-dark2">
              {Number(Item.value).toFixed(2)} vs{" "}
              {Number(Item.prevValue).toFixed(2)}
            </p>
            <p className="percent-text3 text-center heading-XXS text-green-default">
              +16%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
