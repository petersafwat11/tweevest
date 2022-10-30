import dynamic from "next/dynamic";

export const Chart1 = dynamic(
  () =>
    import("./ChartComponent1/ChartComponent1").then(
      (module) => module.ChartComponent1
    ),
  { ssr: false }
);
export const Chart3 = dynamic(
  () =>
    import("./ChartComponent3/ChartComponent3").then(
      (module) => module.ChartComponent3
    ),
  { ssr: false }
);

export { FundamentalBox } from "./FundamentalBox/FundamentalBox";
export { SliderComponent } from "./SliderComponent/SliderComponent";
export { LineChart } from "./LineChart/LineChart";
export { BarChart } from "./BarChart/BarChart";
export { ForcastComponent } from "./ForcastComponent/ForcastComponent";

export { TabsComponent } from "./TabsComponent/TabsComponent";
export { Header } from "./Header/Header";
export { Cta } from "./Cta/Cta";
export { Footer } from "./Footer/Footer";
export { InstitutionnalOwnership } from "./InstitutionnalOwnership/InstitutionnalOwnership";

export { SearchInput } from "./SearchInput/SearchInput";
export { BartextChart } from "./BartextChart/BartextChart";
export { BartextChart2 } from "./BartextChart2/BartextChart2";
