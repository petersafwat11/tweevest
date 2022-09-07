import React from "react";


const Cta = () => {
    return (
        <div className="cta-main relative bg-primary p-[96px] rounded-24 overflow-hidden mt-[128px] mb-[100px] max-w-[1170px] w-[100%] mx-[auto]">
            <h2 className="heading heading-h2 text-white text-center mb-[32px]">
                New Feature Coming Soon, Stay Tuned!
            </h2>
            <form action="" className="form-main flex item-center justify-center">
                <div className="input-otr">
                    <input type="email" name="email" placeholder="Enter your email" />
                </div>
            </form>
            <img className="absolute object-cover top-0 left-0" width="230px" height="220px" src="/svg/cta-bg-shape1.svg" alt="logo" />
            <img className="absolute object-cover bottom-0 right-0" width="230px" height="220px" src="/svg/cta-bg-shape2.svg" alt="logo" />
        </div>
    )
}

export default Cta