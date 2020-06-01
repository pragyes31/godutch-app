import React from "react";
import { Modal } from "@material-ui/core";

function Header(props) {
  return (
    <div className="header">
      <div
        className="header__hamburger"
        onClick={() => props.toggleModal("optionsModal")}
      >
        <div className="hamburger__line" />
        <div className="hamburger__line" />
        <div className="hamburger__line" />
      </div>
      <div className="header__title">Go-Dutch App</div>
      <div className="header__options" />
    </div>
  );
}

function OptionsModal(props) {
  return (
    <Modal
      open={props.optionsModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={() => props.toggleModal("optionsModal")}
      className="options-modal"
    >
      <div className="options-modal__content">Modal window</div>
    </Modal>
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
    switch (modal) {
      case "optionsModal":
        this.setState({ optionsModal: !this.state.optionsModal });
        break;
    }
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
