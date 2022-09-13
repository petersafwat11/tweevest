import React from "react";
import Image from 'next/image';


export const SearchInput = () => {
    return (
        <>
            <form className="w-[100%] flex">
                <div className="flex search-icon absolute left-[16px] top-[50%] translate-y-[-50%] lg:w-[20px] lg:h-[20px]">
                    <Image className="object-contain" width="24px" height="24px" src="/svg/search-icon.svg" alt="logo" />
                </div>
                <input className="search-input heading-S py-[16px] pl-[56px] pr-[16px] w-[100%] bg-grey-shade1 rounded-8 lg:pt-[12px] lg:pr-[16px] lg:pb-[12px] lg:pl-[48px]" type="search" name="search" placeholder="Search  Company Status" />
            </form>
        </>
    )
}