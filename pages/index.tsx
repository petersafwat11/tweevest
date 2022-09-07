import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import InstitutionnalOwnership from '../components/InstitutionnalOwnership/InstitutionnalOwnership';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <InstitutionnalOwnership />
      <div className='cta-footer-main'>
        <Cta />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
