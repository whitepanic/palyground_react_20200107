import React, { Component } from "react";
import AddRemoveLayout from "./AddRemoveLayout";
import { MDBContainer, MDBBtn } from "mdbreact";

class GridTest extends Component {
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  stringifyLayout() {
    return this.state.layout.map(function(l) {
      return (
        <div className='layoutItem' key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <MDBContainer>
          <div>
            <AddRemoveLayout />
          </div>
        </MDBContainer>
      </>
    );
  }
}

// const gridProps = window.gridProps || {};

export default GridTest;

// const contentDiv = document.getElementById("root");

// ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);
