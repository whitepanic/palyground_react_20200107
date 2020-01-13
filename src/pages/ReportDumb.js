import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBadge
} from "mdbreact";

import SectionContainer from "../components/sectionContainer";

const propTypes = {
  saveReport: PropTypes.func,
  reportData: PropTypes.object
};

const defaultProps = {
  saveReport: () => "",
  reportData: {}
};

export default class AReportDumb extends Component {
  nextInputRef = null;

  componentDidMount() {
    document.querySelectorAll(".iconHover").forEach(el => (el.style.cursor = "pointer"));
  }

  // handleSubmit = event => {
  //   const { value } = this.state;
  //   alert(`MDBInput value: ${value}`);
  //   event.preventDefault();
  // };

  // saveToState = value => this.setState({ value });

  getValue = value => console.log(value);

  // handleChange = event => this.setState({ value: event.target.value });

  // changeFocus = () => this.nextInputRef.focus();

  // mouseEnter = () => {
  //   this.setState({
  //     iconInput: "eye",
  //     typeInput: "text"
  //   });
  // };

  // mouseLeave = () => {
  //   this.setState({
  //     iconInput: "eye-slash",
  //     typeInput: "password"
  //   });
  // };

  render() {
    // const { iconInput, typeInput, value, strTicker, data } = this.state.reportData;
    const { data } = this.props.reportData;

    return (
      <MDBContainer className='mt-5'>
        <MDBRow>
          <MDBCol className='mb-3 float-sm-right float-md-right'>
            <div className='custom-control custom-checkbox pl-3' align='right'>
              <input
                className='custom-control-input'
                type='checkbox'
                value=''
                id='inside-info-check'
                required
              />

              <label className='custom-control-label' htmlFor='inside-info-check'>
                インサイダー情報チェック
              </label>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <h2>
            <MDBBadge pill color='primary'>
              0000 〇〇製作所 {this.props.user}
            </MDBBadge>
          </h2>
        </MDBRow>

        <MDBRow className='py-1'>
          <MDBCol md='12' lg='10'>
            <SectionContainer noBorder header='会社計画(半期)'>
              <MDBTable small responsive>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
              </MDBTable>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-0'>
          <MDBCol md='12'>
            <SectionContainer noBorder header='投資判断'>
              <div className='form-group'>
                <textarea className='form-control' id='exampleFormControlTextarea1' rows='5' />
              </div>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-0'>
          <MDBCol md='12'>
            <SectionContainer noBorder>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput getValue={this.getValue} type='textarea' label='◆ 業績動向' rows='1' />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput
                    getValue={this.getValue}
                    type='textarea'
                    label='◆ 中長期カタリスト'
                    rows='1'
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput
                    getValue={this.getValue}
                    type='textarea'
                    label='◆ 今後のイベント'
                    rows='1'
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <MDBInput getValue={this.getValue} type='textarea' label='◆ 株主還元' rows='1' />
                </MDBCol>
              </MDBRow>

              <SectionContainer header='◆ ESG'>
                <div className='form-group row'>
                  <label htmlFor='strEsgE' className='col-sm-1 col-form-label'>
                    E :
                  </label>
                  <div className='col-sm-11'>
                    <textarea className='form-control' id='strEsgE' rows='1' />
                  </div>
                </div>
                <div className='form-group row'>
                  <label htmlFor='strEsgS' className='col-sm-1 col-form-label'>
                    S :
                  </label>
                  <div className='col-sm-11'>
                    <textarea className='form-control' id='strEsgS' rows='1' />
                  </div>
                </div>
                <div className='form-group row'>
                  <label htmlFor='`strEsgG`' className='col-sm-1 col-form-label'>
                    G :
                  </label>
                  <div className='col-sm-11'>
                    <textarea className='form-control' id='strEsgG' rows='1' />
                  </div>
                </div>
              </SectionContainer>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <SectionContainer noBorder className='text-center'>
            <div className='mb-3'>
              <MDBBtn color='blue-grey'>
                <MDBIcon icon='ban' className='mr-1' /> 取り消し
              </MDBBtn>
              <MDBBtn color='indigo'>
                <MDBIcon icon='save' className='mr-1' /> 格　納
              </MDBBtn>
            </div>
          </SectionContainer>
        </MDBRow>
      </MDBContainer>
    );
  }
}

AReportDumb.propTypes = propTypes;
AReportDumb.defaultProps = defaultProps;
