import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "ad27e3c95e25f2d07bd72228eda43bd7";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    e.preventDefault();

    const keyWord = e.target.elements.recipename.value;

    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${API_KEY}&q=${keyWord}&count=100`
    );

    const data = await api_call.json();

    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Recipe App Example</h1>
          <span>
            derived from the work of{" "}
            <a href="https://www.youtube.com/channel/UCBV-JvG9Ubkj7AU6Cxls1Tw">
              Hamza Mirza
            </a>.
          </span>
          <span>
            {" "}
            Tutorial Video :{" "}
            <a href="https://www.youtube.com/watch?v=PbJt7-a2274">
              {" "}
              [youtube]
            </a>.
          </span>
          <span>
            {" "}
            Code :{" "}
            <a href="https://github.com/hamza-mirza/react-recipe-app">
              [github]
            </a>.
          </span>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
