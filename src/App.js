import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  //foo = () => "BARS";

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  // Search git hub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    //console.log(text);
  };

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // set alert
  setAlert = (msg, type) => {
    this.setState({
      // alert: {
      //   msg: msg,
      //   type: type,
      // },
      alert: { msg, type }, // equivalent
    });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={this.state.users} />
        </div>
      </div>
    );

    // const name = "John Doe";
    // //const foo = () => "bar";
    // const loading = true;

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    // return (
    //   <Fragment>
    //     <div className='App'>
    //       <h1>Hello from {this.foo().toUpperCase()}</h1>
    //     </div>
    //     <h2> goodBye </h2>
    //   </Fragment>
    // );

    // return (
    //   <div className='App'>{loading ? <h4>loading</h4> : <h4>hellock</h4>}</div>
    // );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello From React")
    // );
  }
}

export default App;
