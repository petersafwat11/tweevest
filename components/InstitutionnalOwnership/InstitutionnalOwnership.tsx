import React from "react";
import Image from 'next/image';
import { Chart3 } from "..";
import { FundamentalBox } from "..";


export const InstitutionnalOwnership = () => {
    const valArray = [{
        id: 1,
        val: "Fundamentals Snapshot",
    }, {
        id: 2,
        val: "Sales Growth",
    }, {
        id: 3,
        val: "Return on Equity",
    }, {
        id: 4,
        val: "Institutionnal Ownership",
    }]
    const data = [{
        question_text: 'Q1.19', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q2.19', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q3.19', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q4.19', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q1.20', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q2.20', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q3.20', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q4.20', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q1.21', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    },
    {
        question_text: 'Q2.21', percentage_text: '+58%', percentage_vs_text: '1.58 vs 1'
    }
    ]
    return (
        <>
            <div className="InstitutionnalOwnership-main px-[75px] xl:px-[15px]">
                <div className="filter-otr bg-white border-border-shade1 border-[1px] shadow-Shadow2 rounded-16 p-[16px] mb-[44px]">
                    <ul className="filter-ul flex items-center flex-wrap gap-[16px]">
                        <li className="filter-li">
                            <button className="filter-btn relative flex items-center bg-grey-shade2 hover:bg-primary-light px-[16px] py-[8px] rounded-[50px] gap-[8px]">
                                <p className="heading-S text-textcolor">Earning Growth</p>
                                <div className="close-icon flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/close-circle.svg" alt="Shape" />
                                </div>
                                <div className="plus-icon absolute flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/plus-icon.svg" alt="Shape" />
                                </div>
                            </button>
                        </li>
                        <li className="filter-li">
                            <button className="filter-btn relative flex items-center bg-grey-shade2 hover:bg-primary-light px-[16px] py-[8px] rounded-[50px] gap-[8px]">
                                <p className="heading-S text-textcolor">Sales Growth</p>
                                <div className="close-icon flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/close-circle.svg" alt="Shape" />
                                </div>
                                <div className="plus-icon absolute flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/plus-icon.svg" alt="Shape" />
                                </div>
                            </button>
                        </li>
                        <li className="filter-li">
                            <button className="filter-btn relative flex items-center bg-grey-shade2 hover:bg-primary-light px-[16px] py-[8px] rounded-[50px] gap-[8px]">
                                <p className="heading-S text-textcolor">Add</p>
                                <div className="close-icon flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/close-circle.svg" alt="Shape" />
                                </div>
                                <div className="plus-icon absolute flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/plus-icon.svg" alt="Shape" />
                                </div>
                                <div className="drop-down-otr absolute top-[70px] left-0 pt-[24px] z-[999] sm:left-[-45px] xs:left-[-16px]">
                                    <ul className="drop-down-ul w-[220px] bg-white border-[1px] border-border-shade1 rounded-8 overflow-hidden shadow-Shadow2 sm:w-[160px]">
                                        <li className="drop-down-li text-left flex">
                                            <a href="" className="drop-down-a heading-S p-[16px] text-primary-dark w-[100%] bg-white hover:bg-primary-default hover:text-white">
                                                EV/sales
                                            </a>
                                        </li>
                                        <li className="drop-down-li text-left flex">
                                            <a href="" className="drop-down-a heading-S p-[16px] text-primary-dark w-[100%] bg-white hover:bg-primary-default hover:text-white">
                                                Net Margin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="chart-row flex items-center gap-[30px] lg:flex-col">
                    <div className="Institutionnal-data-otr w-[50%] lg:w-[100%]">
                        {valArray.map((value, index) => {
                            return (
                                <div key={index} className={`Fundamentals-otr ${value.id !== 4 && "mb-[40px]"}`}>
                                    <div className="Fundamentals-heading-otr flex items-center justify-between mb-[24px] gap-[16px] sm:flex-col sm:items-start">
                                        <div className="Fundamentals-heading-inr flex-1 flex items-center gap-[16px]">
                                            <p className="heading-SB text-primary-dark flex items-center">
                                                {value.val}
                                                <span className="ml-[8px] flex">
                                                    <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                                </span>
                                            </p>
                                            {value.id <= 2 && (
                                                <>
                                                    <p className="heading-XXSB text-primary-dark flex items-center">
                                                        <span className="w-[24px] h-[8px] border-[1px] border-border-shade2 bg-grey-shade1 rounded-[50px] mr-[6px]"></span>
                                                        Current
                                                    </p>
                                                    <p className="heading-XXSB text-primary-dark flex items-center">
                                                        <span className="w-[24px] h-[8px] border-[1px] border-primary-light bg-primary-light2 rounded-[50px] mr-[6px]"></span>
                                                        Estimates
                                                    </p>
                                                </>
                                            )}

                                        </div>
                                        <button className="Show-Graph relative flex items-center bg-grey-shade1 hover:bg-primary-default p-[8px] rounded-8 gap-[8px]">
                                            <div className="graph-icon1 flex">
                                                <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon.svg" alt="Shape" />
                                            </div>
                                            <div className="graph-icon2 absolute flex">
                                                <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon-white.svg" alt="Shape" />
                                            </div>
                                            <p className="heading-S text-primary-dark">Show Graph</p>
                                        </button>
                                    </div>
                                    <div className="Fundamentals-boxes-otr flex items-center flex-wrap gap-[12px]">
                                        <FundamentalBox boxData={data} group={value.val} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="Institutionnal-chart-otr w-[50%] lg:w-[100%]">
                        <div className="Institutionnal-chart pt-[24px] pr-[24px] pb-[32px] pl-[24px] bg-white border-[1px] border-border-shade1 rounded-16 sm:pl-[0px] sm:pr-[0px] sm:pb-[16px]">
                            <h4 className="heading heading-LB text-primary-dark sm:pl-[16px] sm:pr-[16px]">
                                Institutionnal Ownership
                            </h4>
                            <div className="chart-otr w-[100%] h-[600px] mt-[52px] lg:h-[400px] sm:h-[350px] sm:mt-[24px]">
                                <Chart3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
