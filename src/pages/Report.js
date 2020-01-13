import React, { Component } from "react";

import ReportDumb from "./ReportDumb";
import { connect } from "react-redux";
import * as actions from "../actions";

class Report extends Component {
  render() {
    return <ReportDumb reportData={this.props.reportData} />;
  }
}

const mapStateToProps = state => {
  return {
    reportData: state.reporter.reportData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSaveReport: () => {
      dispatch(actions.saveReport());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
