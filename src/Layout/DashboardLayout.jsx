import React from "react";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiStar,
  CiInstagram,
  CiLinkedin,
  CiUser,
} from "react-icons/ci";

import "./layout.css";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="section-1">
      <div
        className="strip"
        style={{
          background: "black",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width:"100vw"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <img
            src="assets/element-4.png"
            alt="logo-not-found"
            style={{ width: "16px", height: "16px" }}
          />
          <p
            style={{
              font: "Simplon Norm",
              fontWeight: "400",
              fontSize: "12px",
              color: "#EB4C6B",
            }}
          >
            Lorem ipsum dolor
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <img
            src="assets/element-4.png"
            alt="logo-not-found"
            style={{ width: "16px", height: "16px" }}
          />
          <p
            style={{
              font: "Simplon Norm",
              fontWeight: "400",
              fontSize: "12px",
              color: "#EB4C6B",
            }}
          >
            Lorem ipsum dolor
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <img
            src="assets/element-4.png"
            alt="logo-not-found"
            style={{ width: "16px", height: "16px" }}
          />
          <p
            style={{
              font: "Simplon Norm",
              fontWeight: "400",
              fontSize: "12px",
              color: "#EB4C6B",
            }}
          >
            Lorem ipsum dolor
          </p>
        </div>
      </div>
      <header
        className="header"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="logo-sections">
          <img
            src="assets/Logo.jpg"
            alt="logo"
            style={{ width: "36px", height: "36px" }}
          />
          <p
            style={{
              font: "Inter",
              fontWeight: "800",
              fontSize: "36px",
              lineHeight: "43px",
              textAlign:'center',
    
            }}
            className="logo-title"
          >
            LOGO
          </p>
          <div
            className="header-icons"
            style={{ display: "flex", gap: "24px" }}
          >
            <CiSearch style={{ width: "24px", height: "24px" }} />
            <CiHeart style={{ width: "24px", height: "24px" }} />
            <CiShoppingCart style={{ width: "24px", height: "24px" }} />
            <CiUser style={{ width: "24px", height: "24px" }} />
            <select name="lang" id="lang">
              <option value="eng" style={{ fontSize: "16px" }}>
                ENG
              </option>
            </select>
          </div>
        </div>
        <div>
          <nav className="navigation">
            <Link to={"./home"}>SHOPS</Link>
            <Link to={"./skills"}>SKILLS</Link>
            <Link to={"./stories"}>STORIES</Link>
            <Link to={"./shops"}>SHOPS</Link>
            <Link to={"./about"}>ABOUT</Link>
            <Link to={"./contact"}>CONTACT US</Link>
          </nav>
        </div>
      </header>

      <div style={{ marginTop: "40px" }}>{children}</div>
      <footer>
        <div className="footer-wrapper">
          <div
            className="footer-upper"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginInline: "30px",
              marginBlock: "40px",
            }}
          >
            <div className="footer-upper-left">
              <h4>BE THE FIRST TO KNOW</h4>
              <p style={{ marginBottom: "60px" }}>
                Sign up for updates from mettā muse.
              </p>
              <input
                type="text"
                placeholder="Enter your E- mail "
                style={{
                  width: "384px",
                  paddingInline: "24px",
                  paddingBlock: "14px",
                  marginRight: "10px",
                }}
              />
              <button style={{ paddingInline: "24px", paddingBlock: "14px" }}>
                SUBSCRIBE
              </button>
            </div>
            <div className="footer-upper-right">
              <h4>CONTACT US</h4>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
              <h4 style={{ margin: 0, padding: 0 }}>CURRENCY</h4>
              <div id="USD-Symbol" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="assets/United States of America (US).jpg"
                  alt="logo"
                />
                <CiStar />
                <p>USD</p>
              </div>
              <span style={{ fontSize: "12px", lineHeight: "14px" }}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </span>
            </div>
          </div>
          <div style={{ margin: "20px 80px" }}>
            <hr style={{ border: "1px solid white", margin: "0 auto" }} />
          </div>
          <div
            className="footer-lower"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div>
              <h4 style={{ fontWeight: "700", fontSize: "24px" }}>
                Metta muse
              </h4>
              <ul
                style={{
                  listStyleType: "none",
                  margin: "0",
                  padding: "0",
                  gap: "16px",
                }}
              >
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: "700", fontSize: "20px" }}>
                QUICK LINKS
              </h4>
              <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <h4
                    style={{
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "24px",
                    }}
                  >
                    FOLLOW US
                  </h4>
                  <CiInstagram style={{ width: "32px", height: "32px" }} />
                  <CiLinkedin style={{ width: "32px", height: "32px" }} />
                </div>
                <div className="logos">
                  <h4>mettā muse Accepts</h4>
                  <img src="/assets/Group 136191.jpg" alt="group-191" />
                  <img src="/assets/Group 136194.jpg" alt="group-194" />
                  <img src="/assets/Group 136195.jpg" alt="group-195" />
                </div>
              </div>
            </div>
          </div>
          <span style={{fontWeight:"400", fontSize:"14px" ,color :'white',textAlign:"center", marginBlock :'20px'}}>Copyright © 2023 mettamuse. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
