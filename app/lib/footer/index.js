import './footer.scss';
import React from 'react';

export default class FooterBlock extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className='footer-block'>
        This is the footer
      </div>
    );
  }
}