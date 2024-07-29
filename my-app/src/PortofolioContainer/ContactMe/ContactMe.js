import React, { useState, useRef } from "react";
import Typical from "react-typical";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const form = useRef();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setBanner("All fields are required.");
      toast.error("All fields are required.");
      setBool(false);
      return;
    }

    setBool(true);

    emailjs.sendForm('service_womx4hv', 'template_n7pis5o', form.current, 'gyn0BzGDNdHCkFdp4')
      .then((result) => {
        setBanner("Message sent successfully!");
        toast.success("Message sent successfully!");
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        setBanner("Failed to send message, please try again.");
        toast.error("Failed to send message, please try again.");
        setBool(false);
      });
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">Send Me Email</h2>
          <a href="https://www.github.com/raihan2-byte/">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.instagram.com/raihanalfarisi2/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/raihan-alfarisi-a155bb217/">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here :)</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleName} value={name} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea name="message" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
