import React from "react";
import Image from 'next/image';


export const SearchInput = () => {
    return (
        <>
            <form className="w-[100%] flex">
                <div className="flex search-icon absolute left-[16px] top-[50%] translate-y-[-50%] lg:w-[20px] lg:h-[20px]">
                    <Image className="object-contain" width="20px" height="20px" src="/svg/search-icon.svg" alt="logo" />
                </div>
                <input className="search-input heading-S py-[10px] pl-[48px] pr-[16px] w-[100%] bg-grey-shade1 rounded-8 lg:pt-[10px] lg:pr-[16px] lg:pb-[10px] lg:pl-[48px]" type="search" name="search" placeholder="Search  Company Status" />
            </form>
        </>
    )
}