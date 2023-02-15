// 1. albo zapis jak poniżej

import React, { Component } from "react";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css";

class Hotels extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Oferty:</h2>
        <Hotel />
        <Hotel />
      </div>
    );
  }
}

// =========

// 2. albo zapis jak tu poniżej

// import React from "react";

// class Hotels extends React.Component {
//   render() {
//     return <div>Hotels</div>;
//   }
// }

// =========

// function Hotels() {
//   return <div> Hotels </div>;
// }

export default Hotels;
