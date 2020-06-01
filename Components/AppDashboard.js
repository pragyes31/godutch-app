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
      <div className="options" onClick={() => props.toggleModal("optionsModal")} />
    </div>
  );
}

function OptionsModal(props) {
  return <div />;
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsModal: false
    };
  }

  toggleModal = (modal) => {
    this.setState({optionsModal:!this.state.optionsModal})
  };

  render() {
    return (
      <div className="app-dashboard">
        <Header toggleModal={this.toggleModal} />
        {this.state.optionsModal && <OptionsModal />}
      </div>
    );
  }
}
