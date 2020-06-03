import React from "react";
import { Modal } from "@material-ui/core";
//import expenseBtn from "../images/plus.png";

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
      <div
        className="header__dots"
        onClick={() => props.toggleModal("threeDotsModal")}
      >
        {props.threeDotsModal && (
          <ThreeDotsModal
            threeDotsModal={props.threeDotsModal}
            toggleModal={props.toggleModal}
          />
        )}
      </div>
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
      <div className="options-modal__content">Options Modal window</div>
    </Modal>
  );
}

function ThreeDotsModal(props) {
  return (
    <div
      open={props.threeDotsModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={() => props.toggleModal("threeDotsModal")}
      className="three-dots-modal"
    >
      <div className="three-dots-modal__content">
        <div className="add-friend three-dots-modal__content--child">
          Add new friend
        </div>
        <div className="create-group three-dots-modal__content--child">
          Create a group
        </div>
      </div>
    </div>
  );
}

function AddExpense(props) {
  return (
    <div>
      <div className="add-expense-button" onClick={() => addExpense()}>
        +
      </div>
      {/*<img src={expenseBtn} className="add-expense-button" />*/}
    </div>
  );
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsModal: false,
      threeDotsModal: false
    };
  }

  addExpense = () => {};

  toggleModal = modal => {
    switch (modal) {
      case "optionsModal":
        this.setState({ optionsModal: !this.state.optionsModal });
        break;
      case "threeDotsModal":
        this.setState({ threeDotsModal: !this.state.threeDotsModal });
        break;
      default:
    }
  };

  render() {
    return (
      <div className="app-dashboard">
        <Header
          toggleModal={this.toggleModal}
          threeDotsModal={this.state.threeDotsModal}
        />
        <OptionsModal
          optionsModal={this.state.optionsModal}
          toggleModal={this.toggleModal}
        />
        <AddExpense />
      </div>
    );
  }
}
