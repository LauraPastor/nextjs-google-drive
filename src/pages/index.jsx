import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import SideBar from '@/components/SideBar';
const Home = () => {
  const [assets, setAssets] = useState([]);
  const getData = async () => {
    try {
      const data = await fetch(`/api/assets`)
      const media = await data.json()
      setAssets(media)
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [])
  console.log(assets)
  const onHandleNewUpload = (asset) => {
    setAssets((prev) => [asset, ...prev]);
  }
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
        <SideBar onHandleNewUpload={onHandleNewUpload} />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
