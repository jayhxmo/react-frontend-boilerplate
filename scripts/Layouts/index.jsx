import React from 'react';
import ReactDOM from 'react-dom';
require('../../styles/styles.scss');

export default class Index extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
        return (
            <h1>live well love fully<br/>live fully love well</h1>
        );
    }
}

document.addEventListener('DOMContentLoaded', function () {
  	const root = document.getElementById('root');
  	ReactDOM.render(<Index />, root);
});