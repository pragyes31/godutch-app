import React from "react";
import { Modal } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
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
      <div className="options-modal__content">
        <Avatar />
      </div>
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
        <div
          className="add-friend three-dots-modal__content--child"
          onClick={() => props.toggleModal("addFriend")}
        >
          Add new friend
        </div>
        <div className="create-group three-dots-modal__content--child">
          Create a group
        </div>
      </div>
    </div>
  );
}

function NavBar(props) {
  let friendsClass = `nav-bar__friends nav-bar--items ${
    props.openFriends ? "nav-bar__friends--active" : ""
  }`;
  let groupsClass = `nav-bar__groups nav-bar--items ${
    props.openGroups ? "nav-bar__groups--active" : ""
  }`;
  let activityClass = `nav-bar__activity nav-bar--items ${
    props.openActivity ? "nav-bar__activity--active" : ""
  }`;
  return (
    <div className="nav-bar">
      <div
        className={friendsClass}
        onClick={() => props.switchTab("friendsTab")}
      >
        friends
      </div>
      <div className={groupsClass} onClick={() => props.switchTab("groupsTab")}>
        groups
      </div>
      <div
        className={activityClass}
        onClick={() => props.switchTab("activityTab")}
      >
        activity
      </div>
    </div>
  );
}

function AddFriend(props) {
  return (
    <div className="add-friend">
      <Modal
        open={props.addFriendModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="add-friend__content">Add friend Modal window</div>
      </Modal>
    </div>
  );
}

function FriendsTab(props) {
  return (
    <div className="friends">
      <div className="user">
        <div className="user__info">
          <Avatar />
          <div className="user__info__balance">
            <div>TOTAL BALANCE</div>
            <div>You are all settled up.</div>
          </div>
        </div>
        <div className="filter">
          <FilterListIcon
            className="filter__btn"
            onClick={() => props.toggleModal("filterModal")}
          />
          {props.filterModal && <FilterModal />}
        </div>
      </div>
      <div className="friends__add-friend">
        <Button className="friends__add-btn" color="primary" variant="default">
          +add new friends
        </Button>
      </div>
      <div />
    </div>
  );
}

function Avatar() {
  return (
    <div className="user__info__avatar">
      <input
        accept="image/*"
        className="upload-avatar"
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className="upload-avatar--btn"
        />
      </label>
    </div>
  );
}

function FilterModal(props) {
  return (
    <div className="filter__modal">
      <div className="filter__modal--child filter__all">All friends</div>
      <div className="filter__modal--child filter__outstanding">
        Friends with outstanding balances
      </div>
      <div className="filter__modal--child filter__you-owe">
        Friends you owe
      </div>
      <div className="filter__modal--child filter__owes-you">
        Friends who owe you
      </div>
    </div>
  );
}

function GroupsTab() {
  return <div>You're inside Groups tab.</div>;
}

function ActivityTab() {
  return <div>You're inside Activity tab.</div>;
}

function AddButton(props) {
  return (
    <div>
      <Tooltip title={props.tooltip}>
        <Button
          variant="contained"
          color={props.color}
          className="add-expense-button"
          onClick={() => props.addExpense()}
        >
          +
        </Button>
      </Tooltip>
      {/*<img src={expenseBtn} className="add-expense-button" />*/}
    </div>
  );
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsModal: false,
      threeDotsModal: false,
      addFriendModal: false,
      filterModal: false,
      openFriends: true,
      openGroups: false,
      openActivity: false
    };
  }

  addFriend = () => {};

  addExpense = () => {};

  toggleModal = modal => {
    switch (modal) {
      case "optionsModal":
        this.setState({ optionsModal: !this.state.optionsModal });
        break;
      case "threeDotsModal":
        this.setState({ threeDotsModal: !this.state.threeDotsModal });
        break;
      case "addFriend":
        this.setState({ addFriendModal: !this.state.addFriendModal });
        break;
      case "filterModal":
        this.setState({ filterModal: !this.state.filterModal });
        break;
      default:
    }
  };

  switchTab = tabName => {
    switch (tabName) {
      case "friendsTab":
        this.setState({
          openFriends: true,
          openGroups: false,
          openActivity: false
        });
        break;
      case "groupsTab":
        this.setState({
          openFriends: false,
          openGroups: true,
          openActivity: false
        });
        break;
      case "activityTab":
        this.setState({
          openFriends: false,
          openGroups: false,
          openActivity: true
        });
        break;
    }
  };

  render() {
    return (
      <div className="app-dashboard">
        <Header
          toggleModal={this.toggleModal}
          threeDotsModal={this.state.threeDotsModal}
        />
        <NavBar
          switchTab={this.switchTab}
          openFriends={this.state.openFriends}
          openGroups={this.state.openGroups}
          openActivity={this.state.openActivity}
        />
        {this.state.openFriends && (
          <FriendsTab
            toggleModal={this.toggleModal}
            filterModal={this.state.filterModal}
          />
        )}
        {this.state.openGroups && <GroupsTab />}
        {this.state.openActivity && <ActivityTab />}
        <AddButton
          addExpense={this.addExpense}
          color="secondary"
          tooltip="Add Expense"
        />
        <OptionsModal
          optionsModal={this.state.optionsModal}
          toggleModal={this.toggleModal}
        />
        <AddFriend addFriendModal={this.state.addFriendModal} />
      </div>
    );
  }
}
