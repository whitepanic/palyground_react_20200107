import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";

export default class Login extends Component {
  // state = {
  //   modal: false
  // };

  // toggle = () => {
  //   const { modal } = this.state;
  //   this.setState({
  //     modal: !modal
  //   });
  // };

  render() {
    // const { modal } = this.state;

    return (
      <MDBContainer className="mt-5">
        <SectionContainer className="row" noBorder flexCenter>
          <MDBCol md="6">
            <h3 className="text-center my-3 font-weight-bold">
              1.ログイン画面
            </h3>
            <p className="text-center text-muted mb-1">初期画面</p>
            <hr className="my-5" />

            <MDBCard>
              <MDBCardBody>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="user id"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />

                    <MDBInput
                      label="password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      ログイン
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </SectionContainer>
      </MDBContainer>
    );
  }
}
