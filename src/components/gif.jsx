import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media3.giphy.com/media/dUTObKnNrLa9KeCjDi/giphy.gif?cid=ecf05e479fb6453e699d56fd8948b0de406a1d077d92514f&rid=giphy.gif"
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
