import React from "react";
import { Modal } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CropFreeIcon from "@material-ui/icons/CropFree";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SettingsIcon from "@material-ui/icons/Settings";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RateReviewIcon from "@material-ui/icons/RateReview";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TextField from "@material-ui/core/TextField";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Popover from "@material-ui/core/Popover";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
    color: "#fff"
  },
  dots: {
    position: "relative",
    color: "#fff",
    fontSize: "1.2em",
    cursor: "pointer"
  }
};

class HeaderComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsModal: false,
      threeDotsModal: false,
      addFriendModal: false,
      anchorEl: null
    };
  }
  toggleModal = modal => {
    switch (modal) {
      case "optionsModal":
        this.setState({ optionsModal: !this.state.optionsModal });
        break;
      case "addFriend":
        this.setState({ addFriendModal: !this.state.addFriendModal });
        break;
      default:
    }
  };
  toggle3DotsModal = event => {
    this.setState({
      threeDotsModal: !this.state.threeDotsModal,
      anchorEl: event.currentTarget
    });
    console.log(this.state.anchorEl);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <MenuIcon
          className={classes.hamburger}
          onClick={() => this.toggleModal("optionsModal")}
        />
        <OptionsModal
          optionsModal={this.state.optionsModal}
          toggleModal={this.toggleModal}
        />
        <Typography variant="h6" className={classes.title}>
          Go-Dutch App
        </Typography>
        <div>
          <MoreVertIcon
            onClick={this.toggle3DotsModal}
            className={classes.dots}
          />
          <ThreeDotsModal
            threeDotsModal={this.state.threeDotsModal}
            addFriendModal={this.state.addFriendModal}
            toggleModal={this.toggleModal}
            anchorRef={this.state.anchorEl}
          />
        </div>
      </div>
    );
  }
}

const Header = withStyles(headerStyles)(HeaderComp);

const optionsModalStyles = {
  fullModal: {
    maxHeight: "100vh",
    minHeight: "100vh",
    position: "relative",
    right: "149px",
    width: "300px"
  },
  content: {
    outline: "none",
    minHeight: "100vh"
  },
  menu: {
    marginTop: "20px"
  }
};

function OptionsModalComp(props) {
  const { classes } = props;
  return (
    <Dialog
      open={props.optionsModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onBackdropClick={() => props.toggleModal("optionsModal")}
      onEscapeKeyDown={() => props.toggleModal("optionsModal")}
      classes={{ paper: classes.fullModal }}
    >
      <div className={classes.content}>
        <UserInfo />
        <ProVersion />
        <div className={classes.menu}>
          <OptionsMenuItem text="Home" icon={<HomeIcon />} />
          <OptionsMenuItem text="Settings" icon={<SettingsIcon />} />
          <OptionsMenuItem text="Scan code" icon={<CropFreeIcon />} />
          <OptionsMenuItem text="Rate Go-Dutch" icon={<RateReviewIcon />} />
          <OptionsMenuItem text="Contact us" icon={<MailIcon />} />
          <OptionsMenuItem text="Log out" icon={<ExitToAppIcon />} />
          <AppInfo icon={<FavoriteIcon />} />
        </div>
        <div className={classes.menu} />
      </div>
    </Dialog>
  );
}

const OptionsModal = withStyles(optionsModalStyles)(OptionsModalComp);

const userInfoStyles = {
  userInfo: {
    height: "20vh",
    backgroundImage: `url("https://bit.ly/2DW30uR")`
  },
  row1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
    marginBottom: "15px"
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage: `url("https://bit.ly/2UhwGb4")`,
    border: "3px solid #00b8a9",
    marginLeft: "15px"
  },
  icon: {
    marginRight: "10px",
    display: "flex",
    alignItems: "center"
  },
  row2: {
    marginLeft: "10px"
  }
};

function UserInfoComp(props) {
  const { classes } = props;
  return (
    <div className={classes.userInfo}>
      <div className={classes.row1}>
        <div className={classes.avatar} />
        <div className={classes.icon}>
          <CropFreeIcon />
        </div>
      </div>
      <div className={classes.row2}>
        <div className={classes.name}>Rahul Nayak</div>
        <div className="emailId">rahulnayak@electroons.com</div>
      </div>
    </div>
  );
}

const UserInfo = withStyles(userInfoStyles)(UserInfoComp);

const proVersionStyles = {
  proVersion: {
    height: "22vh",
    backgroundColor: "#eee",
    padding: "0px 7px"
  },
  proDetails: {
    display: "flex"
  },
  icon: {
    width: "20px",
    marginRight: "5px",
    marginTop: "22px",
    color: "#4a266c"
  },
  details: {
    fontSize: "12px",
    padding: "10px 10px 0px 10px"
  },
  title: {
    fontWeight: "bold",
    marginBottom: 0
  },
  sub: {
    marginTop: "5px"
  },
  button: {
    marginLeft: "35px"
  }
};

function ProVersionComp(props) {
  const { classes } = props;
  return (
    <div className={classes.proVersion}>
      <div className={classes.proDetails}>
        <div className={classes.icon}>
          <MonetizationOnIcon />
        </div>
        <div className={classes.details}>
          <p className={classes.title}>Get Go-Dutch Pro!</p>
          <p className={classes.sub}>
            Subscribe to Go-Dutch Pro for receipt, scanning, no ads, currency
            conversion, charts, search and more.
          </p>
        </div>
      </div>
      <div className={classes.button}>
        <Button variant="contained" color="secondary">
          learn more
        </Button>
      </div>
    </div>
  );
}

const ProVersion = withStyles(proVersionStyles)(ProVersionComp);

const optionsMenuItemStyles = {
  menuItem: {
    display: "flex",
    margin: "5px 0px 10px 20px",
    alignItems: "center",
    color: "#757575",
    cursor: "pointer",
    height: "5vh"
  },
  icon: {
    marginRight: "20px"
  }
};

function optionsMenuItemComp(props) {
  const { classes } = props;
  return (
    <div className={classes.menuItem}>
      <div className={classes.icon}>{props.icon}</div>
      <div className="text">{props.text}</div>
    </div>
  );
}

const OptionsMenuItem = withStyles(optionsMenuItemStyles)(optionsMenuItemComp);

const appInfoStyles = {
  appInfo: {
    margin: "40px 0px 0px 25px",
    color: "#757575",
    fontSize: "12px"
  },
  icon: {
    fontSize: "11px",
    color: "red"
  },
  para1: {
    marginBottom: "0px"
  },
  para2: {
    marginTop: "0px"
  }
};

function AppInfoComp(props) {
  const { classes } = props;
  return (
    <div className={classes.appInfo}>
      <p className={classes.para1}>
        Made with <FavoriteIcon className={classes.icon} /> somewhere in India.
      </p>
      <p className={classes.para2}>
        Free to use, just give credit where due :P
      </p>
    </div>
  );
}

const AppInfo = withStyles(appInfoStyles)(AppInfoComp);

const threeDotsModalStyles = {
  modal: {
    width: "150px",
    height: "80px"
  },
  content: {
    height: "80px",
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
    height: "40px",
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#00b8a9"
    }
  }
};

class ThreeDotsModalComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: this.props.anchorEl
    };
  }
  handleOpen = () => {
    return this.state.anchorEl;
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    return (
      <Popover
        open={this.props.threeDotsModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={this.handleClose}
        onBackdropClick={() => this.props.toggleModal("threeDotsModal")}
        onEscapeKeyDown={() => this.props.toggleModal("threeDotsModal")}
        anchorEl={this.state.anchorEl}
        classes={{ paper: classes.modal }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div className={classes.content}>
          <Typography
            variant="subtitle1"
            className={classes.contentChild}
            onClick={() => this.props.toggleModal("addFriend")}
          >
            Add new friend
          </Typography>
          <Typography variant="subtitle1" className={classes.contentChild}>
            Create a group
          </Typography>
        </div>
        <AddFriend
          addFriendModal={this.props.addFriendModal}
          toggleModal={this.props.toggleModal}
        />
      </Popover>
    );
  }
}

const ThreeDotsModal = withStyles(threeDotsModalStyles)(ThreeDotsModalComp);

class AddFriendComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      addDetails: false
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  toggleModal = () => {
    this.setState({ name: "" });
    this.props.toggleModal("addFriend");
  };
  openAddDetails = () => {
    this.state.name && this.setState({ addDetails: !this.state.addDetails });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.addFriend}>
        <Dialog
          fullScreen={true}
          open={this.props.addFriendModal}
          aria-labelledby="Add New friend modal"
          aria-describedby="Add New friend modal"
          onBackdropClick={this.toggleModal}
          onEscapeKeyDown={this.toggleModal}
          classes={{ paper: classes.addFriend }}
        >
          <ArrowBackIcon className={classes.arrow} onClick={this.toggleModal} />
          <form className={classes.friendForm}>
            <TextField
              id="add-friend-field"
              label="Add Friend"
              className={classes.textField}
              onChange={this.handleChange}
              value={this.state.name}
            />
          </form>
          <div className={classes.addForm}>
            <PersonAddIcon className={classes.addIcon} />
            <Typography
              variant="subtitle1"
              className="addPara"
              onClick={this.openAddDetails}
            >
              {this.state.name
                ? `Add ${this.state.name} to Go-Dutch`
                : "Add a new contact to Go-Dutch"}
            </Typography>
            <AddDetails
              openAddDetails={this.state.addDetails}
              name={this.state.name}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

const addFriendStyles = {
  addFriend: {
    maxWidth: "600px",
    display: "flex"
  },
  arrow: {
    cursor: "pointer",
    display: "inline"
  },
  textField: {
    width: "100%"
  },
  addForm: {
    marginTop: "10px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    cursor: "pointer"
  },
  addIcon: {
    color: "#fff",
    border: "6px solid #38a385",
    borderRadius: "50%",
    height: "17px",
    width: "17px",
    backgroundColor: "#38a385",
    marginRight: "10px"
  }
};

const AddFriend = withStyles(addFriendStyles)(AddFriendComp);

const addDetailsStyles = {
  addDetails: {
    maxWidth: "600px"
  },
  header: {
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  left: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between"
  },
  details: {
    width: "600px"
  },
  name: {
    display: "block",
    width: "100%"
  },
  contact: {
    display: "block",
    width: "100%"
  }
};

class AddDetailsComp extends React.Component {
  constructor(props) {
    super(props);
    let name = this.props.name;
    this.state = {
      name: name
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        fullScreen={true}
        open={this.props.openAddDetails}
        aria-labelledby="Add New friend modal"
        aria-describedby="Add New friend modal"
        onBackdropClick={this.toggleModal}
        onEscapeKeyDown={this.toggleModal}
        classes={{ paper: classes.addDetails }}
      >
        <div className={classes.header}>
          <div className={classes.left}>
            <ArrowBackIcon
              className={classes.arrow}
              onClick={this.toggleModal}
            />
            <Typography variant="subtitle1">Add new contact</Typography>
          </div>
          <div className={classes.right}>
            <Button disabled={true}>ADD</Button>
          </div>
        </div>
        <div className={classes.details}>
          <form className={classes.friendForm}>
            <TextField
              id="name-field"
              label="Name"
              className={classes.name}
              onChange={this.handleChange}
              value={this.state.name}
            />
            <TextField
              id="contact-field"
              label="Phone number or email address"
              className={classes.contact}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className="message">
          Don't worry, nothing sends just yet. You will have another chance to
          review before sending.
        </div>
      </Dialog>
    );
  }
}

const AddDetails = withStyles(addDetailsStyles)(AddDetailsComp);

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
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#00b8a9",
      textDecoration: "underline"
    }
  },

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

function NavBarComp(props) {
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
      <Typography
        variant="caption"
        className={friendsClass}
        onClick={() => props.switchTab("friendsTab")}
      >
        friends
      </Typography>
      <Typography
        variant="caption"
        className={groupsClass}
        onClick={() => props.switchTab("groupsTab")}
      >
        groups
      </Typography>
      <Typography
        variant="caption"
        className={activityClass}
        onClick={() => props.switchTab("activityTab")}
      >
        activities
      </Typography>
    </div>
  );
}

const NavBar = withStyles(navBarStyles)(NavBarComp);

const userBalanceStyles = {
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

function UserBalanceComp(props) {
  const { classes } = props;
  return (
    <div className={classes.userInfo}>
      <div className="user__info__avatar">
        <div className={classes.avatar} />
      </div>
      <div className="user__info__balance">
        <Typography>TOTAL BALANCE</Typography>
        <Typography>You are all settled up.</Typography>
      </div>
    </div>
  );
}

const UserBalance = withStyles(userBalanceStyles)(UserBalanceComp);

const filterModalStyles = {
  modal: {
    width: "280px",
    height: "150px",
    position: "relative",
    bottom: "130px",
    left: "50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "left",
    flexDirection: "column"
  },
  modalChild: {
    height: "100%",
    paddingLeft: "10px",
    backgroundColor: "lightgrey",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "left",
    flexDirection: "column",
    "&:hover": {
      backgroundColor: "grey",
      color: "white"
    }
  }
};

function FilterModalComp(props) {
  const { classes } = props;
  return (
    <Dialog
      open={props.filterModal}
      aria-labelledby="Add New friend modal"
      aria-describedby="Add New friend modal"
      onBackdropClick={() => props.toggleModal("filterModal")}
      onEscapeKeyDown={() => props.toggleModal("filterModal")}
      classes={{ paper: classes.modal }}
    >
      <Typography className={classes.modalChild}>
        All {props.tabName}
      </Typography>
      <Typography className={classes.modalChild}>
        {props.tabName} with outstanding balances
      </Typography>
      <Typography className={classes.modalChild}>
        {props.tabName} you owe
      </Typography>
      <div className={classes.modalChild}>
        {props.tabName === "friends" ? "friends who" : "groups that"} owe you
      </div>
    </Dialog>
  );
}

const FilterModal = withStyles(filterModalStyles)(FilterModalComp);

function AddButtonLarge(props) {
  return (
    <div className={props.parentClass}>
      <Button className={props.childClass} color="primary">
        +add new {props.tabName}
      </Button>
    </div>
  );
}

const friendsTabStyles = {
  user: {
    width: "100%",
    height: "80px",
    backgroundColor: "#eada82",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  filter: {
    position: "relative"
  },
  filterBtn: {
    minWidth: "35px !important",
    height: "30px !important",
    border: "2px solid black",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

class FriendsTabComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterModal: false
    };
  }
  toggleModal = () => this.setState({ filterModal: !this.state.filterModal });
  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.tabName}>
        <div className={classes.user}>
          <UserBalance />
          <div className={classes.filter}>
            <FilterListIcon
              className={classes.filterBtn}
              onClick={this.toggleModal}
            />
            {this.state.filterModal && (
              <FilterModal
                tabName={this.props.tabName}
                filterModal={this.state.filterModal}
                toggleModal={this.toggleModal}
              />
            )}
          </div>
        </div>
        <AddButtonLarge tabName={this.props.tabName} />
        <div />
      </div>
    );
  }
}

const FriendsTab = withStyles(friendsTabStyles)(FriendsTabComp);

const groupsTabStyles = {
  user: {
    width: "100%",
    height: "80px",
    backgroundColor: "#eada82",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  filter: {
    position: "relative"
  },
  filterBtn: {
    minWidth: "35px !important",
    height: "30px !important",
    border: "2px solid black",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

class GroupsTabComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterModal: false
    };
  }
  toggleModal = () => this.setState({ filterModal: !this.state.filterModal });

  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.tabName}>
        <div className={classes.user}>
          <UserBalance />
          <div className={classes.filter}>
            <FilterListIcon
              className={classes.filterBtn}
              onClick={this.toggleModal}
            />
            {this.state.filterModal && (
              <FilterModal
                tabName={this.props.tabName}
                filterModal={this.state.filterModal}
                toggleModal={this.toggleModal}
              />
            )}
          </div>
        </div>
        <AddButtonLarge tabName={this.props.tabName} />
        <div />
      </div>
    );
  }
}

// function GroupsTabComp(props) {
//   const { classes } = props;
//   return (
//     <div className={props.tabName}>
//       <div className={classes.user}>
//         <UserBalance />
//         <div className={classes.filter}>
//           <FilterListIcon
//             className={classes.filterBtn}
//             onClick={() => props.toggleModal("filterModal")}
//           />
//           {props.filterModal && (
//             <FilterModal
//               tabName={props.tabName}
//               filterModal={props.filterModal}
//               toggleModal={props.toggleModal}
//             />
//           )}
//         </div>
//       </div>
//       <AddButtonLarge tabName={props.tabName} />
//       <div />
//     </div>
//   );
// }

const GroupsTab = withStyles(groupsTabStyles)(GroupsTabComp);

function ActivityTab() {
  return <div>You're inside Activity tab.</div>;
}

const addButtonStyles = {
  button: {
    marginLeft: ".5rem",
    minWidth: "50px",
    height: "50px",
    color: "#f2105a",
    fontSize: "30px !important",
    cursor: "pointer",
    position: "fixed",
    bottom: "5%",
    right: "5%"
  }
};

function AddButtonComp(props) {
  const { classes } = props;
  return (
    <div>
      <Tooltip title={props.tooltip}>
        <AddCircleIcon className={classes.button} />
      </Tooltip>
    </div>
  );
}

const AddButton = withStyles(addButtonStyles)(AddButtonComp);

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFriendModal: false,
      filterModal: false,
      openFriends: true,
      openGroups: false,
      openActivity: false
    };
  }

  addFriend = () => {
    //console.log("add new friend");
  };

  addExpense = () => {};

  toggleModal = modal => {
    switch (modal) {
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
          <FriendsTab tabName="friends" addFriend={this.addFriend} />
        )}
        {this.state.openGroups && <GroupsTab tabName="groups" />}
        {this.state.openActivity && <ActivityTab />}
        <AddButton
          addExpense={this.addExpense}
          color="secondary"
          tooltip="Add Expense"
        />
      </div>
    );
  }
}
