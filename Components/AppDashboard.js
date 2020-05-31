import React from "react";

function Header() {
  return (
    <div className="app-header">
      <div className="hamburger-icon">
        <div className="hamBurger-line" />
        <div className="hamBurger-line" />
        <div className="hamBurger-line" />
      </div>
      <div className="header-title">Go-Dutch App</div>
      <div className="options" />
    </div>
  );
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-dashboard">
        <Header />
      </div>
    );
  }
}
