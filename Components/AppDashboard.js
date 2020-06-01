import React from "react";
import { Modal } from "@material-ui/core";

function Header(props) {
  return (
    <div className="app-header">
      <div
        className="hamburger-icon"
        onClick={() => props.toggleModal("optionsModal")}
      >
        <div className="hamBurger-line" />
        <div className="hamBurger-line" />
        <div className="hamBurger-line" />
      </div>
      <div className="header-title">Go-Dutch App</div>
      <div className="options" />
    </div>
  );
}

function OptionsModal(props) {
  return (
    <div>
      <Modal
        open={props.optionsModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onBackdropClick={() => props.toggleModal("optionsModal")}
      >
        <div>Modal window</div>
      </Modal>
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

  toggleModal = modal => {
    this.setState({ optionsModal: !this.state.optionsModal });
  };

  render() {
    return (
      <div className="app-dashboard">
        <Header toggleModal={this.toggleModal} />
        <OptionsModal
          optionsModal={this.state.optionsModal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}
