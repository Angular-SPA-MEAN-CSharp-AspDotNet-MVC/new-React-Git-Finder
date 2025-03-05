import React, { Component } from "react";
import { useParams } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return <div>User</div>;
    }
  }
}

export default User;
