import Head from 'next/head';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
const Home = () => {
  return (
    <>
      <Head>
        <title>Google Drive Clone</title>
        <meta name='description' content='Main page of Google Drive' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Header />
      <div className='main-container'>
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
