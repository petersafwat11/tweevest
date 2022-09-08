import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Image from 'next/image';


const SliderComponent = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay>
            <div>
                <div className="Slide-box-otr">
                    <div className="Slide-box-inr bg-white border-[1px] border-border px-[32px] pt-[32px] pb-[40px] rounded-16">
                        <div className="heading-icon-otr flex items-center gap-[18px] pb-[12px] border-b-[1px] border-b-border">
                            <div className="apple-img-otr flex">
                                <Image className="object-contain" width="80px" height="80px" src="/apple-icon.png" alt="Shape" />
                            </div>
                            <div className="apple-content-otr">
                                <h3 className='heading heading-h3 text-dark'>
                                    Apple Inc.
                                </h3>
                                <div className='country-text-otr flex items-end gap-[12px]'>
                                    <p className='country-text heading-S text-dark2'>
                                        APPL
                                    </p>
                                    <p className='country-text heading-S flex items-center text-dark2'>
                                        <span className='img-otr flex mr-[6px]'>
                                            <Image className="object-contain" width="16px" height="12px" src="/america-icon.png" alt="Shape" />
                                        </span>
                                        NASDAQ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="usd-price-otr pt-[12px]">
                            <div className="heading-otr flex items-center gap-[16px]">
                                <h3 className='heading heading-h3 text-dark'>
                                    152.95
                                    <span className='heading-S'>
                                        USD
                                    </span>
                                </h3>
                                <a href='' className='heading-S flex items-center text-red'>
                                    <span className='flex'>
                                        <Image className="object-cover" width="16px" height="16px" src="/svg/arrow-left-down.svg" alt="Shape" />
                                    </span>
                                    1.14 (0.74%)
                                </a>
                            </div>
                            <p className='heading-S text-dark'>
                                Market Closed (as of Jul 25, 19:59 EDT)
                            </p>
                        </div>
                        <div className="performance-otr py-[40px] border-b-[1px] border-b-border">
                            <p className='Performance-heading heading-SB text-dark'>
                                Performance
                            </p>
                            <div className="performance-box-otr flex flex-wrap gap-[12px]">
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-redlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-red text-center'>
                                        -4.73%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="stock-otr py-[40px]">
                            <p className="stock-heading heading-SB text-dark flex items-center">
                                Stock infos
                                <span className="ml-[8px] flex">
                                    <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                </span>
                            </p>
                            <ul className='stock-ul'>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Market Cap
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        1.8T
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Shares outstanding
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        365M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Share in Float
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        450M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Price Target
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        $190
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="Slide-box-otr">
                    <div className="Slide-box-inr bg-white border-[1px] border-border px-[32px] pt-[32px] pb-[40px] rounded-16">
                        <div className="heading-icon-otr flex items-center gap-[18px] pb-[12px] border-b-[1px] border-b-border">
                            <div className="apple-img-otr flex">
                                <Image className="object-contain" width="80px" height="80px" src="/apple-icon.png" alt="Shape" />
                            </div>
                            <div className="apple-content-otr">
                                <h3 className='heading heading-h3 text-dark'>
                                    Apple Inc.
                                </h3>
                                <div className='country-text-otr flex items-end gap-[12px]'>
                                    <p className='country-text heading-S text-dark2'>
                                        APPL
                                    </p>
                                    <p className='country-text heading-S flex items-center text-dark2'>
                                        <span className='img-otr flex mr-[6px]'>
                                            <Image className="object-contain" width="16px" height="12px" src="/america-icon.png" alt="Shape" />
                                        </span>
                                        NASDAQ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="usd-price-otr pt-[12px]">
                            <div className="heading-otr flex items-center gap-[16px]">
                                <h3 className='heading heading-h3 text-dark'>
                                    152.95
                                    <span className='heading-S'>
                                        USD
                                    </span>
                                </h3>
                                <a href='' className='heading-S flex items-center text-red'>
                                    <span className='flex'>
                                        <Image className="object-cover" width="16px" height="16px" src="/svg/arrow-left-down.svg" alt="Shape" />
                                    </span>
                                    1.14 (0.74%)
                                </a>
                            </div>
                            <p className='heading-S text-dark'>
                                Market Closed (as of Jul 25, 19:59 EDT)
                            </p>
                        </div>
                        <div className="performance-otr py-[40px] border-b-[1px] border-b-border">
                            <p className='Performance-heading heading-SB text-dark'>
                                Performance
                            </p>
                            <div className="performance-box-otr flex flex-wrap gap-[12px]">
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-redlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-red text-center'>
                                        -4.73%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="stock-otr py-[40px]">
                            <p className="stock-heading heading-SB text-dark flex items-center">
                                Stock infos
                                <span className="ml-[8px] flex">
                                    <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                </span>
                            </p>
                            <ul className='stock-ul'>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Market Cap
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        1.8T
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Shares outstanding
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        365M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Share in Float
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        450M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Price Target
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        $190
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="Slide-box-otr">
                    <div className="Slide-box-inr bg-white border-[1px] border-border px-[32px] pt-[32px] pb-[40px] rounded-16">
                        <div className="heading-icon-otr flex items-center gap-[18px] pb-[12px] border-b-[1px] border-b-border">
                            <div className="apple-img-otr flex">
                                <Image className="object-contain" width="80px" height="80px" src="/apple-icon.png" alt="Shape" />
                            </div>
                            <div className="apple-content-otr">
                                <h3 className='heading heading-h3 text-dark'>
                                    Apple Inc.
                                </h3>
                                <div className='country-text-otr flex items-end gap-[12px]'>
                                    <p className='country-text heading-S text-dark2'>
                                        APPL
                                    </p>
                                    <p className='country-text heading-S flex items-center text-dark2'>
                                        <span className='img-otr flex mr-[6px]'>
                                            <Image className="object-contain" width="16px" height="12px" src="/america-icon.png" alt="Shape" />
                                        </span>
                                        NASDAQ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="usd-price-otr pt-[12px]">
                            <div className="heading-otr flex items-center gap-[16px]">
                                <h3 className='heading heading-h3 text-dark'>
                                    152.95
                                    <span className='heading-S'>
                                        USD
                                    </span>
                                </h3>
                                <a href='' className='heading-S flex items-center text-red'>
                                    <span className='flex'>
                                        <Image className="object-cover" width="16px" height="16px" src="/svg/arrow-left-down.svg" alt="Shape" />
                                    </span>
                                    1.14 (0.74%)
                                </a>
                            </div>
                            <p className='heading-S text-dark'>
                                Market Closed (as of Jul 25, 19:59 EDT)
                            </p>
                        </div>
                        <div className="performance-otr py-[40px] border-b-[1px] border-b-border">
                            <p className='Performance-heading heading-SB text-dark'>
                                Performance
                            </p>
                            <div className="performance-box-otr flex flex-wrap gap-[12px]">
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-redlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-red text-center'>
                                        -4.73%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="stock-otr py-[40px]">
                            <p className="stock-heading heading-SB text-dark flex items-center">
                                Stock infos
                                <span className="ml-[8px] flex">
                                    <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                </span>
                            </p>
                            <ul className='stock-ul'>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Market Cap
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        1.8T
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Shares outstanding
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        365M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Share in Float
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        450M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Price Target
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        $190
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="Slide-box-otr">
                    <div className="Slide-box-inr bg-white border-[1px] border-border px-[32px] pt-[32px] pb-[40px] rounded-16">
                        <div className="heading-icon-otr flex items-center gap-[18px] pb-[12px] border-b-[1px] border-b-border">
                            <div className="apple-img-otr flex">
                                <Image className="object-contain" width="80px" height="80px" src="/apple-icon.png" alt="Shape" />
                            </div>
                            <div className="apple-content-otr">
                                <h3 className='heading heading-h3 text-dark'>
                                    Apple Inc.
                                </h3>
                                <div className='country-text-otr flex items-end gap-[12px]'>
                                    <p className='country-text heading-S text-dark2'>
                                        APPL
                                    </p>
                                    <p className='country-text heading-S flex items-center text-dark2'>
                                        <span className='img-otr flex mr-[6px]'>
                                            <Image className="object-contain" width="16px" height="12px" src="/america-icon.png" alt="Shape" />
                                        </span>
                                        NASDAQ
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="usd-price-otr pt-[12px]">
                            <div className="heading-otr flex items-center gap-[16px]">
                                <h3 className='heading heading-h3 text-dark'>
                                    152.95
                                    <span className='heading-S'>
                                        USD
                                    </span>
                                </h3>
                                <a href='' className='heading-S flex items-center text-red'>
                                    <span className='flex'>
                                        <Image className="object-cover" width="16px" height="16px" src="/svg/arrow-left-down.svg" alt="Shape" />
                                    </span>
                                    1.14 (0.74%)
                                </a>
                            </div>
                            <p className='heading-S text-dark'>
                                Market Closed (as of Jul 25, 19:59 EDT)
                            </p>
                        </div>
                        <div className="performance-otr py-[40px] border-b-[1px] border-b-border">
                            <p className='Performance-heading heading-SB text-dark'>
                                Performance
                            </p>
                            <div className="performance-box-otr flex flex-wrap gap-[12px]">
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-greenlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-green text-center'>
                                        0.11%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                                <div className="performance-box bg-redlight p-[8px] rounded-8 w-[31%]">
                                    <p className='performance-box-text heading-SB text-red text-center'>
                                        -4.73%
                                    </p>
                                    <p className='heading-XXS text-dark2 text-center'>
                                        1 W
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="stock-otr py-[40px]">
                            <p className="stock-heading heading-SB text-dark flex items-center">
                                Stock infos
                                <span className="ml-[8px] flex">
                                    <Image className="object-contain" width="16px" height="16px" src="/svg/info-circle.svg" alt="Shape" />
                                </span>
                            </p>
                            <ul className='stock-ul'>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Market Cap
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        1.8T
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Shares outstanding
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        365M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Share in Float
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        450M
                                    </p>
                                </li>
                                <li className='stock-li flex items-center justify-between'>
                                    <p className='stock-p heading-S text-dark2'>
                                        Price Target
                                    </p>
                                    <p className='stock-p heading-S text-dark2'>
                                        $190
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default SliderComponent;