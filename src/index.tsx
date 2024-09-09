import React from "react";
import ReactDOM from "react-dom/client";
import "./root.css";
import App from "./App";
import { CiGlobe, CiInstagram } from "react-icons/ci";
import { SocialsWrapper, SocialHeading, SocialItem, SocialButton, DonateButton } from "./Components/Elements";

export const headerHeight = "3rem";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/*  TODO install router  */}
    <title>Intrak STU</title>
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header
        style={{
          maxHeight: headerHeight,
          height: headerHeight,
        }}
        className="bg-[#220901] flex items-center px-8"
      >
        <div className="">
          {/* SEO Optimized header */}
          <h1 className="text-white text-3xl leading-loose">INTRAK RIP</h1>
          {/* span on subdomains, another h1 */}
        </div>
        <div className="ml-auto">
          <DonateButton>Donate</DonateButton>
        </div>
      </header>
      <App />
      <footer>
        <SocialsWrapper>
          <SocialItem>
            <SocialHeading>Samo</SocialHeading>
            <SocialButton link="https://www.instagram.com/samuel_bencc">
              <CiInstagram />
            </SocialButton>
          </SocialItem>
          <SocialItem className="ml-0 mr-auto">
            <SocialHeading>Tomáš</SocialHeading>
            <SocialButton link="https://tomikjetu.me">
              <CiGlobe />
            </SocialButton>
            <SocialButton link="https://www.instagram.com/tomikjetu">
              <CiInstagram />
            </SocialButton>
          </SocialItem>
        </SocialsWrapper>
      </footer>
    </main>
  </React.StrictMode>
);
