import React from "react";
import Image from 'next/image';
import { SearchInput } from "..";


export const Header = () => {
    return (
        <header className="header-main flex items-center gap-[32px] justify-between px-[75px] py-[10px] xl:px-[15px] sm:gap-[20px] lg:flex-row-reverse sticky top-0 z-50 bg-white">
            <a href='' className='logo-otr flex items-center gap-[24px]'>
                <div className="burger-icon-otr hidden lg:flex cursor-pointer">
                    <Image className="object-contain" width="36px" height="36px" src="/menu-icon.svg" alt="menu-icon" />
                </div>
                <div className="logo-img sm:hidden md:flex">
                    <Image className="object-contain object-left" width="140px" height="38px" src="/brand-logo.png" alt="logo" />
                </div>
            </a>
            <div className="Search-otr relative flex w-[600px] lg:w-[100%] lg:flex-1">
                <SearchInput />
            </div>
            <div className="menu-action-otr flex items-center gap-[32px] 2xl:gap-[20px] lg:hidden">
                <ul className="menu-ul flex items-center gap-[32px] 2xl:gap-[20px]">
                    <li className="menu-li flex items-center gap-[8px]">
                        <a href="" className="menu-a heading-S text-primary-dark">
                            Screener
                        </a>
                        <p className="flex-none heading-XXS text-green-default bg-green-light rounded-16 pt-[4px] pb-[5px] px-[8px]">
                            Coming Soon
                        </p>
                    </li>
                    <li className="menu-li">
                        <a href="" className="ml-2 menu-a heading-S text-primary-dark">
                            Watchlist
                        </a>
                    </li>
                    <li className="menu-li">
                        <a href="" className="menu-a heading-S text-primary-dark">
                            About
                        </a>
                    </li>
                </ul>
                <div className="action-otr flex">
                    <a href="" className="theme-btn">
                        Download
                    </a>
                </div>
            </div>
        </header>
    )
}
