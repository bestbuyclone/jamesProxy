import React from "react";
//testing docker build
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header id="header">
          <nav>
            <ul>
              <li>Weekly Ad</li>
              <li>Deal of the Day</li>
              <li>Credit Card</li>
              <li>For Your Buisness</li>
              <li>Gift Cards</li>
              <li>Gift Ideas</li>
            </ul>
          </nav>
        </header>
        <h1>This is the Best Buy Clone Page</h1>
      </div>
    );
  }
}

export default App;
