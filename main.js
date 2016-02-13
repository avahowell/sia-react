/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var SiaUI = require('./siaui.js');

console.log(SiaUI);

ReactDOM.render(
  <SiaUI.app />,
  document.getElementById("app")
);

document.body.style.width = window.innerWidth + "px";
document.body.style.height = window.innerHeight + "px";

window.onresize = function() {
    document.body.style.width = window.innerWidth + "px";
    document.body.style.height = window.innerHeight + "px";
}
