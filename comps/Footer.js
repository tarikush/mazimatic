import { useEffect, useState } from "react";
const Footer = () => {

  /*  const [scrollY, setScrollY] = useState(0);

    useEffect(() => {

        var height = document.body.clientHeight;
  var width = document.body.clientWidth;
  
        console.log("Width x Height", width, height);
        
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // just trigger this so that the initial state 
      // is updated as soon as the component is mounted
      // related: https://stackoverflow.com/a/63408216
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); */
    return (
        <footer>

            <div className="footer-inner">

                <div className="footer-desc">
                    <img src="assets/images/footer-logo.png" className="footer-logo" />
                        <p>PartyVerse - AdventureVerse and InfluencerVerse, so stay tuned and get ready to have some unique fun.</p>
                </div>
                <div className="footer-links">
                    {/* <h2>Buy Tokens</h2>
                    <ul>
                        <li><a href="">Decentralized Exchange</a></li>
                        <li><a href="">Liquidity Pool</a></li>
                        <li><a href="">Connect Wallet</a></li>
                    </ul> */}
                </div>
                <div className="footer-links">
                    <h2>NFTKart</h2>
                    <ul>
                        <li><a href="coming-soon-nft">Coming Soon...</a></li>
                    </ul>
                    {/*}  <ul>
                        <li><a href="">Explore Marketplace</a></li>
                        <li><a href="">Create NFT</a></li>
                        <li><a href="">Top Selling</a></li>
                        <li><a href="">Popular Collections</a></li>
                </ul> */}
                </div>
                <div className="footer-links">
                    <h2>Maziverse</h2>
                    <ul>
                        <li><a href="coming-soon-meta">Coming Soon...</a></li>
                    </ul>
                    <div id="google_translate_element" > </div>
           {/*}     <select>
                        <option>English</option>
                        <option value="AF">Afrikaans</option>
  <option value="SQ">Albanian</option>
  <option value="AR">Arabic</option>
  <option value="HY">Armenian</option>
  <option value="EU">Basque</option>
  <option value="BN">Bengali</option>
  <option value="BG">Bulgarian</option>
  <option value="CA">Catalan</option>
  <option value="KM">Cambodian</option>
  <option value="ZH">Chinese (Mandarin)</option>
  <option value="HR">Croatian</option>
  <option value="CS">Czech</option>
  <option value="DA">Danish</option>
  <option value="NL">Dutch</option>
  <option value="ET">Estonian</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finnish</option>
  <option value="FR">French</option>
  <option value="KA">Georgian</option>
  <option value="DE">German</option>
  <option value="EL">Greek</option>
  <option value="GU">Gujarati</option>
  <option value="HE">Hebrew</option>
  <option value="HI">Hindi</option>
  <option value="HU">Hungarian</option>
  <option value="IS">Icelandic</option>
  <option value="ID">Indonesian</option>
  <option value="GA">Irish</option>
  <option value="IT">Italian</option>
  <option value="JA">Japanese</option>
  <option value="JW">Javanese</option>
  <option value="KO">Korean</option>
  <option value="LA">Latin</option>
  <option value="LV">Latvian</option>
  <option value="LT">Lithuanian</option>
  <option value="MK">Macedonian</option>
  <option value="MS">Malay</option>
  <option value="ML">Malayalam</option>
  <option value="MT">Maltese</option>
  <option value="MI">Maori</option>
  <option value="MR">Marathi</option>
  <option value="MN">Mongolian</option>
  <option value="NE">Nepali</option>
  <option value="NO">Norwegian</option>
  <option value="FA">Persian</option>
  <option value="PL">Polish</option>
  <option value="PT">Portuguese</option>
  <option value="PA">Punjabi</option>
  <option value="QU">Quechua</option>
  <option value="RO">Romanian</option>
  <option value="RU">Russian</option>
  <option value="SM">Samoan</option>
  <option value="SR">Serbian</option>
  <option value="SK">Slovak</option>
  <option value="SL">Slovenian</option>
  <option value="ES">Spanish</option>
  <option value="SW">Swahili</option>
  <option value="SV">Swedish </option>
  <option value="TA">Tamil</option>
  <option value="TT">Tatar</option>
  <option value="TE">Telugu</option>
  <option value="TH">Thai</option>
  <option value="BO">Tibetan</option>
  <option value="TO">Tonga</option>
  <option value="TR">Turkish</option>
  <option value="UK">Ukrainian</option>
  <option value="UR">Urdu</option>
  <option value="UZ">Uzbek</option>
  <option value="VI">Vietnamese</option>
  <option value="CY">Welsh</option>
  <option value="XH">Xhosa</option>
                    </select>*/}

                </div>
                <div style={{ position: "fixed", top: 0 }}>
      </div>

            </div>

        </footer>
    );
}

export default Footer;