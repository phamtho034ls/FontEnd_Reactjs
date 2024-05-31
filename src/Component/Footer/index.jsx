import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center text-lg-start">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Customer Services</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#!">Help &amp; Contact Us</a>
              </li>
              <li>
                <a href="#!">Returns &amp; Refunds</a>
              </li>
              <li>
                <a href="#!">Online Store</a>
              </li>
              <li>
                <a href="#!">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">ConPany</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">What we do</a>
              </li>
              <li>
                <a href="#!">Avalitable Services</a>
              </li>
              <li>
                <a href="#!">Latest Posts</a>
              </li>
              <li>
                <a href="#!">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Social media</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#!">Twitter</a>
              </li>
              <li>
                <a href="#!">Intagram</a>
              </li>
              <li>
                <a href="#!">Facebook</a>
              </li>
              <li>
                <a href="#!">Pinterest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
