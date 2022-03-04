const Resources5 = () => {
    return (
        <section id="resources">

            <div className="resources-inner">
                <div className="left">

                    <h1>Whitepaper &<br /><span>Roadmap</span></h1>

                    <br /><br /><br />
                    <div className="resource-card">
                        <div className="resource-card-inner">
                            <img src="assets/images/res-1.png" className="res-small-icon" />
                            <img src="assets/images/res-ico-1.png" className="res-icon" />
                            <h2>The<br /><span>Whitepaper </span></h2>
                            <p>Know the MazíVerse in detail and learn about all the different things the Maziverse
                                will host.</p>
                            <br /><br /><br />
                            {/* <button className="download-btn">Download Resource</button> */}
                            <div className="text-center">
                            <button className="learn-btn" id="learn-btn">Launching Soon...</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right">


                    <div className="resource-card mobile-card">
                        <div className="resource-card-inner resource-card-slanted">
                            <img src="assets/images/res-2.png" className="res-small-icon" />
                            <img src="assets/images/res-ico-2.png" className="res-icon" />
                            <h2>checkout our <br /><span>Roadmap</span></h2>
                            <p>Understand what each Phase means and what it contains. To know the flow of the Maziverse, view our roadmap.</p>
                            <br />
                            <img src="assets/images/road.png" className="road-img" />


                        </div>
                        <br /><br /><br /><br />
                        <div className="text-center">
                        <button className="learn-btn-2">Launching Soon...</button>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    );
}

export default Resources5;