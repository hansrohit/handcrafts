import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { PhoneIncoming } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="h-96 gap-y-0.5 footer flex flex-col justify-center items-center w-full border-2 mt-8">
        <div className="h-[75%] w-[85%] border-2 border-b-slate-300 border-t-0 border-l-0 border-r-0 flex justify-around items-center text-white">
          <div className="h-[90%] flex flex-col gap-y-3">
            <h1>Quick Links</h1>
            <ul className="flex flex-col list-none gap-y-2">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/products">
                <li>Products</li>
              </Link>
              <Link to="/carts">
                <li>Cart</li>
              </Link>
              <Link to="/login">
                <li>Account</li>
              </Link>
            </ul>
          </div>
          <div className="h-[90%] flex flex-col gap-y-3">
            <h1>Customer Service</h1>
            <ul className="flex flex-col list-none gap-y-3">
              <li>Track Order</li>
              <li>Shipping & Payments</li>
              <li>Return & Exchange</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="h-[90%] flex flex-col gap-y-3">
            <h1>Crafty Creations</h1>
            <ul className="flex flex-col list-none gap-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="h-[90%] w-[30%] flex flex-col gap-y-3">
            <h1>Contact Us</h1>
            <p className="w-full">
              Vipul Square, Block B, Sector 43, Coimbatore, Tamil Nadu - 641049
            </p>
            <p>+91-124 4307447</p>
            <a href="mailto:hansrohit@gmail.com" target="_blank">
              <p>care@craftcreations.com</p>
            </a>
          </div>
        </div>
        <div className=" h-[17%] w-[85%] flex justify-start items-center gap-x-52">
          <ul className="list-none flex justify-center items-center gap-x-6 text-slate-100">
            <li>
              <a href="www.instagram.com" target="_blank">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="www.facebook.com" target="_blank">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="www.twitter.com" target="_blank">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="tel:+9080867217">
                <PhoneIncoming />
              </a>
            </li>
          </ul>
          <p className="text-slate-100">
            @2024 crafty creations. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
