import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Nav.scss";

class Nav extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className="Nav">
        <Link to="/">
          <h3 style={{ color: `#${color}` }}>
            Finder <span>.</span>{" "}
          </h3>
        </Link>
      </div>
    );
  }
}

export default Nav;
