import { useEffect, useState } from "react";
const Navbar = () => {

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])

    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages : "en,es,ar,hi,zh-CN", // include this for selected languages
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element');

    }
    return (
        <div>
            <nav id="navbar-primary" className="navbar" role="navigation">
                <input type="checkbox" id="checkbox_toggle" />
                <div className="test">
                    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                    <img src="/assets/images/footer-logo.png" className="na-logo" />
                </div>

                <div className="collapse navbar-collapse" id="navbar-primary-collapse">


                    <div className="search-box child">
                        <div className="search-box-inner">
                            {/* <div className="search-section">
                                <span><img src="/assets/images/search-icon.png" />&nbsp; <input type="text" placeholder="Search anything" /> </span>
                            </div> */}
                        </div>
                    </div>
                    <div className="child">
                        <ul className="nav navbar-nav">
                            
                            <li id="nftkart"><a href="#"></a></li>
                            <li id="nftkart"><a href="coming-soon-nft">NFTKart</a></li>
                            <li id="nav-logo">
                                <a href="#">
                                    <img src="/assets/images/footer-logo.png" className="navbar-logo" />
                                </a>
                            </li>
                            <li id="buy-token"><a href="coming-soon-meta">Maziverse</a></li>
                            <li id="english"><a href="#"></a></li>
                            <li id="english"><a href="#"></a></li>
                            <li id="english"><a href="#"></a></li>

                        </ul>
                    </div>
                </div>

            </nav>

            {/* <hr /> */}

            {/* <nav class="navbar">
                <div class="logo">MUO</div>
                <ul class="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <div class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li class="services">
                            <a href="/">Services</a>
                            <ul class="dropdown">
                                <li><a href="/">Dropdown 1 </a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 3</a></li>
                                <li><a href="/">Dropdown 4</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Contact</a></li>
                    </div>
                </ul>
            </nav> */}
        </div>
    );
}

export default Navbar;