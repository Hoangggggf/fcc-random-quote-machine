import React, { Component } from "react";

const quoteList = [
  ["LMAOEZ", "Hoangdeptrai"],
  ["GGEZ", "Hoangdeptraivcl"],
  ["GAMEDEVCL", "Hoangratdeptrai"],
  ["HOANGDEPTRAIVCL", "Hoangsieucapdeptrai"],
];
class RandomQuoteMachine extends Component {
  static currentQuote = 0;
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteList[0][0],
      author: quoteList[0][1],
    };
  }
  change = () => {
    if (this.currentQuote < quoteList.length){
      this.currentQuote++;
    }
    else this.currentQuote = 0;
    this.setState({
        quote: quoteList[this.currentQuote][0],
        author: quoteList[this.currentQuote][1],
    })
  };
  render() {
    return (
      <div id="quote-box" >
        <span id="text">{this.state.quote}</span>
        <p id="author">{this.state.author}</p>
        <button id="new-quote" onClick={this.change}>Generate quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet this quote</a>
      </div>
    );
  }
}
export default RandomQuoteMachine;