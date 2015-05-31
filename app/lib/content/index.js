import React from 'react';

export default class ContentBlock extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className='content-block'>
        This is a bunch of content in this content pane
      </div>
    );
  }
}