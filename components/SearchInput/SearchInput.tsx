import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
interface SearchProps {
  handleChange: any;
  filteredData: any;
  setFilteredData: any;
}

export const SearchInput: FC<SearchProps> = ({
  handleChange,
  filteredData,
  setFilteredData
}) => {
  const router = useRouter();
  return (
    <>
      <form className="w-[100%] flex">
        <div className="flex search-icon absolute left-[16px] top-[50%] translate-y-[-50%] lg:w-[20px] lg:h-[20px]">
          <Image
            className="object-contain"
            width="20px"
            height="20px"
            src="/svg/search-icon.svg"
            alt="logo"
          />
        </div>
        <input
          onChange={(e) => handleChange(e.target.value)}
          className="search-input heading-S py-[10px] pl-[48px] pr-[16px] w-[100%] bg-grey-shade1 rounded-8 lg:pt-[10px] lg:pr-[16px] lg:pb-[10px] lg:pl-[48px]"
          type="search"
          name="search"
          placeholder="Search  Company Status"
        />
      </form>
      {filteredData.data.length !== 0 && (
        <div className="drop-down-otr search-result absolute top-[52px] w-[100%] max-h-[400px] overflow-y-auto overflow-x-hidden left-0 z-[999] shadow-Shadow2">
          <ul className="drop-down-ul w-[100%] bg-white border-[1px] border-border-shade1 rounded-8 overflow-hidden">
            {filteredData?.data?.map((data: any, index: number) => {
              return (
                <li
                  onClick={() => {
                    router.push(`/${data.symbol}?exchangeName=${data.exchangeShortName}`)
                    setFilteredData({
                      ...filteredData,
                      data: []
                    })
                  }}
                  key={index}
                  className="drop-down-li text-left w-[100%] flex border-b-[1px] border-b-border-shade1"
                >
                  <a
                    href="#"
                    className="drop-down-a heading-S p-[16px] text-primary-dark w-[100%] bg-white flex items-center gap-[24px] hover:bg-primary-default hover:text-white"
                  >
                    <span className="heading-SB text-primary-dark min-w-[52px]">
                      {data.symbol}
                    </span>{" "}
                    <span className="heading-SB text-primary-dark2 flex-1">
                      {data.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
