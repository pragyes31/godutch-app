import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Dialog from "@material-ui/core/Dialog";
import Popover from "@material-ui/core/Popover";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CropFreeIcon from "@material-ui/icons/CropFree";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FilterListIcon from "@material-ui/icons/FilterList";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import RateReviewIcon from "@material-ui/icons/RateReview";
import SettingsIcon from "@material-ui/icons/Settings";

import { withStyles } from "@material-ui/core/styles";

import MuiPhoneNumber from "material-ui-phone-number";

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
      optionsDialog: false,
      threeDotsDialog: false,
      addFriendDialog: false,
      anchorEl: false
    };
  }
  toggle3DotsDialog = event => {
    this.setState({
      anchorEl: event.currentTarget,
      threeDotsDialog: !this.state.threeDotsDialog
    });
  };

  toggleOptionsDialog = () =>
    this.setState({ optionsDialog: !this.state.optionsDialog });

  handleClose = () => {
    this.setState({
      anchorEl: false,
      threeDotsDialog: !this.state.threeDotsDialog
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <MenuIcon
          className={classes.hamburger}
          onClick={this.toggleOptionsDialog}
        />
        {this.state.optionsDialog && (
          <OptionsDialog
            optionsDialog={this.state.optionsDialog}
            toggleOptionsDialog={this.toggleOptionsDialog}
          />
        )}
        <Typography variant="h6" className={classes.title}>
          Go-Dutch App
        </Typography>
        <div>
          <MoreVertIcon
            onClick={this.toggle3DotsDialog}
            className={classes.dots}
          />
          {this.state.threeDotsDialog && (
            <ThreeDotsPopover
              anchorEl={this.state.anchorEl}
              handleClose={this.handleClose}
            />
          )}
        </div>
      </div>
    );
  }
}

const Header = withStyles(headerStyles)(HeaderComp);

const optionsDialogStyles = {
  fullDialog: {
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

function OptionsDialogComp(props) {
  const { classes } = props;
  return (
    <Dialog
      open={props.optionsDialog}
      aria-labelledby="simple-Dialog-title"
      aria-describedby="simple-Dialog-description"
      onBackdropClick={props.toggleOptionsDialog}
      onEscapeKeyDown={props.toggleOptionsDialog}
      classes={{ paper: classes.fullDialog }}
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

const OptionsDialog = withStyles(optionsDialogStyles)(OptionsDialogComp);

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

const threeDotsPopoverStyles = {
  Dialog: {
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

class ThreeDotsPopoverComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFriend: false
    };
  }
  toggleAddFriend = () => {
    this.setState({ addFriend: !this.state.addFriend });
  };

  render() {
    const { classes } = this.props;
    return (
      <Popover
        open={this.props.anchorEl != null}
        aria-labelledby="simple-Dialog-title"
        aria-describedby="simple-Dialog-description"
        anchorEl={this.props.anchorEl}
        onBackdropClick={this.props.handleClose}
        classes={{ paper: classes.Dialog }}
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
            onClick={this.toggleAddFriend}
          >
            Add new friend
          </Typography>
          <Typography variant="subtitle1" className={classes.contentChild}>
            Create a group
          </Typography>
        </div>
        {this.state.addFriend && (
          <AddFriend
            addFriend={this.state.addFriend}
            toggleAddFriend={this.toggleAddFriend}
          />
        )}
      </Popover>
    );
  }
}

const ThreeDotsPopover = withStyles(threeDotsPopoverStyles)(
  ThreeDotsPopoverComp
);

class AddFriendComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addDetails: false,
      currentValue: ""
    };
  }

  handleChange = e => {
    this.setState({ currentValue: e.target.value });
  };
  toggleDialog = () => {
    this.setState({ currentValue: "" });
    this.props.toggleAddFriend();
  };
  toggleAddDetails = () => {
    this.state.currentValue &&
      this.setState({ addDetails: !this.state.addDetails });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.addFriend}>
        <Dialog
          fullScreen={true}
          open={this.props.addFriend}
          aria-labelledby="Add New friend Dialog"
          aria-describedby="Add New friend Dialog"
          onBackdropClick={this.toggleDialog}
          onEscapeKeyDown={this.toggleDialog}
          classes={{ paper: classes.addFriend }}
        >
          <div className={classes.top}>
            <ArrowBackIcon
              className={classes.arrow}
              onClick={this.toggleDialog}
            />
            <TextField
              id="add-friend-field"
              className={classes.textField}
              onChange={this.handleChange}
              value={this.state.currentValue}
              placeholder="Enter name, email, phone #"
            />
          </div>
          <div className={classes.addForm}>
            <PersonAddIcon className={classes.addIcon} />
            <Typography
              variant="subtitle1"
              className="addPara"
              onClick={this.toggleAddDetails}
            >
              {this.state.name || this.state.phoneNumber || this.state.emailId
                ? `Add ${this.state.currentValue} to Go-Dutch`
                : "Add a new contact to Go-Dutch"}
            </Typography>
            {this.state.addDetails && (
              <AddDetails
                openAddDetails={this.state.addDetails}
                currentValue={this.state.currentValue}
                toggleAddDetails={this.toggleAddDetails}
              />
            )}
          </div>
        </Dialog>
      </div>
    );
  }
}

const addFriendStyles = {
  addFriend: {
    maxWidth: "600px"
  },
  top: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#00b8a9"
  },
  arrow: {
    cursor: "pointer",
    width: "7%",
    color: "#fff"
  },
  textField: {
    width: "93%",
    color: "#fff"
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
  },
  arrow: {
    cursor: "pointer"
  }
};

class AddDetailsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contactInfo: ""
    };

    let numberRegex = /\d+/;
    let isNumber = numberRegex.test(props.currentValue);

    if (props.currentValue.includes("@") || isNumber) {
      this.state.contactInfo = props.currentValue;
      this.state.name = "";
    } else {
      this.state.name = props.currentValue;
      this.state.contactInfo = "";
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        fullScreen={true}
        open={this.props.openAddDetails}
        aria-labelledby="Add New friend Dialog"
        aria-describedby="Add New friend Dialog"
        onBackdropClick={this.toggleDialog}
        onEscapeKeyDown={this.toggleDialog}
        classes={{ paper: classes.addDetails }}
      >
        <div className={classes.header}>
          <div className={classes.left}>
            <ArrowBackIcon
              className={classes.arrow}
              onClick={this.props.toggleAddDetails}
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
              value={this.state.contactInfo}
            />
            <MuiPhoneNumber defaultCountry={"in"} />
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

const filterDialogStyles = {
  Dialog: {
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
  DialogChild: {
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

function FilterDialogComp(props) {
  const { classes } = props;
  return (
    <Dialog
      open={props.filterDialog}
      aria-labelledby="Add New friend Dialog"
      aria-describedby="Add New friend Dialog"
      onBackdropClick={() => props.toggleDialog("filterDialog")}
      onEscapeKeyDown={() => props.toggleDialog("filterDialog")}
      classes={{ paper: classes.Dialog }}
    >
      <Typography className={classes.DialogChild}>
        All {props.tabName}
      </Typography>
      <Typography className={classes.DialogChild}>
        {props.tabName} with outstanding balances
      </Typography>
      <Typography className={classes.DialogChild}>
        {props.tabName} you owe
      </Typography>
      <div className={classes.DialogChild}>
        {props.tabName === "friends" ? "friends who" : "groups that"} owe you
      </div>
    </Dialog>
  );
}

const FilterDialog = withStyles(filterDialogStyles)(FilterDialogComp);

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
      filterDialog: false
    };
  }
  toggleDialog = () =>
    this.setState({ filterDialog: !this.state.filterDialog });
  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.tabName}>
        <div className={classes.user}>
          <UserBalance />
          <div className={classes.filter}>
            <FilterListIcon
              className={classes.filterBtn}
              onClick={this.toggleDialog}
            />
            {this.state.filterDialog && (
              <FilterDialog
                tabName={this.props.tabName}
                filterDialog={this.state.filterDialog}
                toggleDialog={this.toggleDialog}
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
      filterDialog: false
    };
  }
  toggleDialog = () =>
    this.setState({ filterDialog: !this.state.filterDialog });

  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.tabName}>
        <div className={classes.user}>
          <UserBalance />
          <div className={classes.filter}>
            <FilterListIcon
              className={classes.filterBtn}
              onClick={this.toggleDialog}
            />
            {this.state.filterDialog && (
              <FilterDialog
                tabName={this.props.tabName}
                filterDialog={this.state.filterDialog}
                toggleDialog={this.toggleDialog}
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

const GroupsTab = withStyles(groupsTabStyles)(GroupsTabComp);

function ActivityTab() {
  return <div>You are inside Activity tab.</div>;
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
      addFriendDialog: false,
      openFriends: true,
      openGroups: false,
      openActivity: false
    };
  }

  addFriend = () => {};

  addExpense = () => {};

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
        <Header threeDotsDialog={this.state.threeDotsDialog} />
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
