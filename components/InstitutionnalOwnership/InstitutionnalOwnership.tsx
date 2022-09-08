import React from "react";
import Image from 'next/image';
import ChartComponent1 from "../ChartComponent1/ChartComponent1";


const InstitutionnalOwnership = () => {
    return (
        <div className="InstitutionnalOwnership-main px-[75px]">
            <div className="filter-otr bg-white border-border border-[1px] shadow-Shadow2 rounded-16 p-[16px] mb-[44px]">
                <ul className="filter-ul flex items-center flex-wrap gap-[16px]">
                    <li className="filter-li">
                        <button className="filter-btn relative flex items-center bg-grey2 hover:bg-primarylight px-[16px] py-[8px] rounded-[50px] gap-[8px]">
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
                        <button className="filter-btn relative flex items-center bg-grey2 hover:bg-primarylight px-[16px] py-[8px] rounded-[50px] gap-[8px]">
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
                        <button className="filter-btn relative flex items-center bg-grey2 hover:bg-primarylight px-[16px] py-[8px] rounded-[50px] gap-[8px]">
                            <p className="heading-S text-textcolor">Add</p>
                            <div className="close-icon flex">
                                <Image className="object-cover" width="20px" height="20px" src="/svg/close-circle.svg" alt="Shape" />
                            </div>
                            <div className="plus-icon absolute flex">
                                <Image className="object-cover" width="20px" height="20px" src="/svg/plus-icon.svg" alt="Shape" />
                            </div>
                            <div className="drop-down-otr absolute top-[70px] left-0 pt-[24px] z-[999]">
                                <ul className="drop-down-ul w-[220px] bg-white border-[1px] border-border rounded-8 overflow-hidden shadow-Shadow2">
                                    <li className="drop-down-li text-left flex">
                                        <a href="" className="drop-down-a heading-S p-[16px] text-dark w-[100%] bg-white hover:bg-primary hover:text-white">
                                            EV/sales
                                        </a>
                                    </li>
                                    <li className="drop-down-li text-left flex">
                                        <a href="" className="drop-down-a heading-S p-[16px] text-dark w-[100%] bg-white hover:bg-primary hover:text-white">
                                            Net Margin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="chart-row flex gap-[30px]">
                <div className="Institutionnal-data-otr w-[50%]">
                    <div className="Fundamentals-otr mb-[40px]">
                        <div className="Fundamentals-heading-otr flex items-center justify-between mb-[24px] gap-[16px]">
                            <div className="Fundamentals-heading-inr flex-1 flex items-center gap-[16px]">
                                <p className="heading-SB text-dark flex items-center">
                                    Fundamentals Snapshot
                                    <span className="ml-[8px] flex">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                    </span>
                                </p>
                                <p className="heading-XXSB text-dark flex items-center">
                                    <span className="w-[24px] h-[8px] border-[1px] border-border2 bg-grey1 rounded-[50px] mr-[6px]"></span>
                                    Current
                                </p>
                                <p className="heading-XXSB text-dark flex items-center">
                                    <span className="w-[24px] h-[8px] border-[1px] border-primarylight bg-primarylight2 rounded-[50px] mr-[6px]"></span>
                                    Estimates
                                </p>
                            </div>
                            <button className="Show-Graph relative flex items-center bg-grey1 hover:bg-primary p-[8px] rounded-8 gap-[8px]">
                                <div className="graph-icon1 flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon.svg" alt="Shape" />
                                </div>
                                <div className="graph-icon2 absolute flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon-white.svg" alt="Shape" />
                                </div>
                                <p className="heading-S text-dark">Show Graph</p>
                            </button>
                        </div>
                        <div className="Fundamentals-boxes-otr flex items-center flex-wrap gap-[12px]">
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q4.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-red mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-red mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q4.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.21
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-greenlight rounded-8 hover:bg-greenlight">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.21
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-red mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Fundamentals-otr mb-[40px]">
                        <div className="Fundamentals-heading-otr flex items-center justify-between mb-[24px] gap-[16px]">
                            <div className="Fundamentals-heading-inr flex-1 flex items-center gap-[16px]">
                                <p className="heading-SB text-dark flex items-center">
                                    Sales Growth
                                    <span className="ml-[8px] flex">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                    </span>
                                </p>
                                <p className="heading-XXSB text-dark flex items-center">
                                    <span className="w-[24px] h-[8px] border-[1px] border-border2 bg-grey1 rounded-[50px] mr-[6px]"></span>
                                    Current
                                </p>
                                <p className="heading-XXSB text-dark flex items-center">
                                    <span className="w-[24px] h-[8px] border-[1px] border-primarylight bg-primarylight2 rounded-[50px] mr-[6px]"></span>
                                    Estimates
                                </p>
                            </div>
                            <button className="Show-Graph relative flex items-center bg-grey1 hover:bg-primary p-[8px] rounded-8 gap-[8px]">
                                <div className="graph-icon1 flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon.svg" alt="Shape" />
                                </div>
                                <div className="graph-icon2 absolute flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon-white.svg" alt="Shape" />
                                </div>
                                <p className="heading-S text-dark">Show Graph</p>
                            </button>
                        </div>
                        <div className="Fundamentals-boxes-otr flex items-center flex-wrap gap-[12px]">
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q4.19
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-red mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-red mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q4.20
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.21
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-greenlight rounded-8 hover:bg-greenlight">
                                    <p className="percent-text text-center heading-SB text-green mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.21
                                </p>
                                <div className="box-inr py-[12px] px-[10px] bg-grey1 rounded-8">
                                    <p className="percent-text text-center heading-SB text-red mb-[6px]">
                                        +58%
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-dark2">
                                        1.58 vs 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Fundamentals-otr mb-[40px]">
                        <div className="Fundamentals-heading-otr flex items-center justify-between mb-[24px] gap-[16px]">
                            <div className="Fundamentals-heading-inr flex-1 flex items-center gap-[16px]">
                                <p className="heading-SB text-dark flex items-center">
                                    Return on Equity
                                    <span className="ml-[8px] flex">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                    </span>
                                </p>
                            </div>
                            <button className="Show-Graph relative flex items-center bg-grey1 hover:bg-primary p-[8px] rounded-8 gap-[8px]">
                                <div className="graph-icon1 flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon.svg" alt="Shape" />
                                </div>
                                <div className="graph-icon2 absolute flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon-white.svg" alt="Shape" />
                                </div>
                                <p className="heading-S text-dark">Show Graph</p>
                            </button>
                        </div>
                        <div className="Fundamentals-boxes-otr Return-boxes-otr flex items-center flex-wrap gap-[12px]">
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.19
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.19
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-red.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.19
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q4.19
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-red.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.20
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.20
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.20
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q4.20
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.21
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.21
                                </p>
                                <div className="box-inr py-[12px] px-[11px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-green">
                                        +58%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Fundamentals-otr">
                        <div className="Fundamentals-heading-otr flex items-center justify-between mb-[24px] gap-[16px]">
                            <div className="Fundamentals-heading-inr flex-1 flex items-center gap-[16px]">
                                <p className="heading-SB text-dark flex items-center">
                                    Institutionnal Ownership
                                    <span className="ml-[8px] flex">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                    </span>
                                </p>
                            </div>
                            <button className="Show-Graph relative flex items-center bg-grey1 hover:bg-primary p-[8px] rounded-8 gap-[8px]">
                                <div className="graph-icon1 flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon.svg" alt="Shape" />
                                </div>
                                <div className="graph-icon2 absolute flex">
                                    <Image className="object-cover" width="20px" height="20px" src="/svg/show-graph-icon-white.svg" alt="Shape" />
                                </div>
                                <p className="heading-S text-dark">Show Graph</p>
                            </button>
                        </div>
                        <div className="Fundamentals-boxes-otr Return-boxes-otr flex items-center flex-wrap gap-[12px]">
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.19
                                </p>
                                <div className="box-inr py-[15px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2">
                                        1000
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.19
                                </p>
                                <div className="box-inr py-[6px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2 my-[4px]">
                                        1200
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-green">
                                        +16%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.19
                                </p>
                                <div className="box-inr py-[6px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2 my-[4px]">
                                        1200
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-green">
                                        +10%
                                    </p>
                                </div>
                            </div>
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
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.20
                                </p>
                                <div className="box-inr py-[6px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-red.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2 my-[4px]">
                                        1200
                                    </p>
                                    <p className="percent-text text-center heading-XXS text-red">
                                        -19%
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.20
                                </p>
                                <div className="box-inr py-[15px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2">
                                        1300
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q3.20
                                </p>
                                <div className="box-inr py-[15px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2">
                                        1000
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q4.20
                                </p>
                                <div className="box-inr py-[15px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2">
                                        1000
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q1.21
                                </p>
                                <div className="box-inr py-[15px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2">
                                        1000
                                    </p>
                                </div>
                            </div>
                            <div className="box-otr">
                                <p className="question-text heading-XS text-dark text-center mb-[4px] bg-transparent">
                                    Q2.21
                                </p>
                                <div className="box-inr py-[15px] px-[14px] bg-transparent border-[1px] border-grey1 rounded-8">
                                    <div className="arrow-otr flex items-center justify-center mb-[6px]">
                                        <Image className="object-contain" width="16px" height="16px" src="/svg/arrow-green.svg" alt="arrow" />
                                    </div>
                                    <p className="percent-text text-center heading-SB text-dark2">
                                        1000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Institutionnal-chart-otr w-[50%]">
                    <div className="Institutionnal-chart pt-[24px] pr-[24px] pb-[32px] pl-[24px] bg-white border-[1px] border-border rounded-16">
                        <h4 className="heading heading-LB mb-[40px] text-dark">
                            Institutionnal Ownership
                        </h4>
                        <ChartComponent1 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstitutionnalOwnership