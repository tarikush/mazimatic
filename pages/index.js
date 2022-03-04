import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Metaerse4 from '../comps/Metaverse4'
import Navbar from '../comps/Navbar'
import Nft3 from '../comps/Nft3'
import Polygon2 from '../comps/Polygon2'
import Resources5 from '../comps/Resources5'
import Section1 from '../comps/Section1'
import Team6 from '../comps/Team6'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <title>Mazimatic | Home</title>
        <script src="/assets/js/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/sweetalert2.min.css" />
        

      </Head>

      <Navbar />
      <Section1 />
      <Polygon2 />

      <div className="clearfix"></div>
      <Metaerse4 />
      <Nft3 />
      
      <Resources5 />
      <Team6 />
      {/*} <script src="/assets/js/ball.js"></script>  */}
      <Footer />

    </div>
  )
}
