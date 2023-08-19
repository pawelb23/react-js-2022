import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function checkScreenWidth() {
  var w = window.innerWidth;
  const resizeAllClass = document.querySelectorAll(".resize-screen-info");
  let resizeClass;

  if (w >= 576) {
    for (resizeClass of resizeAllClass) {
      resizeClass.classList.add("row");
    }
  } else {
    for (resizeClass of resizeAllClass) {
      resizeClass.classList.remove("row");
    }
  }
  // console.log(w);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

setTimeout(checkScreenWidth, 0);

window.addEventListener("load", checkScreenWidth);

window.addEventListener("resize", checkScreenWidth);
