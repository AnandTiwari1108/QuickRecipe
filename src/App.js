
import "./App.css";
import  { useEffect, useState } from "react";
import { Recipe } from "./Recipe";

const App = () => {
  const APP_ID = "5e110243";
  const APP_KEY = "fe963662cdf52530837b852889f996f6";
  // const search=document.getElementById('searchbar').value;

  // const exampleReq=
  // `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] =useState('chicken')
  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const onSearch=()=>{
    setSearch(document.getElementById('searchbar').value)
  }
  const onM=e=>{
    e.preventDefault()
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={onM}>
        <input className="search-bar" id="searchbar" type="text"></input>
        <button className="search-button" type="submit" onClick={onSearch}>
          Search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map((recipes) => (
        <Recipe
          key={recipes.recipe.label}
          title={recipes.recipe.label}
          calories={recipes.recipe.calories}
          image={recipes.recipe.image}
          ing={recipes.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
