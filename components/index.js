import React from 'react';

export default class IndexComponent extends React.Component {
  render() {
    return (
      <div>
      	<noscript className="noscript">JavaScript is turned off</noscript>

        <p>This page works with JavaScript turned on and off </p>

		<a href="https://24ways.org/2015/universal-react">Based on Universal React</a> by <a href="https://twitter.com/Jack_Franklin">@Jack_Franklin</a>
		
		<p>Created by <a href="https://twitter.com/keemor">@keemor</a></p>
      </div>
    );
  }
}
