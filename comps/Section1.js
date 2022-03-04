import React, { useEffect, useRef } from 'react';

const Section1 = () => {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);
  
    return (
        <section id="main-banner">
            {/*}   <div className="ball"></div> */}
            <video autoPlay ref={videoRef}
            width="250"
            loop
            muted>
                <source
                    type="video/mp4" src="https://mazimatic.s3.ap-south-1.amazonaws.com/stock-video-491864246-1080p.mp4"
                />
            </video>
            <div className="banner-inner">
            <div className="right">
             
            <div className="style_element">
            <h1>Welcome to<br /><span>MaziMatic</span></h1>
                    <p>A virtual world where users can play, monetize, and experience the real game play. We are focused to deliver an outstanding product for our users. <br></br>Stay tuned...</p>

                    <br /><br />
                    {/* <button className="blue-btn">Buy Tokens</button>
                    <button className="grey-btn">Explore</button>
                    <br /><br /><br /><br /> */}

                  {/* <div style={{ display: "inline" }}>
                        <div className="img-div">
                            <img src="/assets/images/img-1.png" className="small-img s-1" />
                            <img src="/assets/images/img-1.png" className="small-img s-2" />
                            <img src="/assets/images/img-1.png" className="small-img s-3" />
                        </div>
                        <div className="text-div">
                            <p>23k+<br /><span>Users</span></p>
                        </div>
                 </div> */}

            </div>
            </div> 
                <div className="left">
                    {/* <h1>Welcome to<br /><span>MaziMatic</span></h1>
                    <p>A virtual world where users can own, build, play and monetize the experiences.</p>

                    <br /><br />
                    <button className="blue-btn">Buy Tokens</button>
                    <button className="grey-btn">Explore</button>
                    <br /><br /><br /><br />

                  <div style={{ display: "inline" }}>
                        <div className="img-div">
                            <img src="/assets/images/img-1.png" className="small-img s-1" />
                            <img src="/assets/images/img-1.png" className="small-img s-2" />
                            <img src="/assets/images/img-1.png" className="small-img s-3" />
                        </div>
                        <div className="text-div">
                            <p>23k+<br /><span>Users</span></p>
                        </div>
                 </div> */}


                </div>
                {/*}   <div className="right">
                    <div className="coinsImg">
                    <img src="/assets/sideLeftCoin.svg" className="topLeftImage up-down" />
                    <img src="/assets/backgroundCoin.svg" className="backgroundImage up-down" />
                    <img src="/assets/bottomCoin.svg" className="bottomLeftImage up-down" />
                    </div>
                    <img src="/assets/images/3d-futuristic-woman-with-metaverse-vr-glasses 1.png" className="main-img" />
</div> */}
            </div>



        </section>
    );
}

export default Section1;