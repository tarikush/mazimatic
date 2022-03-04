import React, { useRef, useEffect, useState  } from 'react';
import styles from '../styles/Home.module.css'
import emailjs from '@emailjs/browser';

function Comingsoonmeta() {

  const form = useRef();
  const [mailSent, setMailSet] = useState(0);
  const [failmailSent, setFailMailSet] = useState(0);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nqzg4tq', 'template_k1xjgdw', form.current, 'Tx8CszlyOrnECPigx')
      .then((result) => {
        setMailSet(1);  
      }, (error) => {
        setFailMailSet(1);  
      });
    e.target.reset();
  };
    
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`2022-06-10`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div id="coming_soon_meta">
    <img src="/assets/images/footer-logo.png" className="coming-soon-logo" />
    <p>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
    <h1>Coming Soon</h1>

      <h2>Get notified when we launch</h2>
      {mailSent == 1 ? <p style={{ color: "green" }}>Reminder Sent Successfully!</p> : <p></p>}
      {failmailSent == 1 ? <p style={{color: "red"}}>Sorry Something went wrong!</p> : <p></p>}
    <form ref={form} onSubmit={sendEmail}>
    <div className="email_div">
      <input type="text" name="email" placeholder="Enter Your Email ID" />   
      <button>Subscribe</button>
    </div>
    </form>
    </div>
  )
}

export default Comingsoonmeta