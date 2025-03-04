import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  //foo = () => "BARS";
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
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
