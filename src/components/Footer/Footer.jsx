import React from "react";
import "./Footer.css";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__child">
        <h3>&#169;2022 Shestel&#8482; LLC. </h3>
      </div>
      <div className="footer__external">
        <a
          href="https://www.privacypolicies.com/live/efa0eb55-1f3d-4fac-9ae2-8ccdc06e2538"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.privacypolicies.com/live/86c430d2-5d25-4af0-9b79-bbdfb4f3c394"
          target="_blank"
          rel="noreferrer"
        >
          Terms & Condition
        </a>

        <Link to="/blog">Blog</Link>
      </div>
      <div className="footer__socials">
        <a
          href="https://facebook.com/shestelAPP/"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook className="footer__icon" />
        </a>
        <a
          href="https://twitter.com/shestel_com"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter className="footer__icon" />
        </a>
        <a
          href="https://instagram.com/shestel_com"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="footer__icon" />
        </a>
        <a
          href="https://www.tiktok.com/@shestel_com?_t=8WWUQxS0AGU&_r=1"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok className="footer__icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;