import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Dialog from "@material-ui/core/Dialog";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CancelIcon from "@material-ui/icons/Cancel";
import CropFreeIcon from "@material-ui/icons/CropFree";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FilterListIcon from "@material-ui/icons/FilterList";
import HomeIcon from "@material-ui/icons/Home";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

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

function HeaderComp(props) {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <MenuIcon
        className={classes.hamburger}
        onClick={props.toggleOptionsDialog}
      />
      <Typography variant="h6" className={classes.title}>
        Go-Dutch App
      </Typography>
      <div>
        <MoreVertIcon
          onClick={props.toggle3DotsDialog}
          className={classes.dots}
        />
      </div>
    </div>
  );
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

function ThreeDotsPopoverComp(props) {
  const { classes } = props;
  return (
    <Popover
      open={props.anchorEl != null}
      aria-labelledby="simple-Dialog-title"
      aria-describedby="simple-Dialog-description"
      anchorEl={props.anchorEl}
      onBackdropClick={props.handle3DotsClose}
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
          onClick={props.toggleAddFriend}
        >
          Add new friend
        </Typography>
        <Typography variant="subtitle1" className={classes.contentChild}>
          Create a group
        </Typography>
      </div>
    </Popover>
  );
}

const ThreeDotsPopover = withStyles(threeDotsPopoverStyles)(
  ThreeDotsPopoverComp
);

class AddFriendComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
              onClick={() =>
                this.props.handleCurrentFriend(
                  this.state.currentValue,
                  Date.now()
                )
              }
            >
              {this.state.currentValue
                ? `Add ${this.state.currentValue} to Go-Dutch`
                : "Add a new contact to Go-Dutch"}
            </Typography>
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
      currentFriend: this.props.currentFriend,
      addBtnDisable: true,
      isNumber: false,
      isEmail: false
    };

    let numberRegex = /^[1-9]\d{7,11}$/;
    let emailRegex = /^[\d\w.!#$%&'*+/=?^_`{|}~-]{1,30}@\w{1,30}\.\w{1,30}/;
  }

  activeAddBtn = () => {
    if (
      this.state.currentFriend.name &&
      (this.state.currentFriend.email || this.state.currentFriend.number)
    ) {
      this.setState(prevState => {
        return {
          addBtnDisable: false,
          isEmail: emailRegex.test(this.state.currentFriend.email),
          isNumber: numberRegex.test(this.state.currentFriend.number)
        };
      });
    } else {
      this.setState(prevState => {
        return {
          addBtnDisable: true,
          isEmail: emailRegex.test(this.state.currentFriend.email),
          isNumber: numberRegex.test(this.state.currentFriend.number)
        };
      });
    }
  };

  handleName = e => {
    let name = e.target.value;
    this.setState(prevState => {
      return { currentFriend: { ...this.state.currentFriend, name } };
    }, this.activeAddBtn);
  };

  handleContactInfo = e => {
    let val = e.target.value;
    let isEmail = false;
    if (val.includes("@")) {
      isEmail = true;
    }
    if (isEmail) {
      this.setState(prevState => {
        return {
          currentFriend: { ...this.state.currentFriend, email: val }
        };
      }, this.activeAddBtn);
    } else {
      this.setState(prevState => {
        return {
          currentFriend: { ...this.state.currentFriend, number: val }
        };
      }, this.activeAddBtn);
    }
  };

  handleAddBtn = () => {
    if (this.state.isNumber || this.state.isEmail) {
      this.props.toggleAddMoreFriends(this.state.currentFriend);
    } else {
      this.props.toggleWrongInput();
    }
  };

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
              onClick={() => this.props.handleCurrentFriend("")}
            />
            <Typography variant="subtitle1">Add new contact</Typography>
          </div>
          <div className={classes.right}>
            <Button
              disabled={this.state.addBtnDisable}
              onClick={this.handleAddBtn}
            >
              ADD
            </Button>
          </div>
        </div>
        <div className={classes.details}>
          <form className={classes.friendForm}>
            <TextField
              id="name-field"
              label="Name"
              className={classes.name}
              onChange={this.handleName}
              value={this.state.currentFriend.name}
            />
            <TextField
              id="contact-field"
              label="Phone number or email address"
              className={classes.contact}
              onChange={this.handleContactInfo}
              value={
                this.state.currentFriend.number ||
                this.state.currentFriend.email
              }
            />
            {
              //<MuiPhoneNumber defaultCountry={"in"} />
            }
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

const AddMoreFriendsStyles = {
  box: {
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
  photoIcon: {
    width: "60px",
    position: "relative"
  },
  photo: {
    width: "50px",
    height: "50px",
    color: "#aaa"
  },
  removeUser: {
    width: "25px",
    height: "25px",
    position: "absolute",
    bottom: "5px",
    right: "5px",
    color: "#444",
    cursor: "pointer",
    backgroundColor: "#ddd",
    borderRadius: "50%",
    border: "0px solid #ddd"
  },
  addPara: {
    cursor: "pointer"
  }
};

class AddMoreFriendsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: ""
    };
  }

  handleChange = e => {
    this.setState({ currentValue: e.target.value });
  };
  handleRemoveUser = () => {};
  render() {
    const { classes, friendsList } = this.props;
    console.log(friendsList);
    return (
      <Dialog
        fullScreen={true}
        open={this.props.addMoreFriendsDialog}
        aria-labelledby="Add more friends"
        aria-describedby="Add more friends"
        onBackdropClick={this.props.toggleAddMoreFriends}
        onEscapeKeyDown={this.props.toggleAddMoreFriends}
        classes={{ paper: classes.box }}
      >
        <div className={classes.top}>
          <ArrowBackIcon
            className={classes.arrow}
            onClick={this.props.toggleAddMoreFriends}
          />
          <TextField
            id="add-friend-field"
            className={classes.textField}
            placeholder="Enter name, email, phone #"
            onChange={this.handleChange}
            value={this.state.currentValue}
          />
        </div>
        <div className={classes.friendsList}>
          {friendsList.map(friend => {
            return (
              <div className={classes.friend} key={friend.key}>
                <div className={classes.photoIcon}>
                  <AccountCircleIcon className={classes.photo} />
                  <HighlightOffIcon
                    className={classes.removeUser}
                    onClick={this.handleRemoveUser}
                  />
                </div>
                <Typography>{friend.name}</Typography>
              </div>
            );
          })}
          <Typography
            variant="subtitle1"
            className="addPara"
            onClick={() =>
              this.props.handleCurrentFriend(
                this.state.currentValue,
                Date.now()
              )
            }
          >
            {this.state.currentValue
              ? `Add ${this.state.currentValue} to Go-Dutch`
              : "Add a new contact to Go-Dutch"}
          </Typography>
        </div>
      </Dialog>
    );
  }
}

const AddMoreFriends = withStyles(AddMoreFriendsStyles)(AddMoreFriendsComp);

const alertDialogBoxStyles = {
  alertDialogBox: {
    width: "300px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  message: {
    padding: "10px",
    textAlign: "center",
    marginTop: "1rem"
  },
  close: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "1rem"
  }
};

function WrongInputComp(props) {
  const { classes } = props;
  return (
    <Dialog
      open={props.wrongInputDialog}
      aria-labelledby="Wrong phone number or email id"
      aria-describedby="Wrong phone number or email id"
      onBackdropClick={props.toggleWrongInput}
      onEscapeKeyDown={props.toggleWrongInput}
      classes={{ paper: classes.alertDialogBox }}
    >
      <Typography className={classes.message}>
        Invalid phone number or email id.
      </Typography>
      <div className={classes.close}>
        <Button color="primary" onClick={props.toggleWrongInput}>
          OK
        </Button>
      </div>
    </Dialog>
  );
}

const WrongInput = withStyles(alertDialogBoxStyles)(WrongInputComp);

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
      optionsDialog: false,
      threeDotsDialog: false,
      addFriendDialog: false,
      addDetailsDialog: false,
      wrongInputDialog: false,
      addMoreFriendsDialog: false,

      anchorEl: false,

      addFriend: false,
      currentFriend: {
        name: "",
        number: "",
        email: "",
        key: ""
      },
      friendsList: [],

      openFriends: true,
      openGroups: false,
      openActivity: false
    };
  }

  handle3DotsClose = () => {
    this.setState({
      anchorEl: false,
      threeDotsDialog: !this.state.threeDotsDialog
    });
  };

  toggleOptionsDialog = () =>
    this.setState({ optionsDialog: !this.state.optionsDialog });

  toggle3DotsDialog = event => {
    this.setState({
      anchorEl: event.currentTarget,
      threeDotsDialog: !this.state.threeDotsDialog
    });
  };

  toggleAddFriend = () => {
    this.setState({ addFriend: !this.state.addFriend });
  };

  toggleAddDetails = () => {
    this.state.currentValue &&
      this.setState({ addDetailsDialog: !this.state.addDetailsDialog });
  };

  handleCurrentFriend = (currentFriendInput, dateForKey) => {
    let isNumber = /^[1-9]\d+$/.test(currentFriendInput);
    let isEmail = currentFriendInput.includes("@");
    if (isNumber) {
      this.setState({
        currentFriend: {
          name: "",
          number: currentFriendInput,
          email: "",
          key: dateForKey
        },
        addDetailsDialog: !this.state.addDetailsDialog
      });
    } else if (isEmail) {
      this.setState({
        currentFriend: {
          name: "",
          number: currentFriendInput,
          email: "",
          key: dateForKey
        },
        addDetailsDialog: !this.state.addDetailsDialog
      });
    } else {
      this.setState({
        currentFriend: {
          name: currentFriendInput,
          number: "",
          email: "",
          key: dateForKey
        },
        addDetailsDialog: !this.state.addDetailsDialog
      });
    }
  };

  toggleWrongInput = () =>
    this.setState({ wrongInputDialog: !this.state.wrongInputDialog });

  toggleAddMoreFriends = currentFriend =>
    this.setState({
      addMoreFriendsDialog: !this.state.addMoreFriendsDialog,
      friendsList: [...this.state.friendsList, currentFriend]
    });

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
          threeDotsDialog={this.state.threeDotsDialog}
          toggle3DotsDialog={this.toggle3DotsDialog}
          toggleOptionsDialog={this.toggleOptionsDialog}
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
        {this.state.optionsDialog && (
          <OptionsDialog
            optionsDialog={this.state.optionsDialog}
            toggleOptionsDialog={this.toggleOptionsDialog}
          />
        )}
        {this.state.threeDotsDialog && (
          <ThreeDotsPopover
            anchorEl={this.state.anchorEl}
            handle3DotsClose={this.handle3DotsClose}
            friendsList={this.state.friendsList}
            toggleAddFriend={this.toggleAddFriend}
          />
        )}
        {this.state.addFriend && (
          <AddFriend
            addFriend={this.state.addFriend}
            handleCurrentFriend={this.handleCurrentFriend}
            toggleAddFriend={this.toggleAddFriend}
          />
        )}
        {this.state.addDetailsDialog && (
          <AddDetails
            openAddDetails={this.state.addDetailsDialog}
            currentFriend={this.state.currentFriend}
            handleCurrentFriend={this.handleCurrentFriend}
            toggleWrongInput={this.toggleWrongInput}
            toggleAddMoreFriends={this.toggleAddMoreFriends}
          />
        )}
        {this.state.wrongInputDialog && (
          <WrongInput
            wrongInputDialog={this.state.wrongInputDialog}
            toggleWrongInput={this.toggleWrongInput}
          />
        )}
        {this.state.addMoreFriendsDialog && (
          <AddMoreFriends
            addMoreFriendsDialog={this.state.addMoreFriendsDialog}
            friendsList={this.state.friendsList}
            toggleAddMoreFriends={this.toggleAddMoreFriends}
            handleCurrentFriend={this.handleCurrentFriend}
          />
        )}
      </div>
    );
  }
}
