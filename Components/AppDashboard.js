import React from "react";
import { Modal } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

//import expenseBtn from "../images/plus.png";

const headerStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
    padding: "0px 10px",
    backgroundColor: "#00b8a9"
  },
  hamburger: {
    cursor: "pointer",
    width: "25px",
    color: "#ffffff"
  },
  title: {
    fontSize: "22px",
    fontFamily: "'Ubuntu', sans-serif",
    color: "#fff"
  },
  dots: {
    position: "relative",
    color: "#fff",
    fontSize: "1.2em",
    cursor: "pointer"
  }
};

function HeaderHOC(props) {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <MenuIcon
        className={classes.hamburger}
        onClick={() => props.toggleModal("optionsModal")}
      />
      <div className={classes.title}>Go-Dutch App</div>
      <div onClick={() => props.toggleModal("threeDotsModal")}>
        <MoreVertIcon className={classes.dots} />
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

const Header = withStyles(headerStyles)(HeaderHOC);

const optionsModalStyles = {
  optionsModal: {
    width: "300px",
    height: "100vh"
  },
  content: {
    height: "100vh",
    backgroundColor: "rgb(245, 234, 234)",
    outline: "none"
  }
};

function OptionsModalHOC(props) {
  const { classes } = props;
  return (
    <Modal
      open={props.optionsModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={() => props.toggleModal("optionsModal")}
      className={classes.optionsModal}
    >
      <div className={classes.content}>
        <UserInfo />
      </div>
    </Modal>
  );
}

const OptionsModal = withStyles(optionsModalStyles)(OptionsModalHOC);

const threeDotsModalStyles = {
  modal: {
    width: "180px",
    height: "100px",
    position: "absolute",
    top: "25px",
    right: "22px",
    zIndex: 999
  },
  content: {
    height: "100px",
    backgroundColor: "rgb(245, 234, 234)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    outline: "none"
  },
  contentChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100%",
    cursor: "pointer"
  }
  //  contentChild:hover: {
  //    color:"#fff",
  //    backgroundColor: "lighten($primary-color, 2%)"
  //  }
};

function ThreeDotsModalHOC(props) {
  const { classes } = props;
  return (
    <div
      open={props.threeDotsModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={() => props.toggleModal("threeDotsModal")}
      className={classes.modal}
    >
      <div className={classes.content}>
        <div
          className={classes.contentChild}
          onClick={() => props.toggleModal("addFriend")}
        >
          Add new friend
        </div>
        <div className={classes.contentChild}>Create a group</div>
      </div>
    </div>
  );
}

const ThreeDotsModal = withStyles(threeDotsModalStyles)(ThreeDotsModalHOC);

const navBarStyles = {
  navBar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#00b8a9",
    width: "100%",
    height: "40px",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  items: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    width: "33.33%",
    cursor: "pointer"
  },

  //  items:hover {
  //    backgroundColor:"lighten(#00b8a9, 5%)",
  //    textDecoration: "underline"
  //  }

  friendsActive: {
    textDecoration: "underline",
    borderBottom: "2px solid #fff",
    boxSizing: "border-box"
  },

  activityActive: {
    textDecoration: "underline",
    borderBottom: "2px solid #fff",
    boxSizing: "border-box"
  },
  groupsActive: {
    textDecoration: "underline",
    borderBottom: "2px solid #fff",
    boxSizing: "border-box"
  }
};

function NavBarHOC(props) {
  const { classes } = props;
  let friendsClass = `${classes.items} ${
    props.openFriends ? `${classes.friendsActive}` : ""
  }`;
  let groupsClass = `${classes.items} ${
    props.openGroups ? `${classes.groupsActive}` : ""
  }`;
  let activityClass = `${classes.items} ${
    props.openActivity ? `${classes.activityActive}` : ""
  }`;
  return (
    <div className={classes.navBar}>
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

const NavBar = withStyles(navBarStyles)(NavBarHOC);

const addFriendStyles = {
  addFriend: {},
  content: {
    backgroundColor: "#ffffff"
  }
};

function AddFriendHOC(props) {
  const { classes } = props;
  return (
    <div className={classes.addFriend}>
      <Modal
        open={props.addFriendModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.content}>Add friend Modal windowwwww</div>
      </Modal>
    </div>
  );
}

const AddFriend = withStyles(addFriendStyles)(AddFriendHOC);

const userInfoStyles = {
  userInfo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  avatar: {
    minWidth: "55px !important",
    height: "50px !important",
    borderRadius: "50%",
    backgroundImage: `url("https://bit.ly/2UhwGb4")`,
    border: "3px solid #00b8a9",
    marginRight: "10px"
  }
};

function UserInfoHOC(props) {
  const { classes } = props;
  return (
    <div className={classes.userInfo}>
      <div className="user__info__avatar">
        <div className={classes.avatar} />
      </div>
      <div className="user__info__balance">
        <div>TOTAL BALANCE</div>
        <div>You are all settled up.</div>
      </div>
    </div>
  );
}

const UserInfo = withStyles(userInfoStyles)(UserInfoHOC);

const filterModalStyles = {};

function FilterModalHOC(props) {
  return (
    <div className="filter__modal">
      <div className="filter__modal--child filter__all">
        All {props.tabName}
      </div>
      <div className="filter__modal--child filter__outstanding">
        {props.tabName} with outstanding balances
      </div>
      <div className="filter__modal--child filter__you-owe">
        {props.tabName} you owe
      </div>
      <div className="filter__modal--child filter__owes-you">
        {props.tabName === "friends" ? "friends who" : "groups that"} owe you
      </div>
    </div>
  );
}

const FilterModal = withStyles(filterModalStyles)(FilterModalHOC);

function AddButtonLarge(props) {
  return (
    <div className={props.parentClass}>
      <Button className={props.childClass} color="primary">
        +add new {props.tabName}
      </Button>
    </div>
  );
}

function FriendsTab(props) {
  return (
    <div className={props.tabName}>
      <div className="user">
        <UserInfo />
        <div className="filter">
          <FilterListIcon
            className="filter__btn"
            onClick={() => props.toggleModal("filterModal")}
          />
          {props.filterModal && <FilterModal tabName={props.tabName} />}
        </div>
      </div>
      <AddButtonLarge
        parentClass="friends__add-friend"
        childClass="friends__add-btn"
        tabName={props.tabName}
      />
      <div />
    </div>
  );
}

function GroupsTab(props) {
  return (
    <div className={props.tabName}>
      <div className="user">
        <UserInfo />
        <div className="filter">
          <FilterListIcon
            className="filter__btn"
            onClick={() => props.toggleModal("filterModal")}
          />
          {props.filterModal && <FilterModal tabName={props.tabName} />}
        </div>
      </div>
      <AddButtonLarge
        parentClass="groups__add-group"
        childClass="groups__add-btn"
        tabName={props.tabName}
      />
      <div />
    </div>
  );
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

  addFriend = () => {
    console.log("add new friend");
  };

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
            tabName="friends"
            addFriend={this.addFriend}
          />
        )}
        {this.state.openGroups && (
          <GroupsTab
            toggleModal={this.toggleModal}
            filterModal={this.state.filterModal}
            tabName="groups"
          />
        )}
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
