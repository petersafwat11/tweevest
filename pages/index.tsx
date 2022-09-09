import type { NextPage } from 'next';
import { Header } from '../components';
import { InstitutionnalOwnership } from '../components';
import { Cta } from '../components';
import { TabsComponent } from '../components';
import { Footer } from '../components';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <TabsComponent />
      <InstitutionnalOwnership />
      <div className='cta-footer-main'>
        <Cta />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
