import React, { Component, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ user, getUser }) => {
  //   componentDidMount() {
  //     this.props.getUser(this.props.match.params.login);
  //   }

  const { login } = useParams(); // Get the :login parameter from the URL

  useEffect(() => {
    getUser(login); // Fetch user data using the login parameter
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    loading,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return <div>User</div>;
  }
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

export default User;
