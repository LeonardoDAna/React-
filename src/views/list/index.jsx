import React from "react";
import "./index.css";
// class List extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       pokemonList: [],
//       filterPokemonList: [],
//     };
//   }

//   componentDidMount() {
//     console.log("组件已挂载");
//   }
//   render(props) {
//     const { pokemonList } = this.props;
//     return (
//       <div>
//         <ul className="ul-container">
//           {pokemonList.map((item) => (
//             <li className="listItem" key={item.url}>
//               <image>
//                 <img
//                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
//                 />
//               </image>
//               <div>{item.name}</div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

const List = (props) => {
  const { pokemonList } = props;

  return (
    <div>
      <ul className="ul-container">
        {pokemonList.map((item) => (
          <li className="listItem" key={item.url}>
            <image>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
              />
            </image>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
