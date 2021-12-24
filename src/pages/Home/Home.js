import React from "react";
import "./Home.css";
import Navbar from "layouts/Navbar/Navbar";
import { ReactComponent as GoogleIcon } from "assets/images/google-icon.svg";
import company1 from "assets/images/company-1.webp";
import company2 from "assets/images/company-2.webp";
import company3 from "assets/images/company-3.webp";
import company4 from "assets/images/company-4.webp";
import company5 from "assets/images/company-5.webp";
import company6 from "assets/images/company-6.webp";
import SideBySideSection from "components/SideBySideSection/SideBySideSection";
import platformImg from "assets/images/platform-img.webp";
import integrationImg from "assets/images/integration-img.webp";
import resourcesImg1 from "assets/images/resources-img-1.webp";
import resourcesImg2 from "assets/images/resources-img-2.webp";
import resourcesImg3 from "assets/images/resources-img-3.webp";
import resourcesImg4 from "assets/images/resources-img-4.webp";
import ResourcesCard from "components/ResourcesCard/ResourcesCard";

import liveChatImg from "assets/images/live-chat.webp";
import inboxImg from "assets/images/inbox.webp";
import helpCenterImg from "assets/images/help-center.webp";
import heartImg from "assets/images/heart.webp";
import firstimg from 'assets/images/first.png'
import papersImg from "assets/images/papers.webp";
import hammerImg from "assets/images/hammer.webp";
import analyticsImg from "assets/images/analytics.webp";
import puzzelImg from "assets/images/puzzel.webp";

import ringLogo from "assets/images/ring-logo.webp";

import SupportCard from "components/SupportCard/SupportCard";
import ToolTip from "components/ToolTip/ToolTip";
import Footer from "layouts/Footer/Footer";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="">
        <div className="container-wrapper">
          <div className="section">
            <div className="section-left">
              <h5 className="mb-1">The sales intelligence and engagement platform to </h5>
              <p className="fs-48px graphik-semibold darkest-blue mb-20px">
                Crush Your Sales numbers every quarter
              </p>
              <p className="fs-21px darkest-blue lh-2 mb-35px">
                Simple to start, powerful to grow, and proven to build better
                customer relationships.
              </p>

              <div className="hero-input-wrapper mb-35px">
                <input type="text" placeholder="Work Email*" />
                <button className="button-wrapper bg-sharp-blue white fs-18px graphik-medium radius-4px pointer">
                  Try for free
                </button>
              </div>
              <p className="text-center">Or</p>
              <button className="button-wrapper bg-secondary white fs-18px graphik-medium radius-4px pointer w-100">
                <GoogleIcon/>  Sign Up with Google
              </button>
              <div>

              </div>
            </div>
            <div className="section-right">
              <img className="img-fluid" src={firstimg} width="100%"alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-grad-color">
        <Row>
          <Col sm="6" md="4" className="with-bg-img p-3 d-flex justify-content-center align-items-center ps-3">
            Trusted by Over 1M sales users worldwide.
          </Col>
          <Col sm="6" md="8" className="align-items-center">
            <Row className="ps-3 d-flex justify-content-center align-items-center">
              <Col className="p-3">
                <h2>200M+</h2>
                <p>contacts</p>
              </Col>
              <Col className="p-3">
                <h2>200M+</h2>
                <p>contacts</p>
              </Col>
              <Col className="p-3">
                <h2>200M+</h2>
                <p>contacts</p>
              </Col>
              <Col className="p-3">
                <h2>200M+</h2>
                <p>contacts</p>
              </Col>
                
            </Row>
            
          </Col>
        </Row>
        
      </div>

      <div className="container-wrapper">
        <p className="cards-title fs-36px text-center graphik-medium darkest-blue">
          What you can do with Help Scout
        </p>
      </div>
      <SideBySideSection
        headline="Platform"
        title="Every support tool you need, out of the box"
        subtitle="With features like shared email, live chat, knowledge base, reports, and much more, Help Scout gives growing companies the flexibility and visibility to support customers at scale."
        linkTitle="How it works"
        identity={true}
        img={platformImg}
      />
      <SideBySideSection
        headline="Integrations"
        title="Connect the tools you already use"
        subtitle="Explore 50+ integrations that make your day-to-day workflow more efficient and familiar. Our extensive developer tools might also strike your fancy"
        linkTitle="See all Integrations"
        img={integrationImg}
      />

      <div className="support-wrapper">
        <div className="container-wrapper">
          <div className="support-titles ">
            <p className="text-center fs-36px graphik-medium darkest-blue mb-25px">
              A complete support solution
            </p>
            <p className="fs-18px light-blue text-center lh-2 graphik-regular ">
              Email, self-service, live chat, and proactive support, customer
              data, 50+ integrations, and customizable reports — Help Scout
              comes with everything you need to deliver a great customer
              experience.
            </p>
          </div>
        </div>

        <div className="product-overview">
          <div className="canvas-wrapper">
            <div className="canvas">
              <div className="ring ring-outer-1"></div>
              <div className="ring ring-outer-2"></div>
              <div class="ring inner-ring-1"></div>
              <div class="ring inner-ring-2"></div>
              <div class="ring inner-ring-3"></div>

              <SupportCard
                tooltipTo="top"
                img={liveChatImg}
                className="live-chat bg-ring-green"
              >
                Live <br /> Chat
              </SupportCard>
              <SupportCard
                tooltipTo="bottom"
                img={inboxImg}
                className="bg-ring-pink shared-inbox"
              >
                SHARED
                <br /> INBOX
              </SupportCard>
              <SupportCard
                tooltipTo="bottom"
                img={helpCenterImg}
                className="bg-ring-blue help-center"
              >
                HELP
                <br />
                CENTER
              </SupportCard>
              <SupportCard
                tooltipTo="top"
                img={heartImg}
                className="proactive bg-ring-purple"
              >
                PROACTIVE <br /> MESSAGES
              </SupportCard>

              <div className="customer-data">
                <ToolTip to="top">
                  <div className="ring-inner-content ">
                    <img src={papersImg} className="mb-15px" alt="" />
                    <p className="uppercase fs-10px light-blue text-center graphik-medium lh-2">
                      CUSTOMER
                      <br />
                      DATA
                    </p>
                  </div>
                </ToolTip>
              </div>

              <div className="tools">
                <ToolTip to="top">
                  <div className="ring-inner-content ">
                    <img src={hammerImg} className="mb-15px" alt="" />
                    <p className="uppercase fs-10px light-blue text-center graphik-medium lh-2">
                      COLLABORATION
                      <br />
                      TOOLS
                    </p>
                  </div>
                </ToolTip>
              </div>
              <div className="report">
                <ToolTip to="top">
                  <div className="ring-inner-content">
                    <img src={analyticsImg} className="mb-15px" alt="" />
                    <p className="uppercase fs-10px light-blue text-center graphik-medium lh-2">
                      REPORTING
                    </p>
                  </div>
                </ToolTip>
              </div>
              <div className="integration">
                <ToolTip to="top">
                  <div className="ring-inner-content  ">
                    <img src={puzzelImg} className="mb-15px" alt="" />
                    <p className="uppercase fs-10px light-blue text-center graphik-medium lh-2">
                      INTEGRATIONS
                    </p>
                  </div>
                </ToolTip>
              </div>
              <div className="ring-logo">
                <img src={ringLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-content"
        style={{ position: "relative", zIndex: "10" }}
      >
        <div className="resources-wrapper">
          <div className="container-wrapper">
            <div className="resources">
              <p className="text-center fs-36px darkest-blue graphik-medium mb-20px">
                Content and resources
              </p>
              <p className="text-center lh-2 fs-18px light-blue ">
                Learn how to scale your customer support function while
                maintaining high-quality support with <br /> these helpful
                resources written by our team of customer champions
              </p>

              <div className="resources-cards">
                <ResourcesCard
                  img={resourcesImg1}
                  headline="FREE GUIDE"
                  title="Step by Step: How to Choose Your Perfect Help Desk"
                />
                <ResourcesCard
                  img={resourcesImg2}
                  headline="CUSTOMER STORY"
                  title="How Brain.fm Achieved a 95% CSAT Score With Help Scout"
                />
                <ResourcesCard
                  img={resourcesImg3}
                  headline="FREE COURSE"
                  title="Foundations of Great Service: 6-Part Email Series"
                />
                <ResourcesCard
                  img={resourcesImg4}
                  headline="SCALING SUPPORT"
                  title="The Right Way to Scale Customer Support"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="help-scout-wrapper my-150px">
          <div className="container-wrapper">
            <div className="help-scout">
              <p className="fs-30px mb-25px graphik-medium darkest-blue">
                Get started with Help Scout
              </p>
              <p className="mb-30px light-blue lh-2 fs-18px">
                Want to learn what Help Scout can do for you? See for yourself
                with a free trial — we'll happily extend you if you need more
                time.
              </p>
              <button className="button-wrapper fs-18px white bg-sharp-blue radius-4px pointer">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
