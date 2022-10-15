import React, { FC } from "react";
import Image from 'next/image';
import { api } from "../../utils";
import axios from "axios"
import { useDispatch } from "react-redux"
import { setLoader,setAPI1Data, setAPI2Data, setAPI3Data, setAPI4Data, setAPI5Data, setAPI6Data, setAPI7Data, setAPI8Data, setAPI9Data } from "../../store/stockSlice"
interface SearchProps {
    handleChange: any,
    filteredData: any,
}

export const SearchInput: FC<SearchProps> = ({ handleChange, filteredData }) => {
    const dispatch = useDispatch()
    const callAPIs = async (symbol: string) => {
        dispatch(setLoader(true))
        console.log("HERE1")
        let one = `/stocks/overview/${symbol}`
        let two = `/stocks/live-quote/${symbol}`
        let three = `/stocks/shares-float/${symbol}`
        let four = `/stocks/company-profile/${symbol}`
        let five = `/stocks/peers/${symbol}`
        let six = `/stocks/price-change/${symbol}`
        let seven = `/stocks/institutional-ownership/${symbol}`
        let eight = `/stocks/fundamentals-snapshot/${symbol}`
        let nine = `/stocks/fundamentals-snapshot-vs-peers/${symbol}`
        const requestOne = api.get(one);
        const requestTwo = api.get(two);
        const requestThree = api.get(three);
        const requestFour = api.get(four);
        const requestFive = api.get(five);
        const requestSix = api.get(six);
        const requestSeven = api.get(seven);
        const requestEight = api.get(eight);
        const requestNine = api.get(nine);
        await axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven, requestEight, requestNine]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseThree = responses[2]
            const responseFour = responses[3]
            const responseFive = responses[4]
            const responseSix = responses[5]
            const responseSeven = responses[6]
            const responseEight = responses[7]
            const responseNine = responses[8]
            dispatch(setAPI1Data(responseOne.data))
            dispatch(setAPI2Data(responseTwo.data))
            dispatch(setAPI3Data(responseThree.data))
            dispatch(setAPI4Data(responseFour.data))
            dispatch(setAPI5Data(responseFive.data))
            dispatch(setAPI6Data(responseSix.data))
            dispatch(setAPI7Data(responseSeven.data))
            dispatch(setAPI8Data(responseEight.data))
            dispatch(setAPI9Data(responseNine.data))
            console.log("HERE2", responses)
            dispatch(setLoader(false))
        })).catch(errors => {
            // react on errors.
            console.log("HERE3", errors)
        })
    }
    return (
        <>
            <form className="w-[100%] flex">
                <div className="flex search-icon absolute left-[16px] top-[50%] translate-y-[-50%] lg:w-[20px] lg:h-[20px]">
                    <Image className="object-contain" width="20px" height="20px" src="/svg/search-icon.svg" alt="logo" />
                </div>
                <input onChange={(e) => handleChange(e.target.value)} className="search-input heading-S py-[10px] pl-[48px] pr-[16px] w-[100%] bg-grey-shade1 rounded-8 lg:pt-[10px] lg:pr-[16px] lg:pb-[10px] lg:pl-[48px]" type="search" name="search" placeholder="Search  Company Status" />
            </form>
            {filteredData.data.length !== 0 && (
                <div className="drop-down-otr search-result absolute top-[52px] w-[100%] max-h-[400px] overflow-y-auto overflow-x-hidden left-0 z-[999] shadow-Shadow2">
                    <ul className="drop-down-ul w-[100%] bg-white border-[1px] border-border-shade1 rounded-8 overflow-hidden">
                        {filteredData?.data?.map((data: any, index: number) => {
                            return (
                                <li onClick={() => callAPIs(data.symbol)} key={index} className="drop-down-li text-left w-[100%] flex border-b-[1px] border-b-border-shade1">
                                    <a href="#" className="drop-down-a heading-S p-[16px] text-primary-dark w-[100%] bg-white flex items-center gap-[24px] hover:bg-primary-default hover:text-white">
                                        <span className="heading-SB text-primary-dark">{data.symbol}</span> <span className="heading-SB text-primary-dark2 flex-1">{data.name}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )
            }
        </>
    )
}