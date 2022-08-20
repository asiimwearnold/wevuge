import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Wevuge</h2>
              <p className="section__description">
                This is the only car rental service that cares about your needs above all else.
                Do you want a ,
                <li>
                  <strong>Chauffeur</strong>
                </li>
                <li>
                  <strong>Rent Car</strong>
                </li>
                <li>
                  <strong>Guided tour</strong>
                </li>
                <li>
                  <strong>Chatter plane</strong>
                </li>
                
               <li><strong>profesional Movers</strong><br/> </li> 
                We
                offers reliable and cheap car hire services in Uganda to both business,
                leisure and ,adventure tourists including backpackers and small groups.
                We have a variety of 4X4 rental cars available for hire all year round.
                Whether you want a saloon car, 4×4 station wagon,, or, much large vehicles like a Mini-van or Coaster bus,
                we got you covered with cheap prices and superb customer care service.
                Our wide array of affordable car hire services includes organizing self drive trips,
                chauffeur-guided tours, wedding transportation, airport transfers & events management to and from any destination within Uganda.
                
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> 
                  Rent A Car
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Hire a shoffer
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Learn How to Drive
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Get a driving Liscence
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Chartter a plane
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
