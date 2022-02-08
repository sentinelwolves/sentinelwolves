import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Slider from "react-slick";

import Img1 from '../assets/images/testi-img/img-1.png';
import Img2 from '../assets/images/testi-img/img-2.png';
import Img3 from '../assets/images/testi-img/img-3.png';
import Img4 from '../assets/images/testi-img/img-4.png';

import HomeUrl from '../assets/images/home-border.png';

import Client1 from '../assets/images/clients/digip-logo.svg';
import Client2 from '../assets/images/clients/escrow.jpeg';

export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideitems: [
        {
          id: 100,
          img: Img1,
          name: 'Brandon Carney',
          designation: 'Designer',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 101,
          img: Img2,
          name: 'Samuel Campbell',
          designation: 'Developer',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 103,
          img: Img3,
          name: 'Michelle Stehle',
          designation: 'Manager',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 104,
          img: Img4,
          name: 'Margaret Lampley',
          designation: 'CEO',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
      ],
    };
  }
  render() {

    var slidesettings = {
      dots: true,
      speed: 300,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      dotsClass: "slick-dots slick-thumb carousel-indicators",
      customPaging: function (i) {
        return (
          <img src={process.env.PUBLIC_URL + '/images/img-' + (i+1) +'.jpg'} alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
        );
      },
    };

    const clientslides = this.state.slideitems.map((slideitem, clientkey) => {
      return (
        <div className="carousel-item" key={slideitem.id}>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="client-box mt-4">
                <h5 className="line-height_1_6">{slideitem.description}</h5>
                <div className="client-icon">
                  <i className="mdi mdi-format-quote-close"></i>
                </div>
                <h5 className="f-18">{slideitem.name} </h5>
                <p className="text-primary mb-0">- {slideitem.designation} </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center mt-4">
                <img src={slideitem.img} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <React.Fragment>
        <section className="section bg-light bg-clients" id="clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">All Trusted Partners</h3>
                  <p className="text-muted f-17 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales rhoncus enim id lacinia.</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client1} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client2} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>

            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
