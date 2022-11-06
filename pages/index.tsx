import { useEffect } from "react";
import type { NextPage } from "next";
import { Header } from "../components";
import { InstitutionnalOwnership } from "../components";
import { Cta } from "../components";
import { TabsComponent } from "../components";
import { Footer } from "../components";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
// import {
//   selectLoader,
//   selectAPI1Data,
//   selectAPI2Data,
//   selectAPI3Data,
//   selectAPI4Data,
//   selectAPI5Data,
//   selectAPI6Data,
//   selectAPI7Data,
//   selectAPI8Data,
//   selectAPI9Data,
//   selectAPI10Data,
//   selectAPI11Data,
//   selectAPI12Data,
//   selectAPI13Data,
//   selectAPI14Data,
//   selectAPI15Data,
//   selectAPI16Data,
// } from "../store/stockSlice";
const Home: NextPage = () => {
  // const API1Data = useSelector(selectAPI1Data);
  // const API2Data = useSelector(selectAPI2Data);
  // const API3Data = useSelector(selectAPI3Data);
  // const API4Data = useSelector(selectAPI4Data);
  // const API5Data = useSelector(selectAPI5Data);
  // const API6Data = useSelector(selectAPI6Data);
  // const API7Data = useSelector(selectAPI7Data);
  // const API8Data = useSelector(selectAPI8Data);
  // const API9Data = useSelector(selectAPI9Data);
  // const API10Data = useSelector(selectAPI10Data);
  // const API11Data = useSelector(selectAPI11Data);
  // const API12Data = useSelector(selectAPI12Data);
  // const API13Data = useSelector(selectAPI13Data);
  // const API14Data = useSelector(selectAPI14Data);
  // const API15Data = useSelector(selectAPI15Data);
  // const API16Data = useSelector(selectAPI16Data);
  // const loader = useSelector(selectLoader);

  // let temp = [
  //   API1Data,
  //   API2Data,
  //   API3Data,
  //   API4Data,
  //   API5Data,
  //   API6Data,
  //   API7Data,
  //   API8Data,
  //   API9Data,
  //   API10Data,
  //   API11Data,
  //   API12Data,
  //   API13Data,
  //   API14Data,
  //   API15Data,
  //   API16Data,
  // ];
  // console.log("DATA", temp);
  // if (loader) {
  //   return null; // replace with some loading overlay later
  // }
  const router = useRouter();
  useEffect(() => {
    router.push('/AAPL?exchangeName=NASDAQ')
  }, [])
  return null
};

export default Home;
