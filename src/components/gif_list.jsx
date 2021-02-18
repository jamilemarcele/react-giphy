import React, { Component } from 'react';
import Gif from "./gif";

const GifList = (props) => {
  return (

    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;

// class GifList extends Component {
//    renderList = () => {
//     return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />);
//   }
//
//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     );
//   }
// }
