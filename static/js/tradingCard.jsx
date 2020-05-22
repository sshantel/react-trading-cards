"use strict";

class TradingCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>Name: {this.props.name}</h2>
        <img src={this.props.imgUrl} />
        <h2>Skill: {this.props.skill} </h2>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <TradingCard
      name="Balloonicorn"
      skill="video games"
      imgUrl="/static/img/balloonicorn.jpg"
    />
  ),
  document.querySelector('#balloonicorn')
);

ReactDOM.render(
  (
    <TradingCard
      name="Float"
      skill="baking pretzels"
      imgUrl="/static/img/float.jpg"
    />
  ),
  document.querySelector('#float')
);

ReactDOM.render(
  (
    <TradingCard
      name="Llambda"
      skill="knitting scarves"
      imgUrl="/static/img/llambda.jpg"
    />
  ),
  document.querySelector('#llambda')
);

ReactDOM.render(
  (
    <TradingCard
      name="seedpy"
      skill="cooking"
      imgUrl="/static/img/seedpy.jpg"
    />
  ),
  document.querySelector('#seedpy')
);

ReactDOM.render(
  (
    <TradingCard
      name="merge"
      skill="driving"
      imgUrl="/static/img/merge.jpg"
    />
  ),
  document.querySelector('#merge')
);

ReactDOM.render(
  (
    <TradingCard
      name="polymorphism"
      skill="going to class"
      imgUrl="/static/img/polymorphism.jpg"
    />
  ),
  document.querySelector('#polymorphism')
);