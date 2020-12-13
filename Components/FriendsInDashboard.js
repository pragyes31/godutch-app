import React from "react";
import { withStyles } from "@material-ui/core/styles";

const FriendsInDashboardStyles = {
  friendsList: {
    padding: "10px 20px"
  },
  avatar: {
    width: "45px !important",
    height: "40px !important",
    borderRadius: "50%",
    backgroundImage: `url("https://bit.ly/2UhwGb4")`,
    border: "3px solid #00b8a9",
    marginRight: "10px"
  },
  friend: {
    display: "flex",
    justifyContent: "space-between"
  },
  left: {
    display: "flex",
    alignItems: "center"
  },
  right: {
    display: "flex",
    alignItems: "center"
  }
};

class FriendsInDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: false
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.friendsList}>
        <div className={classes.friend}>
          <div className={classes.left}>
            <div className={classes.avatar} />
            <div className={classes.FriendName}>First</div>
          </div>
          <div className={classes.right}>Settled up</div>
        </div>
      </div>
    );
  }
}

/*
firebase.database().ref('friendsList').on('value', (snapshot) => {})
*/

export default withStyles(FriendsInDashboardStyles)(FriendsInDashboard);
