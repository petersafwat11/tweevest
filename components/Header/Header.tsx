import React from "react";
import Image from 'next/image';


export const Header = () => {
    return (
        <header className="header-main flex items-center gap-[32px] justify-between px-[75px] py-[28px]">
            <a href='' className='logo-otr'>
                <Image className="object-contain object-left" width="160px" height="38px" src="/brand-logo.png" alt="logo" />
            </a>
            <div className="Search-otr relative flex w-[600px]">
                <div className="flex absolute left-[16px] top-[50%] translate-y-[-50%]">
                    <Image className="object-contain" width="24px" height="24px" src="/svg/search-icon.svg" alt="logo" />
                </div>
                <input className="search-input heading-S py-[16px] pl-[56px] pr-[16px] w-[100%] bg-grey1 rounded-8 border-[1px] border-border" type="search" name="search" placeholder="Search  Company Status" />
            </div>
            <div className="menu-action-otr flex items-center gap-[32px]">
                <ul className="menu-ul flex items-center gap-[32px]">
                    <li className="menu-li flex items-center gap-[8px]">
                        <a href="" className="menu-a heading-S text-dark">
                            Screener
                        </a>
                        <p className="heading-XXS text-green bg-greenlight rounded-16 pt-[4px] pb-[5px] px-[8px]">
                            Coming Soon
                        </p>
                    </li>
                    <li className="menu-li">
                        <a href="" className="menu-a heading-S text-dark">
                            Watchlist
                        </a>
                    </li>
                    <li className="menu-li">
                        <a href="" className="menu-a heading-S text-dark">
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
