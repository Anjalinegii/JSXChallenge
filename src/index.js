var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1 className="heading">My Fav Movies</h1>
    <ul>
      <li>Your Name</li>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.XaZL7RQhbmJMMZFJCN1c0gHaEo&pid=Api&P=0"
        alt=""
      ></img>

      <li>Spirited Away</li>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.sMG3KldGPJNZPs61Xbo0pQHaFj&pid=Api&P=0"
        alt=""
      ></img>

      <li>Weathering With You</li>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.UxjyTKNAzxhPEeqlITmcMAHaGs&pid=Api&P=0"
        alt=""
      ></img>
    </ul>
  </div>,
  document.getElementById("root")
);
