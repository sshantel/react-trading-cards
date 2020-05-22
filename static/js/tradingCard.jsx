const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'seedpy',
    skill: 'cooking',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'merge',
    skill: 'driving',
    imgUrl: '/static/img/merge.jpg'
  },

  {
    name: 'polymorphism',
    skill: 'going to class',
    imgUrl: '/static/img/polymorphism.jpg'
  }
];

"use strict";

class TradingCard extends React.Component {
  render() {

    const tradingCards = [];

    for (const currentCard of tradingCardData) {
      tradingCards.push(
        <TradingCard
        name={currentCard.name}
        skill={currentCard.skill}
        imageUrl={currentCard.imageUrl})
        />
      );
    }

    return (
      <div>
      {tradingCards}
      </div>
    );
  }
}

 