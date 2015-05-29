const React = require('react');

export default class Welcome extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h2> {this.props.message}</h2>
        <p> This message has been brought to you buy fishes </p>
      </div>
    );
  }
}