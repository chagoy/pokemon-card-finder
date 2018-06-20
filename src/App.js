import React from 'react';
import './App.css';
import SearchForm from './components/search-form';
import Deck from './components/deck';
import Card from './components/card';
import Warning from './components/warning';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      searchTerm: '',
      link: 'https://api.pokemontcg.io/v1/cards?name=',
      deck: [],
      message: ''
    }
  }


    getCards() {
      fetch(`${this.state.link}${this.state.searchTerm}`)
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        this.setState({cards: myJson.cards});
      });
    }

    addToDeck(card) {
      if (this.state.deck.length >= 6) {
        this.setState({message: 'You cannot have more than 6 cards'})
      } else {
          this.setState(prev =>({
          deck: [...prev.deck, card]
        }))
      }
    }

    removeCard(index) {
      const array = this.state.deck.slice(0)
      array.splice(index, 1);
      this.setState({deck: array});
      this.resetWarning();
    }

    resetWarning() {
      this.setState({message: ''});
    }


  render() {
    const html = this.state.cards.map((card, index) => 
        <Card pokemon={card} key={index} onClick={() => this.addToDeck(card)} />
      );

    return (
      <div className="live-search">
        <Deck deck={this.state.deck} removeCard={(e) => this.removeCard(e)} />
        <Warning message={this.state.message} />
        <SearchForm 
          onChange={searchTerm => this.setState({searchTerm})} 
          onSubmit={() => this.getCards()} 
        />
        <div className="row">
          {html ? html : null}
        </div>
      </div>
    );
  }
}

export default App;
