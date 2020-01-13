import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon, MDBAnimation } from "mdbreact";
import MenuLink from "../components/menuLink";

const AReportNav = () => {
  return (
    <>
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <h3 className='text-center my-3 font-weight-bold'>4.TODO List</h3>
              <p className='text-center text-muted mb-1'>作成者のやることタスクを表示</p>
              <hr className='my-5' />

              <MDBJumbotron>
                <h2 className='text-center'>
                  <MDBIcon far icon='list-alt' className='indigo-text mr-2' />
                  TODO
                </h2>
                <ul className='list-unstyled example-components-list'>
                  <MenuLink to='/forms/report/user1/0000' title='0000.T' />
                  <MenuLink to='/forms/report/user1/0001' title='0001.T' />
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default AReportNav;
