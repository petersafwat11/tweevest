import React from "react";
import Image from 'next/image';


export const Footer = () => {
    return (
        <footer className="footer-main flex items-center justify-between bg-primary-dark px-[75px] py-[28px] xl:px-[15px] sm:flex-col sm:gap-[16px]">
            <a href='' className='logo-otr'>
                <Image className="object-contain object-left" width="160px" height="38px" src="/brand-logo-footer.png" alt="logo" />
            </a>
            <p className="copy-text heading-XS text-textwhite">
                © 2022 <a href="" className="inline heading-XS hover:text-white">TweeVest</a> . All rights reserved
            </p>
            <div className="social-otr">
                <ul className="social-ul flex items-center gap-[16px]">
                    <li className="social-li">
                        <a href="" className="flex items-center justify-center social-a w-[24px] h-[24px] rounded-[100%] bg-primary-dark3 hover:bg-primary-default">
                            <Image className="object-contain object-left" width="14px" height="14px" src="/svg/instagram-icon.svg" alt="logo" />
                        </a>
                    </li>
                    <li className="social-li">
                        <a href="" className="flex items-center justify-center social-a w-[24px] h-[24px] rounded-[100%] bg-primary-dark3 hover:bg-primary-default">
                            <Image className="object-contain object-left" width="14px" height="14px" src="/svg/dribble-icon.svg" alt="logo" />
                        </a>
                    </li>
                    <li className="social-li">
                        <a href="" className="flex items-center justify-center social-a w-[24px] h-[24px] rounded-[100%] bg-primary-dark3 hover:bg-primary-default">
                            <Image className="object-contain object-left" width="14px" height="14px" src="/svg/twitter-icon.svg" alt="logo" />
                        </a>
                    </li>
                    <li className="social-li">
                        <a href="" className="flex items-center justify-center social-a w-[24px] h-[24px] rounded-[100%] bg-primary-dark3 hover:bg-primary-default">
                            <Image className="object-contain object-left" width="14px" height="14px" src="/svg/youtube-icon.svg" alt="logo" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}