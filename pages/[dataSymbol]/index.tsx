import { useEffect } from "react";
import type { NextPage } from "next";
import { Header } from "../../components";
import { InstitutionnalOwnership } from "../../components";
import { Cta } from "../../components";
import { TabsComponent } from "../../components";
import { Footer } from "../../components";
import { api } from "../../utils";
import styles from "../../styles/Home.module.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
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

export async function getServerSideProps(context: any) {
  const symbol = context.params.dataSymbol;
  const exchange = context.query.exchangeName;

  const callAPIs = async (symbol: string, exchange: string) => {
    return new Promise(async resolve => {
      let one = `/stocks/live-quote/${symbol}`;
      let two = `/stocks/live-quote/${symbol}`;
      let three = `/stocks/shares-float/${symbol}`;
      let four = `/stocks/company-profile/${symbol}`;
      let five = `/stocks/peers/${symbol}`;
      let six = `/stocks/price-change/${symbol}`;
      let seven = `/stocks/institutional-ownership/${symbol}`;
      let eight = `/stocks/fundamentals-snapshot/${symbol}`;
      let nine = `/stocks/fundamentals-snapshot-vs-peers/${symbol}`;
      let tenth = `/markets/status/${exchange}`;
      let eleventh = `/stocks/analyst-consensus/${symbol}`;
      let twelth = `/stocks/price-target/${symbol}`;
      let thirteen = `/stocks/upgrades-downgrades/${symbol}`;
      let fourteen = `/stocks/quarterly-data/all/${symbol}?limit=10`;
      let fifteen = `/stocks/pre-post-market-quote/${symbol}`;
      let sixteen = `/stocks/relative-strength-vs-sector/${symbol}?limitDays=7&limitTopRs=5`;
      let seventeen = `/stocks/next-year-estimates/${symbol}`;
      const requestOne = api.get(one);
      const requestTwo = api.get(two);
      const requestThree = api.get(three);
      const requestFour = api.get(four);
      const requestFive = api.get(five);
      const requestSix = api.get(six);
      const requestSeven = api.get(seven);
      const requestEight = api.get(eight);
      const requestNine = api.get(nine);
      const requestTenth = api.get(tenth);
      const requestEleventh = api.get(eleventh);
      const requestTwelth = api.get(twelth);
      const requestThirteen = api.get(thirteen);
      const requestFourteen = api.get(fourteen);
      const requestFifteen = api.get(fifteen);
      const requestSixteen = api.get(sixteen);
      const requestSeventeen = api.get(seventeen);
      axios.all([
        requestOne,
        requestTwo,
        requestThree,
        requestFour,
        requestFive,
        requestSix,
        requestSeven,
        requestEight,
        requestNine,
        requestTenth,
        requestEleventh,
        requestTwelth,
        requestThirteen,
        requestFourteen,
        requestFifteen,
        requestSixteen,
        requestSeventeen,
      ])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0].data;
            const responseTwo = responses[1].data;
            const responseThree = responses[2].data;
            const responseFour = responses[3].data;
            const responseFive = responses[4].data;
            const responseSix = responses[5].data;
            const responseSeven = responses[6].data;
            const responseEight = responses[7].data;
            const responseNine = responses[8].data;
            const responseTenth = responses[9].data;
            const responseEleventh = responses[10].data;
            const responseTwelth = responses[11].data;
            const responseThirteen = responses[12].data;
            const responseFourteen = responses[13].data;
            const responseFifteen = responses[14].data;
            const responseSixteen = responses[15].data;
            const responseSeventeen = responses[16].data;
            const finalRes = [responseOne, responseTwo, responseThree, responseFour, responseFive,
              responseSix, responseSeven, responseEight, responseNine, responseTenth, responseEleventh,
              responseTwelth, responseThirteen, responseFourteen, responseFifteen, responseSixteen, responseSeventeen]
            resolve([...finalRes])
          })
        )
        .catch((errors) => {
          resolve(null)
        });
    });

  };

  const response: any = await callAPIs(symbol, exchange);
  const data = [...response];
  return {
    props: {
      data,
    },
  };
}

const Home: NextPage = (data: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (data?.data) {
      dispatch(setAPI1Data(data?.data[0]));
      dispatch(setAPI2Data(data?.data[1]));
      dispatch(setAPI3Data(data?.data[2]));
      dispatch(setAPI4Data(data?.data[3]));
      dispatch(setAPI5Data(data?.data[4]));
      dispatch(setAPI6Data(data?.data[5]));
      dispatch(setAPI7Data(data?.data[6]));
      dispatch(setAPI8Data(data?.data[7]));
      dispatch(setAPI9Data(data?.data[8]));
      dispatch(setAPI10Data(data?.data[9]));
      dispatch(setAPI11Data(data?.data[10]));
      dispatch(setAPI12Data(data?.data[11]));
      dispatch(setAPI13Data(data?.data[12]));
      dispatch(setAPI14Data(data?.data[13]));
      dispatch(setAPI15Data(data?.data[14]));
      dispatch(setAPI16Data(data?.data[15]));
      dispatch(setAPI17Data(data?.data[16]));
    }
  }, [data?.data])
  if (!data) return null;
  return (
    <div className={styles.container}>
      <Header />
      <TabsComponent />
      <InstitutionnalOwnership />
      <div className="cta-footer-main relative">
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
