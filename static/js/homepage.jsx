"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p> Hooray! Welcome to Balloonicorn's Website!</p>
        <a href= "/cards"> View Cards here </a>
        <img href="/static/img/balloonicorn.jpg"/>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
