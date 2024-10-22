import List from "../list/index";
import SearchInput from "../input/index";
import React from "react";

// class PokemonSearchBox extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       pokemonList: [],
//       filterPokemonList: [],
//       searchValue: "",
//     };
//   }
//   componentDidMount() {
//     console.log("组件已挂载");

//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((res) => res.json())
//       .then((json) => {
//         json.results.map((result, index) => {
//           result.id = index + 1;
//         });
//         this.setState({
//           pokemonList: json.results,
//           filterPokemonList: json.results,
//         });
//       });
//   }

//   handleChange(event) {
//     console.log(event.target.value);
//     const filterPokemonList = this.state.pokemonList.filter((pokemon) =>
//       pokemon.name.includes(event.target.value)
//     );
//     this.setState(
//       () => {
//         return { filterPokemonList };
//       },
//       () => {
//         console.log(this.state.filterPokemonList);
//       }
//     );
//   }
//   render() {
//     return (
//       <div>
//         <SearchInput handleChange={this.handleChange.bind(this)}></SearchInput>
//         <List pokemonList={this.state.filterPokemonList}></List>
//       </div>
//     );
//   }
// }

const PokemonSearchBox = () => {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [filterPokemonList, setFilterPokemonList] = React.useState([]);

  React.useEffect(() => {
    console.log("组件已挂载");

    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        json.results.map((result, index) => {
          result.id = index + 1;
        });
        setPokemonList(json.results);
        setFilterPokemonList(json.results);
      });
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    const filterPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(event.target.value)
    );
    setFilterPokemonList(filterPokemonList);
  };

  return (
    <div>
      <SearchInput handleChange={handleChange}></SearchInput>
      <List pokemonList={filterPokemonList}></List>
    </div>
  );
};

export default PokemonSearchBox;
