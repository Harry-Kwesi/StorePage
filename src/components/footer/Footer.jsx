import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import Config from "../../config.json";
import "./Footer.css";
import FormInputField from "../formInputField/FormInputField";
import Icon from "../icons/Icon";
import Dropdown from "../dropdown/Dropdown";
import Accordion from "../accordion/Accordion";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail("");
    console.log("Subscribe this email: ", email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className="linkListFooter">
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`linkFooter fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="rootFooter">
      <Container size={"large"} spacing={"min"}>
        <div className="contentFooter">
          <div className="contentFooterTop">
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className="footerLinkContainer" key={indexLink}>
                  {/* for web version */}
                  <div className="footerLinks">
                    <span className="linkTitleFooter">
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className="mobileFooterLinks">
                    <Accordion type={"add"} title={linkCollection.subTitle}>
                      {renderLinks(linkCollection)}
                    </Accordion>
                  </div>{" "}
                </div>
              );
            })}
            <div className="newsLetter">
              <div className="newsLetterContent">
                <span className="linkTitleFooter">Newsletter</span>
                <p className="promoMessage">Get 25% off your first purchase!</p>
                <form
                  className="newsLetterForm"
                  onSubmit={(e) => subscribeHandler(e)}
                >
                  <FormInputField
                    icon={"arrow"}
                    id={"newsLetterInput"}
                    value={email}
                    placeholder={"Email"}
                    handleChange={(_, e) => setEmail(e)}
                  />
                </form>
                <div className="socialContainer">
                  {Config.social.youtube && (
                    <div
                      onClick={() => handleSocialClick("youtube")}
                      role={"presentation"}
                      className="socialIconContainer"
                    >
                      <Icon symbol={"youtube"}></Icon>
                    </div>
                  )}

                  {Config.social.instagram && (
                    <div
                      onClick={() => handleSocialClick("instagram")}
                      role={"presentation"}
                      className="socialIconContainer"
                    >
                      <Icon symbol={"instagram"}></Icon>
                    </div>
                  )}

                  {Config.social.facebook && (
                    <div
                      onClick={() => handleSocialClick("facebook")}
                      role={"presentation"}
                      className="socialIconContainer"
                    >
                      <Icon symbol={"facebook"}></Icon>
                    </div>
                  )}

                  {Config.social.twitter && (
                    <div
                      onClick={() => handleSocialClick("twitter")}
                      role={"presentation"}
                      className="socialIconContainer"
                    >
                      <Icon symbol={"twitter"}></Icon>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="contentBottomContainerFooter">
        <Container size={"large"} spacing={"min"}>
          <div className="contentBottomFooter">
            <div className="settings">
              <Dropdown
                label={"Country/Region"}
                optionList={Config.currencyList}
              />
              <Dropdown label={"Language"} optionList={Config.languageList} />
            </div>
            <div className="copyrightContainer"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
