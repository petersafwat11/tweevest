import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import {
  selectAPI10Data,
  selectAPI15Data,
  selectAPI2Data,
  selectAPI4Data,
  selectAPI6Data,
} from "../../store/stockSlice";
import moment from "moment";

export const SliderComponent = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const API2Data = useSelector(selectAPI2Data);
  const API4Data = useSelector(selectAPI4Data);
  const API6Data = useSelector(selectAPI6Data);
  const API10Data = useSelector(selectAPI10Data);
  const API15Data = useSelector(selectAPI15Data);

  var moment = require("moment-timezone");
  var current_time_est = moment().tz("EST").format("hh:mm:ss a");
  console.log(" ", current_time_est);
  console.log("API2Data :", API2Data);
  console.log("API15Data :", API15Data);

  var startTime: any;
  var endTime: any;
  startTime = 4 * 3600;
  endTime = 9 * 3600;
  var curr: any;
  curr = Number(current_time_est.toString().split(":")[0]) * 3600;
  console.log("ccccc: ");
  // var now = moment();
  console.log(startTime, curr, endTime);
  console.log(
    "ttt : ",
    current_time_est.toString().split(" ")[1] === "am"
      ? startTime >= curr && curr <= endTime
      : false
  );
  const [performanceList, setPerformanceList] = useState([
    "5D",
    "1M",
    "3M",
    "6M",
    "ytd",
    "1Y",
  ]);
  const [textColor, setTextColor] = useState(
    Number(API2Data.changesPercentage) < 0 ? "red" : "green"
  );
  const MarketClosedDate = moment
    .unix(API2Data.timestamp)
    .format("dddd, MMMM Do YYYY, h:mm:ss a");
  console.log("API15Data.timestamp : ", API15Data.timestamp);
  const PreMarketClosedDate = moment
    .unix(API15Data.timestamp)
    .format("dddd, MMMM Do YYYY, h:mm:ss a");

  console.log("API2Data: ", API2Data);
  // console.log("API6Data: ", API6Data);
  //   console.log("API10Data: ", API10Data);
  return (
    <div className="bg-white px-[32px] pt-[32px] pb-[40px]">
      <div className="heading-icon-otr flex items-center gap-[18px] pb-[12px] border-b-[1px] border-b-border-shade1">
        <div className="apple-img-otr flex">
          <Image
            className="object-contain"
            width="80px"
            height="80px"
            src={API4Data?.image}
            alt="Shape"
            loader={() => API4Data?.image}
          />
        </div>
        <div className="apple-content-otr">
          <h3 className="heading heading-h3 text-primary-dark mb-[8px]">
            {API2Data.name}
          </h3>
          <div className="country-text-otr flex items-end gap-[12px]">
            <p className="country-text heading-S text-primary-dark2">
              {API2Data.symbol}
            </p>
            <p className="country-text heading-S flex items-center text-primary-dark2">
              <span className="img-otr flex mr-[6px]">
                <Image
                  className="object-contain"
                  width="16px"
                  height="12px"
                  src="/america-icon.png"
                  alt="Shape"
                />
              </span>
              {API2Data.exchange}
            </p>
          </div>
        </div>
      </div>
      <div className="usd-price-otr pt-[12px]">
        <div className="heading-otr flex items-end gap-[16px] mb-[8px]">
          <h3 className="heading heading-h3 text-primary-dark">
            {Number(API2Data.price).toFixed(2)}
            <span className="heading-S ml-[4px]">USD</span>
          </h3>
          <a href="" className="heading-S flex items-center text-red-default">
            <span className="flex"></span>
            {Number(API2Data.changesPercentage) < 0 && (
              <Image
                className="object-cover"
                width="16px"
                height="16px"
                src="/svg/arrow-left-down.svg"
                alt="Shape"
              />
            )}
            {Number(API2Data.changesPercentage) > 0 && (
              <Image
                className="object-cover"
                width="16px"
                height="16px"
                src="/svg/arrow-right-up.svg"
                alt="Shape"
              />
            )}
            <span style={{ color: textColor }}>
              {Number(API2Data.change).toFixed(2)}{" "}
            </span>
            &nbsp;
            <span style={{ color: textColor }}>
              ({Number(API2Data.changesPercentage).toFixed(2)}%)
            </span>
          </a>
        </div>
        <p className="heading-S text-primary-dark">
          Market {API10Data.marketStatus} (as {MarketClosedDate} EDT)
        </p>

        {current_time_est.toString().split(" ")[1] === "pm" ? (
          startTime >= curr && curr <= endTime ? (
            <>
              {" "}
              <div className="heading-otr flex items-end gap-[10px] my-[4px]">
                <h3 className="heading heading-h3 text-primary-dark">
                  {Number(API15Data.bid).toFixed(2)}
                  <span className="heading-S ml-[4px]">USD</span>
                </h3>
                <a
                  href=""
                  className="heading-S flex items-center text-red-default"
                >
                  <span className="flex"></span>
                  {Number(API10Data.changesPercentage) < 0 && (
                    <Image
                      className="object-cover"
                      width="16px"
                      height="16px"
                      src="/svg/arrow-left-down.svg"
                      alt="Shape"
                    />
                  )}
                  {Number(API10Data.changesPercentage) > 0 && (
                    <Image
                      className="object-cover"
                      width="16px"
                      height="16px"
                      src="/svg/arrow-right-up.svg"
                      alt="Shape"
                    />
                  )}
                  <span style={{ color: textColor }}>
                    {Number(API15Data.change).toFixed(2)}{" "}
                  </span>
                  &nbsp;
                  <span style={{ color: textColor }}>
                    ({Number(API15Data.changesPercentage).toFixed(2)}%)
                  </span>
                </a>
              </div>
              <p className="heading-XS text-primary-dark">
                Pre-Market: {PreMarketClosedDate} EDT
              </p>
            </>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>

      <div className="performance-otr py-[40px] border-b-[1px] border-b-border-shade1">
        <p className="Performance-heading heading-SB text-primary-dark mb-[16px]">
          Performance
        </p>

        <div className="performance-box-otr flex flex-wrap gap-[12px]">
          {performanceList?.map((element) => {
            {
              return Number(API6Data[element]) > 0 ? (
                <div className="performance-box bg-green-light p-[8px] rounded-8 w-[30.5%] 2xl:w-[30%]">
                  <p className="performance-box-text heading-SB text-green-default text-center mb-[4px]">
                    {API6Data[element]?.toFixed(2)}%
                  </p>
                  <p className="heading-XXS text-primary-dark2 text-center">
                    {element}
                  </p>
                </div>
              ) : (
                <div className="performance-box bg-red-light p-[8px] rounded-8 w-[30.5%] 2xl:w-[30%]">
                  <p className="performance-box-text heading-SB text-red-default text-center mb-[4px]">
                    {API6Data[element]?.toFixed(2)}%
                  </p>
                  <p className="heading-XXS text-primary-dark2 text-center">
                    {element}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Carousel afterChange={onChange} autoplay>
        <div>
          <div className="Slide-box-otr">
            <div className="Slide-box-inr">
              <div className="stock-otr py-[40px]">
                <p className="stock-heading heading-SB text-primary-dark flex items-center mb-[16px]">
                  Stock infos
                  <span className="ml-[8px] flex">
                    <Image
                      className="object-contain"
                      width="16px"
                      height="16px"
                      src="/svg/info-circle.svg"
                      alt="Shape"
                    />
                  </span>
                </p>
                <ul className="stock-ul">
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Market Cap
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">1.8T</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Shares outstanding
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">365M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Share in Float
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">450M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Price Target
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">$190</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Slide-box-otr">
            <div className="Slide-box-inr">
              <div className="stock-otr py-[40px]">
                <p className="stock-heading heading-SB text-primary-dark flex items-center mb-[16px]">
                  Stock infos
                  <span className="ml-[8px] flex">
                    <Image
                      className="object-contain"
                      width="16px"
                      height="16px"
                      src="/svg/info-circle.svg"
                      alt="Shape"
                    />
                  </span>
                </p>
                <ul className="stock-ul">
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Market Cap
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">1.8T</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Shares outstanding
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">365M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Share in Float
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">450M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Price Target
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">$190</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Slide-box-otr">
            <div className="Slide-box-inr">
              <div className="stock-otr py-[40px]">
                <p className="stock-heading heading-SB text-primary-dark flex items-center mb-[16px]">
                  Stock infos
                  <span className="ml-[8px] flex">
                    <Image
                      className="object-contain"
                      width="16px"
                      height="16px"
                      src="/svg/info-circle.svg"
                      alt="Shape"
                    />
                  </span>
                </p>
                <ul className="stock-ul">
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Market Cap
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">1.8T</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Shares outstanding
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">365M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Share in Float
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">450M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Price Target
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">$190</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Slide-box-otr">
            <div className="Slide-box-inr">
              <div className="stock-otr py-[40px]">
                <p className="stock-heading heading-SB text-primary-dark flex items-center mb-[16px]">
                  Stock infos
                  <span className="ml-[8px] flex">
                    <Image
                      className="object-contain"
                      width="16px"
                      height="16px"
                      src="/svg/info-circle.svg"
                      alt="Shape"
                    />
                  </span>
                </p>
                <ul className="stock-ul">
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Market Cap
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">1.8T</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Shares outstanding
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">365M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Share in Float
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">450M</p>
                  </li>
                  <li className="stock-li flex items-center justify-between">
                    <p className="stock-p heading-S text-primary-dark2">
                      Price Target
                    </p>
                    <p className="stock-p heading-S text-primary-dark2">$190</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
