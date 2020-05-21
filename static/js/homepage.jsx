"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hooray! Welcome to Balloonicorn's Website!</h1>
        <a href= "/cards"> View Cards here </a>
        <img href="/static/img/balloonicorn.jpg"/>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.getElementbyID('app'));
