/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

function SiaUI () {
  var pages = [
    {"title": "Overview", "selected": true},
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
          <li className={page.selected ? "navitem navselected" : "navitem"} onClick={handleClick.bind(null, i-1)} key={i-1}> <span className="navtitle">{page.title}</span> </li>
        );
      });
      return (
        <nav>
          {navitems}
          <p className="about">About V0.5.0</p>
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
      for (i = 0; i < pages.length; i++) {
        pages[i].selected = false;
      }
      pages[index].selected = true;
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
