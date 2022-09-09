import React from "react";
import Image from 'next/image';


export const Cta = () => {
    return (
        <div className="cta-main relative bg-primary p-[96px] rounded-24 overflow-hidden mt-[128px] mb-[100px] max-w-[1170px] mx-[auto]">
            <h2 className="heading heading-h2 text-white text-center mb-[32px]">
                New Feature Coming Soon, Stay Tuned!
            </h2>
            <form action="" className="form-main flex item-center justify-center relative z-10">
                <div className="input-otr flex border-[1px] border-white rounded-8 overflow-hidden max-w-[500px] w-[100%]">
                    <input className="input heading-S p-[16px] bg-transparent" type="email" name="email" placeholder="Enter your email" />
                    <input className="theme-btn2 w-[auto] focus:outline-none" type="submit" name="submit" value={"Subscribe"} />
                </div>
            </form>
            <div className="bg-shapes-otr">
                <Image className="cta-shape1" width="230px" height="220px" src="/svg/cta-bg-shape1.svg" alt="Shape" />
                <Image className="cta-shape2" width="230px" height="220px" src="/svg/cta-bg-shape2.svg" alt="Shape" />
            </div>
        </div>
    )
}