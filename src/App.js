import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Routes from "./Routes";

class App extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className='flyout'>
          <MDBNavbar color='black' dark expand='sm' fixed='top' scrolling>
            <MDBNavbarBrand href='/main/testuser01' className='py-0 font-weight-bold'>
              <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
              <strong className='align-middle'>prototype</strong>
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={this.toggleCollapse("mainNavbarCollapse")} />

            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink onClick={this.closeCollapse("mainNavbarCollapse")} exact to='/login'>
                    <strong>ログイン</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/main/testuser01'
                    onClick={this.closeCollapse("mainNavbarCollapse")}>
                    <strong>メイン</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to='/list/testuser01'>
                    <strong>一覧</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to='/report_nav/tsetuser01'>
                    <strong>作成</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink onClick={this.closeCollapse("mainNavbarCollapse")} to='/grid_test'>
                    <strong>GridTest</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink onClick={this.closeCollapse("mainNavbarCollapse")} to='/grid_test2'>
                    <strong>GridTest2</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <MDBFooter color='black'>
            <p className='footer-copyright mb-0 py-1 text-center'>
              &copy; {new Date().getFullYear()} Copyright: me
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
