var React = require('react');
var Nav = require('Nav');

const divStyle = {
  justifyContent: 'center',
};

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="grid-x" style={divStyle}>
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
