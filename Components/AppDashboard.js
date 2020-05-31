import React from "react";

function Header(props) {
  return (
    <div className="app-header">
      <div className="hamburger-icon">
        <div className="hamBurger-line" />
        <div className="hamBurger-line" />
        <div className="hamBurger-line" />
      </div>
      <div className="header-title">Go-Dutch App</div>
      <div className="options" onClick={props.toggleModal("optinsModal")} />
    </div>
  );
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsModal: false
    };
  }

  toggleModal = () => {};

  render() {
    return (
      <div className="app-dashboard">
        <Header toggleModal={this.toggleModal} />
      </div>
    );
  }
}
