import React from "react";
import { withStyles } from "@material-ui/core/styles";

const FriendsInDashboardStyles = {};

class FriendsInDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: false
    };
  }
  render() {
    const { classes } = this.props;
    return <div className={classes.friends}>something else</div>;
  }
}

export default withStyles(FriendsInDashboardStyles)(FriendsInDashboard);
