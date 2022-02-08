import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';

import { Link } from "react-router-dom";
import HomeUrl from '../assets/images/home-border.png';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'service1',
          icon: 'mdi-ecom',
          title: "Audit",
          description: "Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare pellentesque lobortis hendrerit mattis."
        },
        {
          id: 'service2',
          icon: 'mdi-ecom',
          title: "Data",
          description: 'Vestibulum eu tortor artett tortor rhoncus porta quis on metus morbi comodo nisi vitae neque aliquam aliquam.'
        },
        {
          id: 'service3',
          icon: 'mdi-ecom',
          title: "Funding",
          description: 'Aliquam dictum mollis sem sed hendrerit tempus sed class aptent taciti sociosqu litora conubia himenaeos.'
        },
      ],
      counters: [
        {
          id: '1',
          extraclass: '',
          start: 25,
          end: 49,
          title: "Employees",
          description: 'Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 25,
          end: 76,
          title: "Projects",
          description: 'Pellentesque habitant morbi malesuada fames ac turpis egestas.'
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: "CLIENTS",
          description: 'Suspendisse congue risus consequat sapien potitor risus tincidunt.'
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">A safe ecosystem to then consider offers </h3>
                  <p className="text-muted f-17 mt-3">A platform & full ecosystem away from the noise. Empowered with the technology, the knowledge & the buyers to ask more of the market from one place.

                                                      A safe ecosystem to then consider offers, <br />when you're in the best shape do so, for a price that your hard work deserves.</p>


                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={4} key={key}>
                  <div className="services-box p-4 mt-4">
                    <div className="services-icon bg-soft-primary">
                      <i className={"mdi text-primary " + item.icon}></i>
                    </div>

                    <h5 className="mt-4">{item.title}</h5>
                    <p className="text-muted mt-3">{item.description}</p>

                    <div className="mt-3">
                      <Link to="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></Link>
                    </div>

                  </div>
                </Col>
              ))}
            </Row>
            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  <p className="text-uppercase">why choose us </p>
                  <h3>To boots Your brand!</h3>
                  <p className="text-muted mt-3">An open live market, with qualified Amazon FBA resellers for sale.</p>
                  <div className="mt-4 pt-1">
                    <Link to="#" className="btn btn-outline-primary">Discover More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
