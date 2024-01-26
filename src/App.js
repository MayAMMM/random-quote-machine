import './App.css';

function App() {
  return <div className="App">
    <div class="horizontally-centered" id="quote-box">
      <p id="text">
        <p id="author">
          <button id="new-quote" class="btn btn-lg btn-success">New Quote</button>
          <button><a href="twitter.com/intent/tweet"id="tweet-quote">Tweet Quote</a></button>

        </p>
      </p>
    </div>
  </div>; 
}

export default App;
