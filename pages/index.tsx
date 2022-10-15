import type { NextPage } from 'next';
import { Header } from '../components';
import { InstitutionnalOwnership } from '../components';
import { Cta } from '../components';
import { TabsComponent } from '../components';
import { Footer } from '../components';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';
import { selectLoader,selectAPI1Data,selectAPI2Data,selectAPI3Data,selectAPI4Data,selectAPI5Data,selectAPI6Data,selectAPI7Data,selectAPI8Data,selectAPI9Data } from '../store/stockSlice';
const Home: NextPage = () => {
  const API1Data = useSelector(selectAPI1Data)
  const API2Data = useSelector(selectAPI2Data)
  const API3Data = useSelector(selectAPI3Data)
  const API4Data = useSelector(selectAPI4Data)
  const API5Data = useSelector(selectAPI5Data)
  const API6Data = useSelector(selectAPI6Data)
  const API7Data = useSelector(selectAPI7Data)
  const API8Data = useSelector(selectAPI8Data)
  const API9Data = useSelector(selectAPI9Data)
  const loader = useSelector(selectLoader)
  
  let temp = [API1Data,API2Data,API3Data,API4Data,API5Data,API6Data,API7Data,API8Data,API9Data,]
  console.log("DATA", temp)
  if (loader){
    return null // replace with some loading overlay later
  }
  return (
    <div className={styles.container}>
      <Header />
      <TabsComponent />
      <InstitutionnalOwnership />
      <div className='cta-footer-main relative'>
        <Cta />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
