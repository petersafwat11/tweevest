import React from "react";
import Image from 'next/image';
import { Chart2 } from "..";
import { Chart4 } from "..";
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
                        <p className="heading-SB text-dark flex items-center">
                            Relative Strengh
                            <span className="ml-[8px] flex">
                                <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                            </span>
                        </p>
                        <div className="static-boxes-otr flex items-center flex-wrap gap-[7px] mt-[10px] mb-[40px]">
                            <div className="static-box w-[31%]">
                                <h3 className="heading-h3 text-dark">
                                    45x
                                </h3>
                                <p className="heading-XS text-dark2">
                                    P/E Ratio
                                </p>
                            </div>
                            <div className="static-box w-[31%]">
                                <h3 className="heading-h3 text-dark">
                                    25x
                                </h3>
                                <p className="heading-XS text-dark2">
                                    P/S Ratio
                                </p>
                            </div>
                            <div className="static-box w-[31%]">
                                <h3 className="heading-h3 text-dark">
                                    4x
                                </h3>
                                <p className="heading-XS text-dark2">
                                    P/Book Ratio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="earning-revenue-otr mb-[40px]">
                        <div className="chart-otr">
                            <Chart2 />
                        </div>
                        <p className="heading-MB text-primary">
                            How AAPL compre to sector?
                        </p>
                    </div>
                    <div className="drop-chart-otr relative overflow-hidden">
                        <div className="drop-inr flex items-center justify-end">
                            <Dropdown
                                placement="bottomRight"
                                overlay={
                                    <div>
                                        {links?.map(({ title, link }) => (
                                            <div
                                                className="bg-white first:rounded-t-[8px] last:rounded-b-[8px] min-w-[204px] min-h-[45px] flex items-center shadow-Shadow1 hover:bg-primary hover:text-white transition-all cursor-pointer"
                                                key={title}
                                            >
                                                <span className="ml-[16px]">{title}</span>
                                            </div>
                                        ))}
                                    </div>
                                }
                                trigger={['click']}
                            >
                                <div className="cursor-pointer flex items-center gap-[8px] pt-[6px] pr-[8px] pb-[8px] pl-[8px] border-[1px] border-border rounded-8">
                                    <p className="heading-XS text-dark2">
                                        Price to sales
                                    </p>
                                    <Image className="object-contain" src="/svg/arrow-down.svg" alt="menu" width="20px" height="20px" />
                                </div>
                            </Dropdown>
                        </div>
                        <div className="line-dash absolute"></div>
                        <div className="content-otr text-center mr-[40px] mb-[16px]">
                            <p className="heading-MB text-dark">
                                APPL
                            </p>
                            <p className="heading-MB text-dark2">
                                25x
                            </p>
                        </div>
                        <div className="dropdown-chart-otr pt-[32px] border-l-[1px] border-dark2">
                            <div className="drop-chart-inr ml-[-60px]">
                                <Chart4 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}