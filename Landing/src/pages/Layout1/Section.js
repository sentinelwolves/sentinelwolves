import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import HomeUrl from '../../assets/images/home-border.png';
import Img from '../../assets/images/features/img-2.png';

class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home bg-light" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      <h1 className="home-title mt-4">We guide, <br />Prepare, <br /> & List Amazon FBA resellers for sale</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales rhoncus enim id lacinia.</p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Buyer Registration</Link>{" "}
                        <Link to="http://localhost:63342/tokenwiz-html-v1.0.4/html-main/kyc-application.html?_ijt=qfrg7dq3cf5td0hnamgee9ae73&_ij_reload=RELOAD_ON_SAVE" className="btn btn-primary mr-3">Seller Registration</Link>{" "}
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="home-img">
                      <div className="animation-1"></div>
                      <div className="animation-2"></div>
                      <div className="animation-3"></div>
                      <img src={Img} className="img-fluid" alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <ModalVideo
              channel="vimeo"
              isOpen={this.state.isOpen}
              videoId="99025203"
              onClose={() => this.setState({ isOpen: false })}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
