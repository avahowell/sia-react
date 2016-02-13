/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

function SiaUI () {
  var pages = [
    { "title": "Overview", "selected": true},
      {"title": "Files", "selected": false},
      {"title": "Hosting", "selected": false},
      {"title": "Wallet", "selected": false},
      {"title": "Plugins", "selected": false},
      {"title": "Notifications", "selected": false},
  ];
  var UIPage = React.createClass({
    render: function () {
      return (
        <div className="page">
          <div className="title">
          {this.props.pages[this.props.index].title}
          </div>
        </div>
      );
    },
  });
  var UINav = React.createClass({
    render: function() {
      var handleClick = this.props.navClick;
      var i = 0;
      var navitems = this.props.pages.map(function(page) {
        i = i + 1
        return (
          <li className="navitem" onClick={handleClick.bind(null, i-1)} key={i-1}> {page.title} </li>
        );
      });
      return (
        <nav>
          {navitems}
        </nav>
      );
    }
  })
  var SiaApp = React.createClass({
    getInitialState: function() {
      return {
        pageindex: 0,
      };
    },
    setPageIndex: function(index) {
      console.log(index)
      this.setState({pageindex: index});
    },
    render: function () {
      return (
        <div>
          <UINav index={this.state.pageindex} navClick={this.setPageIndex} pages={pages} />
          <UIPage index={this.state.pageindex} pages={pages} />
        </div>
      );
    },
  });
  return (
    {
      "app": SiaApp
    }
  );
}
module.exports = new SiaUI();
