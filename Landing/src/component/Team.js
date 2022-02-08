import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";


import HomeUrl from '../assets/images/home-border.png';

import Img1 from '../assets/images/users/img-1.png';
import Img2 from '../assets/images/users/img-2.png';
import Img3 from '../assets/images/users/img-3.png';
import Img4 from '../assets/images/users/img-4.png';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 1,
          img: Img1,
          name: 'Calvin Hubbard',
          nickname: '#Calvin',
          description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
        },
        {
          id: 2,
          img: Img2,
          name: 'Jeremiah Eskew',
          nickname: '#Jeremiah',
          description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
        },
        {
          id: 3,
          img: Img3,
          name: 'Zachary Tevis',
          nickname: '#Zachary',
          description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
        },
        {
          id: 4,
          img: Img4,
          name: 'William Alderman',
          nickname: '#William',
          description: 'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.'
        },
      ],
    };
  }

  render() {
    var temsettings = {
      autoplay: true,
      dots: true,
      speed: 300,
      infinite: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    const teamslides = this.state.teams.map((team, teamindex) => {
      return (
        <div className="team-box p-3" key={teamindex}>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="mt-4">
                <h5 className="mt-2">{team.name}</h5>
                <p className="team-badge bg-primary text-white rounded f-14 mt-2">#{team.nickname}</p>
                <p className="text-muted mt-3">{team.description}</p>
                <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-twitter"></i></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-google"></i></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-pinterest"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-4">
                <img src={team.img} alt="" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <React.Fragment>
        <section className="section bg-light bg-cta" id="team">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="text-center">
                  <h2>Get started with <span className="text-primary">ecommark</span></h2>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-primary btn-round mr-3 btn-rounded">For Buyer</Link>
                    <Link to="#" className="btn btn-primary btn-round btn-rounded">For Seller</Link>
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
