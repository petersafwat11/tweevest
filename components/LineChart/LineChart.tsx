import React from "react";
import Image from 'next/image';
import { Chart1 } from "..";

export const LineChart = () => {
    return (
        <>
            <div className="LineChart-box-otr">
                <div className="LineChart-box-inr px-[32px] pt-[32px] pb-[40px]">
                    <div className="chart-text-otr mb-[32px]">
                        <div className="chart-heading-inr flex items-center justify-between gap-[12px]">
                            <p className="heading-SB text-dark flex items-center">
                                Relative Strengh
                                <span className="ml-[8px] flex">
                                    <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                </span>
                            </p>
                            <div className="stock-sector-otr flex items-center gap-[12px]">
                                <p className="heading-XXSB text-dark flex items-center">
                                    <span className="w-[24px] h-[8px] border-[1px] border-[#00C2FF] bg-[#00C2FF] rounded-[50px] mr-[6px]"></span>
                                    Stock
                                </p>
                                <p className="heading-XXSB text-dark flex items-center">
                                    <span className="w-[24px] h-[8px] border-[1px] border-[#FFC221] bg-[#FFC221] rounded-[50px] mr-[6px]"></span>
                                    Sector
                                </p>
                            </div>
                        </div>
                        <div className="chart-otr mt-[32px] mb-[8px]">
                            <Chart1 />
                        </div>
                        <p className="heading-XS text-dark2 text-center">
                            Showing graph for last 7 days.
                        </p>
                    </div>
                    <p className="heading-SB text-dark">
                        Top 5 RS in Group
                    </p>
                    <table className="table-main w-[100%] mb-[32px] mt-[24px]">
                        <thead>
                            <th scope="col" className="w-[90px]">
                                <div className="head-text-otr pr-[8px] py-[5px]">
                                    <p className="heading-XSB head-text text-dark text-left" title="Symbol">
                                        Symbol
                                    </p>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="head-text-otr pr-[8px] py-[5px]">
                                    <p className="heading-XSB head-text text-dark text-left" title="Company">
                                        Company
                                    </p>
                                </div>
                            </th>
                            <th scope="col" className="w-[50px]">
                                <div className="head-text-otr pr-[8px] py-[5px]">
                                    <p className="heading-XSB head-text text-dark text-left" title="RS">
                                        RS
                                    </p>
                                </div>
                            </th>
                            <th scope="col" className="w-[90px]">
                                <div className="head-text-otr pr-[8px] py-[5px]">
                                    <p className="heading-XSB head-text text-dark text-center" title="5-Day Perf.">
                                        5-Day Perf.
                                    </p>
                                </div>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="AMZN">
                                            AMZN
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="Amazon">
                                            Amazon
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="78">
                                            78
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-center" title="+15%">
                                            +15%
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8]">
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="AMZN">
                                            AMZN
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="Amazon">
                                            Amazon
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="60">
                                            60
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-center" title="+15%">
                                            +15%
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="AMZN">
                                            AMZN
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="Amazon">
                                            Amazon
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="60">
                                            60
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-center" title="+15%">
                                            +15%
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-[#F8F8F8]">
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="AMZN">
                                            AMZN
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="Amazon">
                                            Amazon
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="55">
                                            55
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-center" title="+15%">
                                            +15%
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="AMZN">
                                            AMZN
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="Amazon">
                                            Amazon
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-left" title="60">
                                            60
                                        </p>
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                        <p className="heading-XS text-dark2 body-text text-center" title="+15%">
                                            +15%
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="heading-MB text-primary">
                        What is RS and how to use it?
                    </p>
                </div>
            </div>
        </>
    )
}