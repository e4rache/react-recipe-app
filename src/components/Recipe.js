import React, { Component } from "react";
import { Link } from "react-router-dom";

import Ingredients from "./Ingredients";
import Loader from "./Loader";

const API_KEY = "ad27e3c95e25f2d07bd72228eda43bd7";
const API_URL = `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/get?key=${API_KEY}&rId=`;

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      recipe: undefined
    };
  }

  componentDidMount = async () => {
    const api_call = await fetch(API_URL + this.state.id);
    let { recipe } = await api_call.json();
    this.setState({ recipe });
  };

  render() {
    const recipe = this.state.recipe;
    return recipe ? (
      <div>
        <div className="container">
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher:{" "}
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher}</a>
              </span>
            </h4>
            <p className="active-recipe__website">
              Recipe:
              <span>
                <a href={recipe.source_url}>
                  {recipe.source_url < 20
                    ? recipe.source_url
                    : `${recipe.source_url.substring(0, 30)}...`}
                </a>
              </span>
            </p>
            <div>Social Rank : {(recipe.social_rank + "").substring(0, 5)}</div>
            <Ingredients ingredients={recipe.ingredients} />
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}
export default Recipe;
