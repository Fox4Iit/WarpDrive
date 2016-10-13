var React = require('react');
var ReactDOM = require('react-dom');


var topbar = React.createClass({
  render: function() {
    return (
        {/* LOGO */}
        <div className="topbar-left">
          <div className="text-center">
            <a href="index.html" className="logo"><i className="md md-equalizer" /> <span>WarpDrive</span> </a>
          </div>
        </div>
    );
  }
});

ReactDOM.render(<topbar/>, document.getElementById("topbar"));
