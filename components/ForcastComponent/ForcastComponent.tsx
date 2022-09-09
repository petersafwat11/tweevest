import React from "react";
import Image from 'next/image';

export const ForcastComponent = () => {
    return (
        <>
            <div className="ForcastComponent-box-otr">
                <div className="ForcastComponent-box-inr px-[32px] pt-[32px] pb-[40px]">
                    <div className="chart-heading-otr">
                        <p className="heading-SB text-dark flex items-center">
                            Relative Strengh
                            <span className="ml-[8px] flex">
                                <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                            </span>
                        </p>
                        <div className="static-boxes-otr flex items-center flex-wrap gap-[7px] mt-[16px]">
                            <div className="static-box w-[32%]">
                                <div className="heading-otr mb-[8px] flex items-end">
                                    <h3 className="heading-h3 text-dark">
                                        34B
                                    </h3>
                                    <a href='' className='heading-S flex items-center text-green'>
                                        <span className='flex'>
                                            <Image className="object-cover" width="16px" height="16px" src="/svg/arrow-right-up.svg" alt="Shape" />
                                        </span>
                                        15%
                                    </a>
                                </div>
                                <p className="heading-XS text-dark2">
                                    2023-Revenue
                                </p>
                            </div>
                            <div className="static-box w-[32%]">
                                <div className="heading-otr mb-[8px] flex items-end">
                                    <h3 className="heading-h3 text-dark">
                                        $1.2
                                    </h3>
                                    <a href='' className='heading-S flex items-center text-green'>
                                        <span className='flex'>
                                            <Image className="object-cover" width="16px" height="16px" src="/svg/arrow-right-up.svg" alt="Shape" />
                                        </span>
                                        15%
                                    </a>
                                </div>
                                <p className="heading-XS text-dark2">
                                    2023-EPS
                                </p>
                            </div>
                            <div className="static-box w-[31%]">
                                <div className="heading-otr mb-[8px] flex items-end">
                                    <h3 className="heading-h3 text-dark">
                                        650M
                                    </h3>
                                    <a href='' className='heading-S flex items-center text-green'>
                                        <span className='flex'>
                                            <Image className="object-cover" width="16px" height="16px" src="/svg/arrow-right-up.svg" alt="Shape" />
                                        </span>
                                        15%
                                    </a>
                                </div>
                                <p className="heading-XS text-dark2">
                                    2023-EBIT
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="analyst-rating-otr my-[32px]">
                        <p className="heading-SB text-dark">
                            Analyst rating
                        </p>
                        <div className="chart-circle-otr relative flex items-center justify-center flex-col">
                            <div className="circle-img-otr flex justify-center mt-[40px] mb-[18px] relative mx-[42px]">
                                <div className="circle-text-otr absolute w-[100%] h-[100%]">
                                    <p className="circle-text1 heading-XXS text-dark2 w-[42px] absolute left-[-45px] bottom-[16px]">
                                        Strong Sell
                                    </p>
                                    <p className="circle-text1 heading-XXS text-dark2 w-[42px] absolute left-[0px] bottom-[90px]">
                                        Sell
                                    </p>
                                    <p className="circle-text1 heading-XXS text-dark2 text-right w-[42px] absolute right-[0px] bottom-[90px]">
                                        Buy
                                    </p>
                                    <p className="circle-text1 heading-XXS text-dark2 text-center w-[42px] absolute left-[40%] top-[-20px]">
                                        Netural
                                    </p>
                                    <p className="circle-text1 heading-XXS text-dark2 text-right w-[42px] absolute right-[-45px] bottom-[16px]">
                                        Strong Buy
                                    </p>
                                </div>
                                <Image className="object-contain" width="230px" height="130px" src="/chart-circle.svg" alt="Shape" />
                                <div className="circle-line absolute left-[48%] bottom-0 flex flex-col items-center justify-end h-[100%]">
                                    <div className="line h-[60%] w-[4px] bg-dark rounded-[60px] mb-[8px]"></div>
                                    <div className="circle w-[12px] h-[12px] border-[3px] border-dark rounded-[100%]"></div>
                                </div>
                            </div>
                            <p className="neutral-text heading-LB text-dark text-center">
                                Netural
                            </p>
                        </div>
                    </div>
                    <div className="year-price-text-otr mb-[32px]">
                        <div className="year-price-text-inr flex items-center justify-between mb-[4px]">
                            <p className="heading-S text-dark2">
                                1 Year Price Target
                            </p>
                            <p className="heading-S text-dark2 flex items-center">
                                25.48
                                <span className="text-green ml-[10px]">
                                    (12.99%)
                                </span>
                            </p>
                        </div>
                        <div className="year-price-text-inr flex items-center justify-between">
                            <p className="heading-S text-dark2">
                                Number of analyst
                            </p>
                            <p className="heading-S text-dark2 flex items-center">
                                15
                                <span className="text-green ml-[10px]">
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="table-otr">
                        <p className="heading-SB text-dark">
                            Last analyst upgrade/downgrade
                        </p>
                        <table className="table-main w-[100%] mt-[24px]">
                            <thead>
                                <th scope="col" className="w-[100px]">
                                    <div className="head-text-otr">
                                        <p className="heading-XSB head-text text-dark text-left" title="Symbol">

                                        </p>
                                    </div>
                                </th>
                                <th scope="col">
                                    <div className="head-text-otr">
                                        <p className="heading-XSB head-text text-dark text-left" title="Company">

                                        </p>
                                    </div>
                                </th>
                                <th scope="col" className="w-[50px]">
                                    <div className="head-text-otr">
                                        <p className="heading-XSB head-text text-dark text-left" title="RS">

                                        </p>
                                    </div>
                                </th>
                                <th scope="col" className="w-[70px]">
                                    <div className="head-text-otr">
                                        <p className="heading-XSB head-text text-dark text-center" title="5-Day Perf.">

                                        </p>
                                    </div>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="22-01-2022">
                                                22-01-2022
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Barclays">
                                                Barclays
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Buy">
                                                Buy
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-center" title="$156">
                                                $156
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-[#F8F8F8]">
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="22-01-2022">
                                                22-01-2022
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Barclays">
                                                Barclays
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Buy">
                                                Buy
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-center" title="$156">
                                                $156
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="22-01-2022">
                                                22-01-2022
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Barclays">
                                                Barclays
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Buy">
                                                Buy
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-center" title="$156">
                                                $156
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-[#F8F8F8]">
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="22-01-2022">
                                                22-01-2022
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Barclays">
                                                Barclays
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-left" title="Buy">
                                                Buy
                                            </p>
                                        </div>
                                    </td>
                                    <td scope="col">
                                        <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                                            <p className="heading-XS text-dark2 body-text text-center" title="$156">
                                                $156
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}