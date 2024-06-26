import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import {
  selectAPI11Data,
  selectAPI12Data,
  selectAPI13Data,
  selectAPI17Data,
  selectAPI2Data,
} from "../../store/stockSlice";
import moment from "moment";

export const ForcastComponent = () => {
  const API2Data = useSelector(selectAPI2Data);
  const API11Data = useSelector(selectAPI11Data);
  const API12Data = useSelector(selectAPI12Data);
  const API13Data = useSelector(selectAPI13Data);
  const API17Data = useSelector(selectAPI17Data);
  function convertToInternationalCurrencySystem(labelValue: any) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  }
  const rotate_degree: any = {
    "Strong Sell": -70,
    Sell: -45,
    Neutral: 0,
    Buy: 60,
    "Strong Buy": 70,
  };
  console.log("API11Data: ", API11Data);
  // console.log("API12Data: ", API12Data);
  console.log("API17Data: check ", API17Data);
  const [upDownData, setUpDownData] = useState(API13Data);
  console.log(
    "  rotate_degree[API11Data.consensus]:",
    rotate_degree[API11Data.consensus]
  );
  return (
    <>
      <div className="ForcastComponent-box-otr">
        <div className="ForcastComponent-box-inr px-[32px] pt-[32px] pb-[40px]">
          <div className="chart-heading-otr">
            <p className="heading-SB text-primary-dark flex items-center">
              Forecast
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
            <div className="static-boxes-otr flex flex-wrap justify-between gap-[4px] 2xl:gap-[8px] mt-[16px]">
              <div className="static-box w-[32%] 2xl:w-[48%]">
                <div className="heading-otr flex-wrap mb-[8px] flex items-end">
                  <h3 className="heading-h3 line-clamp-1 break-all text-primary-dark 4xl:text-[18px] 4xl:leading-[24px]">
                    $
                    {convertToInternationalCurrencySystem(
                      API17Data.estimatedRevenue
                    )}
                  </h3>
                  <a
                    href=""
                    className="heading-S flex items-center text-green-default"
                  >
                    <span className="flex w-[16px] h-[16px]">
                      {Number(API17Data.estimatedRevenueChangePercent) < 0 && (
                        <Image
                          className="object-cover"
                          width="16px"
                          height="16px"
                          src="/svg/arrow-left-down.svg"
                          alt="Shape"
                        />
                      )}
                      {Number(API17Data.estimatedRevenueChangePercent) > 0 && (
                        <Image
                          className="object-cover"
                          width="16px"
                          height="16px"
                          src="/svg/arrow-right-up.svg"
                          alt="Shape"
                        />
                      )}
                    </span>
                    <span className="4xl:text-[13px] 4xl:leading-[20px] flex-1">
                      {Number(API17Data.estimatedRevenueChangePercent) > 0 ? (
                        <span style={{ color: "green" }}>
                          {Number(
                            API17Data.estimatedRevenueChangePercent
                          ).toFixed(2)}
                          %
                        </span>
                      ) : (
                        <span style={{ color: "red" }}>
                          {Number(
                            API17Data.estimatedRevenueChangePercent
                          ).toFixed(2)}
                          %
                        </span>
                      )}
                    </span>
                  </a>
                </div>
                <p className="heading-XS text-primary-dark2 3xl:text-xs">
                  {API17Data ? API17Data?.date?.split("-")[0] : ""}-Revenue
                </p>
              </div>
              <div className="static-box w-[32%] 2xl:w-[48%]">
                <div className="heading-otr flex-wrap mb-[8px] flex items-end">
                  <h3 className="heading-h3 line-clamp-1 break-all text-primary-dark 4xl:text-[18px] 4xl:leading-[24px]">
                    $
                    {convertToInternationalCurrencySystem(
                      API17Data.estimatedEps
                    )}
                  </h3>
                  <a
                    href=""
                    className="heading-S flex items-center text-green-default"
                  >
                    <span className="flex w-[16px] h-[16px]">
                      {Number(API17Data.estimatedEpsChangePercent) < 0 && (
                        <Image
                          className="object-cover"
                          width="16px"
                          height="16px"
                          src="/svg/arrow-left-down.svg"
                          alt="Shape"
                        />
                      )}
                      {Number(API17Data.estimatedEpsChangePercent) > 0 && (
                        <Image
                          className="object-cover"
                          width="16px"
                          height="16px"
                          src="/svg/arrow-right-up.svg"
                          alt="Shape"
                        />
                      )}
                    </span>
                    <span className="4xl:text-[13px] 4xl:leading-[20px] flex-1">
                      {/* {API17Data.estimatedEpsChangePercent}% */}
                      {Number(API17Data.estimatedEpsChangePercent) > 0 ? (
                        <span style={{ color: "green" }}>
                          {Number(API17Data.estimatedEpsChangePercent).toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        <span style={{ color: "red" }}>
                          {Number(API17Data.estimatedEpsChangePercent).toFixed(
                            2
                          )}
                          %
                        </span>
                      )}
                    </span>
                  </a>
                </div>
                <p className="heading-XS text-primary-dark2 3xl:text-xs">
                  {API17Data ? API17Data?.date?.split("-")[0] : ""}-EPS
                </p>
              </div>
              <div className="static-box w-[31%] 2xl:w-[48%]">
                <div className="heading-otr flex-wrap mb-[8px] flex items-end">
                  <h3 className="heading-h3 line-clamp-1 break-all text-primary-dark 4xl:text-[18px] 4xl:leading-[24px]" title="">
                    $
                    {convertToInternationalCurrencySystem(
                      API17Data.estimatedEbitda
                    )}
                  </h3>
                  <a
                    href=""
                    className="heading-S flex items-center text-green-default"
                  >
                    <span className="flex w-[16px] h-[16px]">
                      {Number(API17Data.estimatedEbitdaChangePercent) < 0 && (
                        <Image
                          className="object-cover"
                          width="16px"
                          height="16px"
                          src="/svg/arrow-left-down.svg"
                          alt="Shape"
                        />
                      )}
                      {Number(API17Data.estimatedEbitdaChangePercent) > 0 && (
                        <Image
                          className="object-cover"
                          width="16px"
                          height="16px"
                          src="/svg/arrow-right-up.svg"
                          alt="Shape"
                        />
                      )}
                    </span>
                    <span className="4xl:text-[13px] 4xl:leading-[20px] flex-1">
                      {/* {API17Data.estimatedEbitdaChangePercent}% */}
                      {Number(API17Data.estimatedEbitdaChangePercent) > 0 ? (
                        <span style={{ color: "green" }}>
                          {Number(
                            API17Data.estimatedEbitdaChangePercent
                          ).toFixed(2)}
                          %
                        </span>
                      ) : (
                        <span style={{ color: "red" }}>
                          {Number(
                            API17Data.estimatedEbitdaChangePercent
                          ).toFixed(2)}
                          %
                        </span>
                      )}
                    </span>
                  </a>
                </div>
                <p className="heading-XS text-primary-dark2 3xl:text-xs">
                  {API17Data ? API17Data?.date?.split("-")[0] : ""}-EBIT
                </p>
              </div>
            </div>
          </div>
          <div className="analyst-rating-otr my-[32px]">
            <p className="heading-SB text-primary-dark">Analyst rating</p>
            <div className="chart-circle-otr relative flex items-center justify-center flex-col">
              <div className="circle-img-otr flex justify-center mt-[40px] mb-[18px] relative mx-[42px]">
                <div className="circle-text-otr absolute w-[100%] h-[100%]">
                  <p className="circle-text1 heading-XXS text-primary-dark2 w-[42px] absolute left-[-45px] bottom-[16px]">
                    Strong Sell
                  </p>
                  <p className="circle-text1 heading-XXS text-primary-dark2 w-[42px] absolute left-[0px] bottom-[90px]">
                    Sell
                  </p>
                  <p className="circle-text1 heading-XXS text-primary-dark2 text-right w-[42px] absolute right-[0px] bottom-[90px]">
                    Buy
                  </p>
                  <p className="circle-text1 heading-XXS text-primary-dark2 text-center w-[42px] absolute left-[40%] top-[-20px]">
                    Netural
                  </p>
                  <p className="circle-text1 heading-XXS text-primary-dark2 text-right w-[42px] absolute right-[-45px] bottom-[16px]">
                    Strong Buy
                  </p>
                </div>
                <Image
                  className="object-contain"
                  width="230px"
                  height="130px"
                  src="/chart-circle.svg"
                  alt="Shape"
                />
                <div className="circle-line absolute left-[48%] bottom-0 flex flex-col items-center justify-end h-[100%]">
                  <div
                    className={`circle-line-inr flex flex-col-reverse items-center rotate-[${
                      rotate_degree[API11Data.consensus]
                    }deg]`}
                  >
                    <div className="circle w-[12px] h-[12px] border-[3px] border-primary-dark rounded-[100%]"></div>
                    <div className="line h-[60px] w-[4px] bg-primary-dark rounded-[60px] mb-[8px]"></div>
                  </div>
                </div>
              </div>
              <p className="neutral-text heading-LB text-primary-dark text-center">
                Netural
              </p>
            </div>
          </div>
          <div className="year-price-text-otr mb-[32px]">
            <div className="year-price-text-inr flex items-center justify-between mb-[4px]">
              <p className="heading-S text-primary-dark2">
                1 Year Price Target
              </p>
              <p className="heading-S text-primary-dark2 flex items-center">
                {Number(API12Data.target).toFixed(2)}
                <span className="text-green-default ml-[10px]">
                  (
                  {(
                    ((API12Data.target - API2Data.price) / API2Data.price) *
                    100
                  ).toFixed(2)}
                  % )
                </span>
              </p>
            </div>
            <div className="year-price-text-inr flex items-center justify-between">
              <p className="heading-S text-primary-dark2">Number of analyst</p>
              <p className="heading-S text-primary-dark2 flex items-center">
                {API12Data.numberOfAnalyst}
                <span className="text-green-default ml-[10px]"></span>
              </p>
            </div>
          </div>
          <div className="table-otr">
            <p className="heading-SB text-primary-dark">
              Last analyst upgrade/downgrade
            </p>
            <table className="table-main w-[100%] mt-[24px]">
              <thead>
                <th scope="col" className="w-[100px]">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="Symbol"
                    ></p>
                  </div>
                </th>
                <th scope="col">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="Company"
                    ></p>
                  </div>
                </th>
                <th scope="col" className="w-[50px]">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-left"
                      title="RS"
                    ></p>
                  </div>
                </th>
                <th scope="col" className="w-[70px]">
                  <div className="head-text-otr">
                    <p
                      className="heading-XSB head-text text-primary-dark text-center"
                      title="5-Day Perf."
                    ></p>
                  </div>
                </th>
              </thead>
              <tbody>
                {Object.keys(API13Data).length > 0 &&
                  API13Data?.map((element: any) => {
                    return (
                      <tr key={element.gradingCompany}>
                        <td scope="col" key={element}>
                          <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                            <p
                              className="heading-XS text-primary-dark2 body-text text-left"
                              title="22-01-2022"
                            >
                              {moment(element.publishedDate).format(
                                "DD-MM-YYYY"
                              )}
                              {}
                            </p>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                            <p
                              className="heading-XS text-primary-dark2 body-text text-left"
                              title="Barclays"
                            >
                              {element.gradingCompany}
                            </p>
                          </div>
                        </td>
                        <td scope="col">
                          <div className="body-text-otr pr-[8px] py-[10px] body-text-otr1">
                            <p
                              className="heading-XS text-primary-dark2 body-text text-left"
                              title="Buy"
                            >
                              {element.newGrade}
                            </p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
