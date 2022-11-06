import React, { FC } from "react";
import Image from "next/image";
import { api } from "../../utils";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  setLoader,
  setAPI1Data,
  setAPI2Data,
  setAPI3Data,
  setAPI4Data,
  setAPI5Data,
  setAPI6Data,
  setAPI7Data,
  setAPI8Data,
  setAPI9Data,
  setAPI10Data,
  setAPI11Data,
  setAPI12Data,
  setAPI13Data,
  setAPI14Data,
  setAPI15Data,
  setAPI16Data,
  setAPI17Data,
} from "../../store/stockSlice";
interface SearchProps {
  handleChange: any;
  filteredData: any;
}

export const SearchInput: FC<SearchProps> = ({
  handleChange,
  filteredData,
}) => {
  //const dispatch = useDispatch();
  const router = useRouter();
  // const callAPIs = async (symbol: string, exchange: string) => {
  //   dispatch(setLoader(true));
  //   console.log("HERE1");
  //   let one = `/stocks/live-quote/${symbol}`;
  //   let two = `/stocks/live-quote/${symbol}`;
  //   let three = `/stocks/shares-float/${symbol}`;
  //   let four = `/stocks/company-profile/${symbol}`;
  //   let five = `/stocks/peers/${symbol}`;
  //   let six = `/stocks/price-change/${symbol}`;
  //   let seven = `/stocks/institutional-ownership/${symbol}`;
  //   let eight = `/stocks/fundamentals-snapshot/${symbol}`;
  //   let nine = `/stocks/fundamentals-snapshot-vs-peers/${symbol}`;
  //   let tenth = `/markets/status/${exchange}`;
  //   let eleventh = `/stocks/analyst-consensus/${symbol}`;
  //   let twelth = `/stocks/price-target/${symbol}`;
  //   let thirteen = `/stocks/upgrades-downgrades/${symbol}`;
  //   let fourteen = `/stocks/quarterly-data/all/${symbol}?limit=10`;
  //   let fifteen = `/stocks/pre-post-market-quote/${symbol}`;
  //   let sixteen = `/stocks/relative-strength-vs-sector/${symbol}?limitDays=7&limitTopRs=5`;
  //   let seventeen = `/stocks/next-year-estimates/${symbol}`;
  //   const requestOne = api.get(one);
  //   const requestTwo = api.get(two);
  //   const requestThree = api.get(three);
  //   const requestFour = api.get(four);
  //   const requestFive = api.get(five);
  //   const requestSix = api.get(six);
  //   const requestSeven = api.get(seven);
  //   const requestEight = api.get(eight);
  //   const requestNine = api.get(nine);
  //   const requestTenth = api.get(tenth);
  //   const requestEleventh = api.get(eleventh);
  //   const requestTwelth = api.get(twelth);
  //   const requestThirteen = api.get(thirteen);
  //   const requestFourteen = api.get(fourteen);
  //   const requestFifteen = api.get(fifteen);
  //   const requestSixteen = api.get(sixteen);
  //   const requestSeventeen = api.get(seventeen);
  //   await axios
  //     .all([
  //       requestOne,
  //       requestTwo,
  //       requestThree,
  //       requestFour,
  //       requestFive,
  //       requestSix,
  //       requestSeven,
  //       requestEight,
  //       requestNine,
  //       requestTenth,
  //       requestEleventh,
  //       requestTwelth,
  //       requestThirteen,
  //       requestFourteen,
  //       requestFifteen,
  //       requestSixteen,
  //       requestSeventeen,
  //     ])
  //     .then(
  //       axios.spread((...responses) => {
  //         const responseOne = responses[0];
  //         const responseTwo = responses[1];
  //         const responseThree = responses[2];
  //         const responseFour = responses[3];
  //         const responseFive = responses[4];
  //         const responseSix = responses[5];
  //         const responseSeven = responses[6];
  //         const responseEight = responses[7];
  //         const responseNine = responses[8];
  //         const responseTenth = responses[9];
  //         const responseEleventh = responses[10];
  //         const responseTwelth = responses[11];
  //         const responseThirteen = responses[12];
  //         const responseFourteen = responses[13];
  //         const responseFifteen = responses[14];
  //         const responseSixteen = responses[15];
  //         const responseSeventeen = responses[16];
  //         dispatch(setAPI1Data(responseOne.data));
  //         dispatch(setAPI2Data(responseTwo.data));
  //         dispatch(setAPI3Data(responseThree.data));
  //         dispatch(setAPI4Data(responseFour.data));
  //         dispatch(setAPI5Data(responseFive.data));
  //         dispatch(setAPI6Data(responseSix.data));
  //         dispatch(setAPI7Data(responseSeven.data));
  //         dispatch(setAPI8Data(responseEight.data));
  //         dispatch(setAPI9Data(responseNine.data));
  //         dispatch(setAPI10Data(responseTenth.data));
  //         dispatch(setAPI11Data(responseEleventh.data));
  //         dispatch(setAPI12Data(responseTwelth.data));
  //         dispatch(setAPI13Data(responseThirteen.data));
  //         dispatch(setAPI14Data(responseFourteen.data));
  //         dispatch(setAPI15Data(responseFifteen.data));
  //         dispatch(setAPI16Data(responseSixteen.data));
  //         dispatch(setAPI17Data(responseSeventeen.data));
  //         console.log("HERE2", responses);
  //         dispatch(setLoader(false));
  //       })
  //     )
  //     .catch((errors) => {
  //       // react on errors.
  //       console.log("HERE3", errors);
  //     });
  // };
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
                  onClick={() => router.push(`/${data.symbol}?exchangeName=${data.exchangeShortName}`)}
                  key={index}
                  className="drop-down-li text-left w-[100%] flex border-b-[1px] border-b-border-shade1"
                >
                  <a
                    href="#"
                    className="drop-down-a heading-S p-[16px] text-primary-dark w-[100%] bg-white flex items-center gap-[24px] hover:bg-primary-default hover:text-white"
                  >
                    <span className="heading-SB text-primary-dark">
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
