import dynamic from 'next/dynamic';

export const Chart1 = dynamic(() => import('./ChartComponent1/ChartComponent1').then((module) => module.ChartComponent1), { ssr: false })
export const Chart2 = dynamic(() => import('./ChartComponent2/ChartComponent2').then((module) => module.ChartComponent2), { ssr: false })
export const Chart3 = dynamic(() => import('./ChartComponent3/ChartComponent3').then((module) => module.ChartComponent3), { ssr: false })
export const Chart4 = dynamic(() => import('./ChartComponent4/ChartComponent4').then((module) => module.ChartComponent4), { ssr: false })

export { FundamentalBox } from './FundamentalBox/FundamentalBox';
export { FundamentalBox2 } from './FundamentalBox2/FundamentalBox2';
export { FundamentalBox3 } from './FundamentalBox3/FundamentalBox3';
export { FundamentalBox4 } from './FundamentalBox4/FundamentalBox4';
export { FundamentalBox5 } from './FundamentalBox5/FundamentalBox5';
export { FundamentalBox6 } from './FundamentalBox6/FundamentalBox6';
export { SliderComponent } from './SliderComponent/SliderComponent';
export { LineChart } from './LineChart/LineChart';
export { BarChart } from './BarChart/BarChart';
export { ForcastComponent } from './ForcastComponent/ForcastComponent';


export { TabsComponent } from './TabsComponent/TabsComponent';
export { Header } from './Header/Header';
export { Cta } from './Cta/Cta';
export { Footer } from './Footer/Footer';
export { InstitutionnalOwnership } from './InstitutionnalOwnership/InstitutionnalOwnership';