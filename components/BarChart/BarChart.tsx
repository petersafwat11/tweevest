import React from "react";
import Image from 'next/image';
import { BartextChart } from "..";
import { BartextChart2 } from "..";
import { Dropdown } from 'antd';

const links = [
    { title: 'Price to sales', link: '' },
    { title: 'Price to sales', link: '' },
    { title: 'Price to sales', link: '' },
    { title: 'Price to sales', link: '' },
];

export const BarChart = () => {
    return (
        <>
            <div className="BarChart-box-otr">
                <div className="BarChart-box-inr px-[32px] pt-[32px] pb-[40px]">
                    <div className="chart-heading-otr">
                        <p className="heading-SB text-primary-dark flex items-center">
                            Fundamentals Snapshot
                            <span className="ml-[8px] flex">
                                <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                            </span>
                        </p>
                        <div className="static-boxes-otr flex items-center flex-wrap gap-[7px] mt-[10px] mb-[40px]">
                            <div className="static-box w-[31%] 2xl:w-[48%]">
                                <h3 className="heading-h3 text-primary-dark">
                                    45x
                                </h3>
                                <p className="heading-XS text-primary-dark2">
                                    P/E Ratio
                                </p>
                            </div>
                            <div className="static-box w-[31%] 2xl:w-[48%]">
                                <h3 className="heading-h3 text-primary-dark">
                                    25x
                                </h3>
                                <p className="heading-XS text-primary-dark2">
                                    P/S Ratio
                                </p>
                            </div>
                            <div className="static-box w-[31%] 2xl:w-[48%]">
                                <h3 className="heading-h3 text-primary-dark">
                                    4x
                                </h3>
                                <p className="heading-XS text-primary-dark2">
                                    P/Book Ratio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="earning-revenue-otr mb-[24px] flex items-center gap-[16px]">
                        <div className="content-otr">
                            <p className="heading-XS text-primary-dark2 mb-[26px]">
                                Earnings
                            </p>
                            <p className="heading-XS text-primary-dark2">
                                Sales
                            </p>
                        </div>
                        <div className="chart-otr relative z-10 pt-[20px] pb-[1px] border-l-[1px] border-primary-dark2 w-[100%]">
                            <BartextChart2 type={1} value={"80"} text={"380"} />
                            <BartextChart2 type={2} value={"100"} text={"30B"} />
                        </div>
                    </div>
                    <p className="heading-MB text-primary-default mb-[40px]">
                        How AAPL compre to sector?
                    </p>
                    <div className="drop-chart-otr relative overflow-hidden">
                        <div className="drop-inr flex items-center justify-end">
                            <Dropdown
                                placement="bottomRight"
                                overlay={
                                    <div>
                                        {links?.map(({ title, link }) => (
                                            <div
                                                className="bg-white first:rounded-t-[8px] last:rounded-b-[8px] min-w-[204px] min-h-[45px] flex items-center shadow-Shadow1 hover:bg-primary-default hover:text-white transition-all cursor-pointer border-[1px]"
                                                key={title}
                                            >
                                                <span className="ml-[16px]">{title}</span>
                                            </div>
                                        ))}
                                    </div>
                                }
                                trigger={['click']}
                            >
                                <div className="cursor-pointer flex items-center gap-[8px] pt-[6px] pr-[8px] pb-[8px] pl-[8px] border-[1px] border-border-shade1 rounded-8">
                                    <p className="heading-XS text-primary-dark2">
                                        Price to sales
                                    </p>
                                    <Image className="object-contain" src="/svg/arrow-down.svg" alt="menu" width="20px" height="20px" />
                                </div>
                            </Dropdown>
                        </div>

                        <div className="content-otr text-center mr-[40px] mb-[16px]">
                            <p className="heading-MB text-primary-dark">
                                APPL
                            </p>
                            <p className="heading-MB text-primary-dark2">
                                25x
                            </p>
                        </div>
                        <div className="dropdown-chart-otr relative pt-[8px] pb-[8px] border-l-[1px] border-primary-dark2">
                            <div className="line-dash absolute h-[100%]"></div>
                            <div className="drop-chart-inr relative z-10">
                                <BartextChart value={"50"} text={"Meta 34x"} color={"red"} />
                                <BartextChart value={"70"} text={"Meta 34x"} color={"secondary-blue"} />
                                <BartextChart value={"60"} text={"Meta 34x"} color={"tertiary-yellow"} />
                                <BartextChart value={"55"} text={"Meta 34x"} color={"state-success"} />
                                <BartextChart value={"80"} text={"Meta 34x"} color={"primary-blue"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}