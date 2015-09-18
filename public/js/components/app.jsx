var React = require("react");
var Test = require("./test");
var Another = require("./another");

var App = React.createClass({
	handleClick: function() {
		console.log('you clicked me');
	},
  render: function() {
    return (
    	<div>
      	<div onClick={this.handleClick}>Hello!</div>
      	<Test />
      	<Another />
      </div>
    );
  }
});

module.exports = App;